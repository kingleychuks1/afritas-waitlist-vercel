import {
  Search,
  Building2,
  Home as HomeIcon,
  PartyPopper,
  Landmark,
  Car,
  Ship,
  CheckCircle2,
  Wallet,
} from "lucide-react";
import { Reveal } from "../hooks.jsx";

const CATS = [
  { icon: Building2, label: "Hotels", active: true },
  { icon: HomeIcon, label: "Shortlets" },
  { icon: PartyPopper, label: "Events" },
  { icon: Landmark, label: "Attractions" },
  { icon: Car, label: "Cars" },
  { icon: Ship, label: "Boats" },
];

const BENEFITS = [
  "Compare available options",
  "Book multiple services",
  "Secure payment processing",
  "Verified vendor information",
  "Manage all bookings in one account",
  "Receive real-time updates",
];

export default function TravellerSection() {
  return (
    <section id="travellers">
      <div className="wrap alt-grid">
        <Reveal className="app-window">
          <div className="app-search">
            <Search size={15} strokeWidth={1.8} />
            Search destinations, stays, experiences...
          </div>

          <div className="app-cats">
            {CATS.map((c) => (
              <span key={c.label} className={`app-cat ${c.active ? "active" : ""}`}>
                <c.icon size={14} strokeWidth={1.8} />
                {c.label}
              </span>
            ))}
          </div>

          <div className="app-listing">
            <div className="app-listing-thumb thumb-a" />
            <div className="app-listing-info">
              <strong>Eko Signature Suites</strong>
              <span>Victoria Island, Lagos &middot; Hotel</span>
            </div>
            <span className="app-listing-price">&#8358;65,000</span>
          </div>

          <div className="app-listing">
            <div className="app-listing-thumb thumb-b" />
            <div className="app-listing-info">
              <strong>Lekki Waterview Shortlet</strong>
              <span>Lekki, Lagos &middot; Shortlet</span>
            </div>
            <span className="app-listing-price">&#8358;58,000</span>
          </div>

          <div className="app-footer-chips">
            <span className="chip chip-green">
              <CheckCircle2 size={13} strokeWidth={2} /> Booking confirmed
            </span>
            <span className="chip chip-ink">
              <Wallet size={13} strokeWidth={2} /> &#8358;42,000
            </span>
          </div>
        </Reveal>

        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            For travellers
          </span>
          <h2 className="alt-heading">Discover more. Book securely. Travel confidently.</h2>
          <p className="lead" style={{ maxWidth: 440 }}>
            One search bar, every category. Compare hotels, shortlets, events, attractions,
            cars and boats side by side, then book the whole trip without leaving Afritas.
          </p>
          <ul className="check-list">
            {BENEFITS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <a href="#waitlist" className="btn btn-primary" data-role="traveller">
            Join as a Traveller
          </a>
        </Reveal>
      </div>
    </section>
  );
}
