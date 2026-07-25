-- Optional: you don't have to run this by hand. lib/db.js calls
-- CREATE TABLE IF NOT EXISTS for both tables on the first API request, so
-- they're created automatically the first time someone joins a waitlist.
-- Run this manually first (in the Neon SQL editor, or via Vercel's Storage
-- tab -> your Neon database -> Query) only if you want the tables to exist
-- before that.

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
);

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
);

-- Both tables have a UNIQUE constraint on their email column, which is what
-- the API routes rely on to reject duplicate sign-ups with a 409.
