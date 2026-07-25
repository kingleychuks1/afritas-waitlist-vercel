import { neon } from "@neondatabase/serverless";

// Vercel's "Connect Store" flow for Neon injects the connection string under
// a couple of different names depending on how it was linked (the
// @vercel/postgres-style POSTGRES_URL, or Neon/Prisma-style DATABASE_URL).
// We check the common ones so this works regardless of which the dashboard
// used for your project.
const CONNECTION_STRING =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.DATABASE_URL_UNPOOLED;

if (!CONNECTION_STRING) {
  throw new Error(
    "No Postgres connection string found. Expected one of DATABASE_URL, POSTGRES_URL or " +
      "POSTGRES_PRISMA_URL to be set (Vercel sets these automatically once the Neon " +
      "storage is connected to this project — check Project Settings -> Environment " +
      "Variables if this keeps failing)."
  );
}

export const sql = neon(CONNECTION_STRING);

let tableReady = null;

// Creates both tables on first call, then no-ops for the rest of this
// serverless instance's lifetime.
export function ensureTables() {
  if (!tableReady) {
    tableReady = Promise.all([
      sql`
        CREATE TABLE IF NOT EXISTS traveller_waitlist (
          id SERIAL PRIMARY KEY,
          full_name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          phone TEXT NOT NULL,
          country TEXT NOT NULL,
          city TEXT NOT NULL,
          services TEXT[] NOT NULL DEFAULT '{}',
          heard_from TEXT,
          consent BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `,
      sql`
        CREATE TABLE IF NOT EXISTS vendor_waitlist (
          id SERIAL PRIMARY KEY,
          business_name TEXT NOT NULL,
          contact_person TEXT NOT NULL,
          business_email TEXT NOT NULL UNIQUE,
          phone TEXT NOT NULL,
          country TEXT NOT NULL,
          city_or_state TEXT NOT NULL,
          vendor_category TEXT NOT NULL,
          website TEXT,
          number_of_listings INTEGER,
          current_method TEXT,
          consent BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `,
    ]);
  }
  return tableReady;
}
