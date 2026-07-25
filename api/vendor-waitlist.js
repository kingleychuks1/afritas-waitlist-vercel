import { sql, ensureTables } from "../lib/db.js";
import { isValidEmail, clean, requireFields } from "../lib/validate.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  // Honeypot field, see traveller-waitlist.js for the same pattern.
  if (clean(body.company_hp)) {
    return res.status(201).json({ ok: true });
  }

  const missing = requireFields(body, [
    "businessName",
    "contactPerson",
    "businessEmail",
    "phone",
    "country",
    "cityOrState",
    "vendorCategory",
  ]);
  if (missing.length) {
    return res.status(400).json({ error: `Please fill in: ${missing.join(", ")}.` });
  }

  const email = clean(body.businessEmail).toLowerCase();
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid business email address." });
  }

  if (!body.consent) {
    return res.status(400).json({ error: "Please accept the privacy consent to continue." });
  }

  const numberOfListings = body.numberOfListings ? Number(body.numberOfListings) || null : null;

  try {
    await ensureTables();

    await sql`
      INSERT INTO vendor_waitlist
        (business_name, contact_person, business_email, phone, country, city_or_state,
         vendor_category, website, number_of_listings, current_method, consent)
      VALUES
        (${clean(body.businessName)}, ${clean(body.contactPerson)}, ${email},
         ${clean(body.phone, { max: 40 })}, ${clean(body.country, { max: 80 })},
         ${clean(body.cityOrState, { max: 80 })}, ${clean(body.vendorCategory, { max: 80 })},
         ${clean(body.website, { max: 200 }) || null}, ${numberOfListings},
         ${clean(body.currentMethod, { max: 120 }) || null}, true)
    `;

    return res.status(201).json({ ok: true });
  } catch (err) {
    if (err?.code === "23505") {
      return res.status(409).json({ error: "That business email is already on the vendor waitlist." });
    }
    console.error(err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
