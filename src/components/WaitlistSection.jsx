import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { API_URL } from "../config.js";
import { Reveal } from "../hooks.jsx";

const TRAVELLER_SERVICES = [
  "Hotels",
  "Shortlets",
  "Events",
  "Attractions",
  "Car rentals",
  "Boat rentals",
  "Tours",
];

const HEARD_FROM = ["Instagram", "Twitter / X", "Facebook", "Friend or family", "Search engine", "Other"];

const VENDOR_CATEGORIES = [
  "Hotel",
  "Shortlet",
  "Event organiser",
  "Attraction operator",
  "Car rental",
  "Boat rental",
  "Tour operator",
  "Property manager",
];

const BOOKING_METHODS = [
  "Phone calls & messages",
  "Spreadsheet",
  "Another booking platform",
  "Social media DMs",
  "No system yet",
];

function Field({ label, children }) {
  return (
    <label className="wl-field">
      <span className="wl-label">{label}</span>
      {children}
    </label>
  );
}

function SuccessCard({ message }) {
  return (
    <div className="wl-card wl-success">
      <div className="wl-icon">
        <CheckCircle2 size={30} strokeWidth={1.8} />
      </div>
      <p className="wl-lead" style={{ fontSize: 16, color: "var(--ink)", fontWeight: 500 }}>
        {message}
      </p>
    </div>
  );
}

function TravellerForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [services, setServices] = useState([]);

  function toggleService(s) {
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (form.get("company")) return; // honeypot triggered, silently drop

    setStatus("loading");
    setError("");

    const payload = {
      fullName: form.get("fullName"),
      email: form.get("email"),
      phone: form.get("phone"),
      country: form.get("country"),
      city: form.get("city"),
      services,
      heardFrom: form.get("heardFrom"),
      consent: form.get("consent") === "on",
    };

    try {
      const res = await fetch(`${API_URL}/api/traveller-waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("err");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("err");
      setError("Couldn't reach the server. Please try again in a moment.");
    }
  }

  if (status === "ok") {
    return (
      <SuccessCard message="You're on the Afritas traveller waitlist! We'll contact you when early access becomes available." />
    );
  }

  return (
    <form className="wl-card wl-form" onSubmit={handleSubmit} noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />

      <Field label="Full name">
        <input type="text" name="fullName" required placeholder="Adaeze Okonkwo" />
      </Field>
      <Field label="Email address">
        <input type="email" name="email" required placeholder="you@example.com" />
      </Field>
      <Field label="Phone number">
        <input type="tel" name="phone" required placeholder="+234 800 000 0000" />
      </Field>
      <div className="wl-row">
        <Field label="Country">
          <input type="text" name="country" required placeholder="Nigeria" />
        </Field>
        <Field label="City">
          <input type="text" name="city" required placeholder="Lagos" />
        </Field>
      </div>

      <div className="wl-field">
        <span className="wl-label">Services of interest</span>
        <div className="chip-checkbox-row">
          {TRAVELLER_SERVICES.map((s) => (
            <label key={s} className={`chip-checkbox ${services.includes(s) ? "checked" : ""}`}>
              <input
                type="checkbox"
                checked={services.includes(s)}
                onChange={() => toggleService(s)}
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <Field label="How did you hear about Afritas?">
        <select name="heardFrom" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {HEARD_FROM.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </Field>

      <label className="wl-consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to Afritas's privacy policy and consent to being contacted about the waitlist.
        </span>
      </label>

      {error ? <p className="form-message err">{error}</p> : null}

      <button type="submit" className="btn btn-primary wl-submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join as a Traveller"}
      </button>
    </form>
  );
}

function VendorForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (form.get("company_hp")) return; // honeypot triggered, silently drop

    setStatus("loading");
    setError("");

    const payload = {
      businessName: form.get("businessName"),
      contactPerson: form.get("contactPerson"),
      businessEmail: form.get("businessEmail"),
      phone: form.get("phone"),
      country: form.get("country"),
      cityOrState: form.get("cityOrState"),
      vendorCategory: form.get("vendorCategory"),
      website: form.get("website"),
      numberOfListings: form.get("numberOfListings"),
      currentMethod: form.get("currentMethod"),
      consent: form.get("consent") === "on",
    };

    try {
      const res = await fetch(`${API_URL}/api/vendor-waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("err");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("err");
      setError("Couldn't reach the server. Please try again in a moment.");
    }
  }

  if (status === "ok") {
    return (
      <SuccessCard message="Your business has joined the Afritas vendor waitlist! Our partnership team will contact you with onboarding information." />
    );
  }

  return (
    <form className="wl-card wl-form" onSubmit={handleSubmit} noValidate>
      <input type="text" name="company_hp" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />

      <Field label="Business name">
        <input type="text" name="businessName" required placeholder="Waterview Shortlets Ltd" />
      </Field>
      <Field label="Contact person">
        <input type="text" name="contactPerson" required placeholder="Chidi Umeh" />
      </Field>
      <Field label="Business email">
        <input type="email" name="businessEmail" required placeholder="business@example.com" />
      </Field>
      <Field label="Phone number">
        <input type="tel" name="phone" required placeholder="+234 800 000 0000" />
      </Field>
      <div className="wl-row">
        <Field label="Country">
          <input type="text" name="country" required placeholder="Nigeria" />
        </Field>
        <Field label="State or city">
          <input type="text" name="cityOrState" required placeholder="Lagos" />
        </Field>
      </div>

      <Field label="Vendor category">
        <select name="vendorCategory" required defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          {VENDOR_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Website or social media link">
        <input type="text" name="website" placeholder="https://instagram.com/yourbusiness" />
      </Field>

      <div className="wl-row">
        <Field label="Number of listings">
          <input type="number" name="numberOfListings" min="0" placeholder="e.g. 5" />
        </Field>
        <Field label="Current booking method">
          <select name="currentMethod" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {BOOKING_METHODS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <label className="wl-consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to Afritas's privacy policy and consent to being contacted about vendor
          onboarding.
        </span>
      </label>

      {error ? <p className="form-message err">{error}</p> : null}

      <button type="submit" className="btn btn-primary wl-submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join as a Vendor"}
      </button>
    </form>
  );
}

export default function WaitlistSection() {
  const [role, setRole] = useState("traveller");

  return (
    <section id="waitlist">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Join the waitlist
          </span>
          <h2>Be first in, whichever side you're on.</h2>
          <p>Tell us a little about you and we'll reach out the moment Afritas is live.</p>
        </Reveal>

        <div className="wl-toggle" role="tablist" aria-label="Waitlist type">
          <button
            type="button"
            role="tab"
            aria-selected={role === "traveller"}
            className={role === "traveller" ? "active" : ""}
            onClick={() => setRole("traveller")}
          >
            Traveller
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={role === "vendor"}
            className={role === "vendor" ? "active" : ""}
            onClick={() => setRole("vendor")}
          >
            Vendor
          </button>
        </div>

        <div className="wl-form-wrap">
          {role === "traveller" ? <TravellerForm /> : <VendorForm />}
        </div>
      </div>
    </section>
  );
}
