import { Instagram, Linkedin, Facebook } from "lucide-react";
import { LOGO_URL, BRAND } from "../config.js";

const PRODUCT_LINKS = [
  { label: "How It Works", href: "#how" },
  { label: "For Travellers", href: "#travellers" },
  { label: "For Vendors", href: "#vendors" },
  { label: "Features", href: "#features" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#top" },
  { label: "Security", href: "#security" },
  { label: "FAQs", href: "#faq" },
  { label: "Join the Waitlist", href: "#waitlist" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <img src={LOGO_URL} alt="Afritas" className="logo-mark" />
            Afritas
          </div>
          <p>
            One platform for hotels, shortlets, events, attractions, cars, boats and secure
            payments across Africa.
          </p>
          <div className="footer-social">
            <a href={BRAND.instagram} aria-label="Afritas on Instagram">
              <Instagram size={18} strokeWidth={1.8} />
            </a>
            <a href={BRAND.linkedin} aria-label="Afritas on LinkedIn">
              <Linkedin size={18} strokeWidth={1.8} />
            </a>
            <a href={BRAND.facebook} aria-label="Afritas on Facebook">
              <Facebook size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          {PRODUCT_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          {COMPANY_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          {LEGAL_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>&copy; 2026 Afritas. All rights reserved.</span>
      </div>
    </footer>
  );
}
