import { sql, ensureTables } from "../lib/db.js";
import { isValidEmail, clean, requireFields } from "../lib/validate.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  // Honeypot: a hidden field real users never fill in. Bots that
  // autofill every field will trip this, and we just pretend it worked.
  if (clean(body.company)) {
    return res.status(201).json({ ok: true });
  }

  const missing = requireFields(body, ["fullName", "email", "phone", "country", "city"]);
  if (missing.length) {
    return res.status(400).json({ error: `Please fill in: ${missing.join(", ")}.` });
  }

  const email = clean(body.email).toLowerCase();
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!body.consent) {
    return res.status(400).json({ error: "Please accept the privacy consent to continue." });
  }

  const services = Array.isArray(body.services) ? body.services.map((s) => clean(s)) : [];

  try {
    await ensureTables();

    await sql`
      INSERT INTO traveller_waitlist
        (full_name, email, phone, country, city, services, heard_from, consent)
      VALUES
        (${clean(body.fullName)}, ${email}, ${clean(body.phone, { max: 40 })},
         ${clean(body.country, { max: 80 })}, ${clean(body.city, { max: 80 })},
         ${services}, ${clean(body.heardFrom, { max: 80 }) || null}, true)
    `;

    return res.status(201).json({ ok: true });
  } catch (err) {
    if (err?.code === "23505") {
      return res.status(409).json({ error: "That email is already on the traveller waitlist." });
    }
    console.error(err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
