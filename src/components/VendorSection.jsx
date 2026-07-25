import {
  Building2,
  Home as HomeIcon,
  PartyPopper,
  Landmark,
  Car,
  Ship,
  Compass,
  KeyRound,
} from "lucide-react";
import { Reveal } from "../hooks.js";

const CAPABILITIES = [
  "Create and manage listings",
  "Receive direct customer bookings",
  "Manage availability",
  "Synchronise calendars",
  "Prevent double bookings",
  "Manage payments",
  "Track sales and performance",
  "Use Afritas subscription plans",
  "Manage multiple business categories",
];

const VENDOR_CATEGORIES = [
  { icon: Building2, label: "Hotels" },
  { icon: HomeIcon, label: "Shortlets" },
  { icon: PartyPopper, label: "Event organisers" },
  { icon: Landmark, label: "Attraction operators" },
  { icon: Car, label: "Car rental companies" },
  { icon: Ship, label: "Boat rental companies" },
  { icon: Compass, label: "Tour operators" },
  { icon: KeyRound, label: "Property managers" },
];

export default function VendorSection() {
  return (
    <section id="vendors">
      <div className="wrap alt-grid alt-grid-reverse">
        <Reveal>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            For vendors
          </span>
          <h2 className="alt-heading">Manage every booking from one connected system.</h2>
          <p className="lead" style={{ maxWidth: 440 }}>
            List once, sell everywhere on Afritas. One dashboard for your bookings, calendar,
            payments and performance, across every category you operate in.
          </p>
          <ul className="check-list">
            {CAPABILITIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a href="#waitlist" className="btn btn-primary" data-role="vendor">
            Join as a Vendor
          </a>
        </Reveal>

        <Reveal className="dash-window">
          <div className="dash-stats">
            <div className="dash-stat">
              <span>Total bookings</span>
              <strong>1,284</strong>
            </div>
            <div className="dash-stat">
              <span>Revenue</span>
              <strong>&#8358;9.2m</strong>
            </div>
            <div className="dash-stat">
              <span>Active listings</span>
              <strong>18</strong>
            </div>
            <div className="dash-stat">
              <span>Customer activity</span>
              <strong>+24%</strong>
            </div>
          </div>

          <div className="dash-panel">
            <div className="dash-panel-head">
              <span>Recent bookings</span>
              <span className="chip chip-green">Calendar synced</span>
            </div>
            <div className="dash-row">
              <span>Waterview Shortlet</span>
              <span>3 nights</span>
              <span className="dash-status ok">Confirmed</span>
            </div>
            <div className="dash-row">
              <span>Lagos Marina Cruise</span>
              <span>Sat, 2pm</span>
              <span className="dash-status pending">Pending</span>
            </div>
            <div className="dash-row">
              <span>Ikoyi Suites</span>
              <span>1 night</span>
              <span className="dash-status ok">Confirmed</span>
            </div>
          </div>

          <div className="dash-footer">
            <span className="chip chip-ink">Growth plan</span>
            <span className="chip chip-green">Payments up to date</span>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Every kind of business
          </span>
          <h2>Built for the businesses that move Africa.</h2>
        </Reveal>
        <Reveal className="pillars vendor-cats">
          {VENDOR_CATEGORIES.map((c) => (
            <div className="pillar" key={c.label}>
              <div className="icon">
                <c.icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{c.label}</h3>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
