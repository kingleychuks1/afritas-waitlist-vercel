import { sql } from "@vercel/postgres";
import { ensureTable } from "../lib/db.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  await ensureTable();

  const email = String(req.body?.email || "").trim().toLowerCase();
  const name = String(req.body?.name || "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  try {
    await sql`INSERT INTO signups (email, name) VALUES (${email}, ${name || null})`;
    const { rows } = await sql`SELECT COUNT(*)::int AS count FROM signups`;
    return res.status(201).json({ email, count: rows[0].count });
  } catch (err) {
    if (String(err?.message || "").includes("duplicate key")) {
      return res.status(409).json({ error: "That email is already on the waitlist." });
    }
    console.error(err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
