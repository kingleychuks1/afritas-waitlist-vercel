import { sql } from "@vercel/postgres";
import { ensureTable } from "../lib/db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  await ensureTable();

  const { rows } = await sql`SELECT COUNT(*)::int AS count FROM signups`;
  return res.status(200).json({ count: rows[0].count });
}
