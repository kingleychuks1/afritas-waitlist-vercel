import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "";

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M12 3c-2.755 0-5.455.232-8.083.678-.533.09-.917.556-.917 1.096v6.86c0 5.62 3.82 10.354 9 11.716 5.18-1.362 9-6.096 9-11.716v-6.86c0-.54-.384-1.007-.917-1.096A48.7 48.7 0 0 0 12 3Z"
      />
    </svg>
  );
}

export default function Waitlist() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | ok | err
  const [error, setError] = useState("");
  const [joinedName, setJoinedName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: firstName }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("err");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setJoinedName(firstName.trim());
      setStatus("ok");
    } catch (err) {
      setStatus("err");
      setError("Couldn't reach the server. Please try again in a moment.");
    }
  }

  return (
    <div className="wl-shell">
      <div className="wl-topbar">
        <Link to="/" className="wl-back">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
        <Link to="/" className="wl-close" aria-label="Close">
          &times;
        </Link>
      </div>

      <div className="wl-center">
        {status !== "ok" ? (
          <div className="wl-card">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Launching first in Lagos
            </span>
            <h1 className="wl-title">Join the waitlist.</h1>
            <p className="wl-lead">
              Be first in when Afritas launches. We're starting in Lagos and rolling out from
              there. Tell us where to reach you and we'll let you know the moment we're live.
            </p>

            <form onSubmit={handleSubmit} className="wl-form">
              <label className="wl-field">
                <span className="wl-label">
                  First name <em>optional</em>
                </span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Emeka"
                />
              </label>

              <label className="wl-field">
                <span className="wl-label">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </label>

              <label className="wl-consent">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  I'm happy for Afritas to email me about the launch. We'll only contact you
                  about Afritas and you can unsubscribe any time.
                </span>
              </label>

              {error ? <p className="form-message err">{error}</p> : null}

              <button type="submit" className="btn btn-primary wl-submit" disabled={status === "loading"}>
                {status === "loading" ? "Joining..." : "Join the waitlist"}
              </button>
            </form>

            <p className="wl-footnote">No spam. Just one email when we go live.</p>
          </div>
        ) : (
          <div className="wl-card wl-success">
            <div className="wl-icon">
              <ShieldCheckIcon />
            </div>
            <h1 className="wl-title">
              You're in{joinedName ? "," : "!"}
              {joinedName ? <span className="wl-name"> {joinedName}!</span> : null}
            </h1>
            <p className="wl-lead">
              You're on the Afritas waitlist, check your inbox, we just sent you a welcome email
              and we'll let you know the moment we go live.
            </p>
            <Link to="/" className="btn btn-primary wl-submit">
              Back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
