import { createClient } from "@supabase/supabase-js";

// Server-only client. Uses the service role key so it can bypass Row Level
// Security to insert rows — this file must NEVER be imported from client
// code (it isn't; it's only used inside /api functions). The service role
// key is read from a plain (non VITE_-prefixed) env var, so Vite never
// bundles it into the browser build.
let client = null;

export function getSupabaseAdmin() {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables."
    );
  }

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  return client;
}
