import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL } from "../config.js";

const LINKS = [
  { href: "#how", label: "How It Works" },
  { href: "#travellers", label: "For Travellers" },
  { href: "#vendors", label: "For Vendors" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo">
          <img src={LOGO_URL} alt="Afritas" className="logo-mark" />
          Afritas
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#waitlist" className="btn btn-primary btn-sm nav-cta">
          Join the Waitlist
        </a>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#waitlist" className="btn btn-primary" onClick={() => setOpen(false)}>
            Join the Waitlist
          </a>
        </div>
      ) : null}
    </nav>
  );
}
