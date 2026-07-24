import { sql } from "@vercel/postgres";

let tableReady = null;

// Creates the signups table on first call, then no-ops on later invocations
// within the same warm serverless instance.
export function ensureTable() {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS signups (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        name TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
  }
  return tableReady;
}
