import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "";

// Edit this to your real launch date. Currently ~50 days out.
const LAUNCH_DATE = new Date("2026-09-12T00:00:00");

const heroImage =
  "https://www.figma.com/api/mcp/asset/51afa367-4c67-43e6-ad34-48eda394fea6";

const logoMark = "https://www.figma.com/api/mcp/asset/26ca8400-06b8-4392-a3ec-842e93477f8d";

const WAITLIST_INITIALS = ["KO", "AI", "TB"];

const PILLARS = [
  {
    icon: "\u{1F3E1}",
    title: "Stays & short-lets",
    body: "Book verified apartments and short-lets across Africa's biggest cities, no middlemen.",
  },
  {
    icon: "\u{1F6A4}",
    title: "Cruises & boats",
    body: "Reserve a boat ride or a sunset cruise on the water the same way you'd book a cab.",
  },
  {
    icon: "\u{1F3DB}",
    title: "Attractions",
    body: "Skip the queue for the events, parks and landmarks locals actually recommend.",
  },
  {
    icon: "\u{1F4C5}",
    title: "Events & guides",
    body: "Find what's happening this weekend, curated by people who live there.",
  },
];

const STEPS = [
  {
    title: "Join the waitlist",
    body: "Drop your email below. Takes five seconds, no spam, ever.",
  },
  {
    title: "Get early access",
    body: "We'll email you the moment Afritas opens in your city, ahead of everyone else.",
  },
  {
    title: "Book your first trip",
    body: "Stays, cruises, attractions and events, booked in one app, one checkout.",
  },
];

const FAQS = [
  {
    q: "When does Afritas launch?",
    a: "We're finishing up the app now. Waitlist members get first access as soon as we open in their city, ahead of the public launch.",
  },
  {
    q: "Which cities will Afritas support first?",
    a: "We're launching first in Lagos, then expanding city by city across Africa as we grow our local partner network.",
  },
  {
    q: "Is joining the waitlist free?",
    a: "Yes. Joining costs nothing, and early members get priority access plus launch-week perks.",
  },
  {
    q: "What can I actually book on Afritas?",
    a: "Short-let stays, boats and cruises, attractions and tickets, and local events, all in one app with one checkout.",
  },
];

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(target.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const clamped = Math.max(timeLeft, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/waitlist-count`)
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div className="logo">
            <img src={logoMark} alt="Afritas" className="logo-mark" />
            Afritas
          </div>
          <div className="nav-links">
            <a href="#pillars">What's inside</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <Link to="/waitlist" className="btn btn-primary btn-sm">
            Join waitlist
          </Link>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Launching first in Lagos
            </span>
            <h1>
              Africa, <span>all in one app.</span>
            </h1>
            <p className="lead">
              Stays, cruises, attractions and events across Africa, booked in one place. Afritas
              is launching soon, join the waitlist for early access.
            </p>

            <Link to="/waitlist" className="btn btn-primary">
              Join the waitlist
            </Link>
            <p className="form-note" style={{ marginTop: 12 }}>
              Free to join. No spam, unsubscribe anytime.
            </p>

            <div className="countdown" aria-label="Countdown to launch">
              <div className="cell">
                <strong>{pad(days)}</strong>
                <small>Days</small>
              </div>
              <div className="cell">
                <strong>{pad(hours)}</strong>
                <small>Hours</small>
              </div>
              <div className="cell">
                <strong>{pad(minutes)}</strong>
                <small>Mins</small>
              </div>
              <div className="cell">
                <strong>{pad(seconds)}</strong>
                <small>Secs</small>
              </div>
            </div>

            <div className="social-proof">
              <span className="avatars">
                {WAITLIST_INITIALS.map((initials) => (
                  <span key={initials}>{initials}</span>
                ))}
              </span>
              <span>
                {count !== null ? `${count.toLocaleString()} people` : "People"} already on the
                waitlist
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="card">
              <img src={heroImage} alt="A boat available to book on Afritas" />
            </div>
            <div className="badge">
              <span className="dot">98%</span>
              <span>
                <strong>Verified listings</strong>
                Every stay & boat checked
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap">
          <span>Lagos</span>
          <span>Accra</span>
          <span>Nairobi</span>
          <span>Cape Town</span>
          <span>Kigali</span>
          <span>Abidjan</span>
        </div>
      </div>

      <section id="pillars">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              What is Afritas
            </span>
            <h2>Everything you need to explore Africa, in one app.</h2>
            <p>
              No more juggling five different apps for a weekend trip. Afritas brings stays,
              transport on the water, things to do, and what's-on into a single booking flow.
            </p>
          </div>
          <div className="pillars">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.title}>
                <div className="icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap how">
          <div style={{ padding: "64px 48px 8px" }}>
            <div className="section-head">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                How it works
              </span>
              <h2>Three steps from waitlist to your first trip.</h2>
            </div>
            <div className="steps" style={{ paddingBottom: 56 }}>
              {STEPS.map((s, i) => (
                <div className="step" key={s.title}>
                  <div className="num">{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              FAQ
            </span>
            <h2>Questions, answered.</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta">
            <h2>Be first to explore Africa with Afritas.</h2>
            <p>Join the waitlist today, we'll let you know the moment we launch near you.</p>
            <Link to="/waitlist" className="btn btn-primary">
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="logo">
            <img src={logoMark} alt="Afritas" className="logo-mark" />
            Afritas
          </div>
          <div className="foot-links">
            <a href="#pillars">What's inside</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <span>&copy; {new Date().getFullYear()} Afritas. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
