import {
  MapPin,
  CalendarDays,
  Users,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Wallet,
  CalendarCheck,
} from "lucide-react";
import { useCountdown, pad } from "../hooks.jsx";
import { LAUNCH_DATE } from "../config.js";

function PropertyArt() {
  return (
    <svg viewBox="0 0 340 160" className="booking-art" preserveAspectRatio="xMidYMid slice">
      <rect width="340" height="160" fill="url(#skyGradient)" />
      <defs>
        <linearGradient id="skyGradient" x1="0" y1="0" x2="340" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1e8f4e" />
          <stop offset="1" stopColor="#146638" />
        </linearGradient>
      </defs>
      <g opacity="0.9" fill="#146638">
        <rect x="18" y="70" width="46" height="90" rx="4" />
        <rect x="72" y="40" width="54" height="120" rx="4" />
        <rect x="134" y="86" width="40" height="74" rx="4" />
      </g>
      <g opacity="0.55" fill="#0f4d2b">
        <rect x="182" y="58" width="50" height="102" rx="4" />
        <rect x="240" y="30" width="58" height="130" rx="4" />
        <rect x="304" y="76" width="30" height="84" rx="4" />
      </g>
      <g fill="#fff" opacity="0.85">
        {[24, 40, 56, 78, 94, 110, 140, 156, 188, 204, 220, 246, 262, 278, 294, 310].map((x, i) => (
          <rect key={x} x={x} y={92 + ((i * 13) % 40)} width="7" height="7" rx="1.5" />
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <header className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Launching first in Nigeria
          </span>

          <h1>Your next African experience starts here.</h1>

          <p className="lead">
            Afritas brings hotels, shortlets, events, attractions, cars, boats and secure
            payments together in one powerful booking platform.
          </p>

          <div className="hero-ctas">
            <a href="#waitlist" className="btn btn-primary" data-role="traveller">
              Join as a Traveller
            </a>
            <a href="#waitlist" className="btn btn-outline" data-role="vendor">
              Join as a Vendor
            </a>
          </div>

          <p className="form-note" style={{ marginTop: 14 }}>
            Starting in Nigeria and expanding across Africa.
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
        </div>

        <div className="hero-mockup">
          <div className="booking-card">
            <div className="booking-photo">
              <PropertyArt />
              <span className="booking-service">Shortlet</span>
            </div>

            <div className="booking-body">
              <div className="booking-dest">
                <MapPin size={15} strokeWidth={1.8} />
                Lagos, Nigeria
              </div>

              <div className="booking-row">
                <div>
                  <span className="booking-label">Check-in</span>
                  <span className="booking-value">
                    <CalendarDays size={13} strokeWidth={1.8} /> Fri, 12 Sep
                  </span>
                </div>
                <div>
                  <span className="booking-label">Check-out</span>
                  <span className="booking-value">
                    <CalendarDays size={13} strokeWidth={1.8} /> Mon, 15 Sep
                  </span>
                </div>
              </div>

              <div className="booking-row">
                <div>
                  <span className="booking-label">Guests</span>
                  <span className="booking-value">
                    <Users size={13} strokeWidth={1.8} /> 2 guests
                  </span>
                </div>
                <div>
                  <span className="booking-label">Total</span>
                  <span className="booking-value booking-price">&#8358;185,000</span>
                </div>
              </div>

              <div className="booking-badges">
                <span className="chip chip-green">
                  <ShieldCheck size={13} strokeWidth={2} /> Verified vendor
                </span>
                <span className="chip chip-ink">
                  <Lock size={13} strokeWidth={2} /> Secure payment
                </span>
              </div>

              <button type="button" className="btn btn-primary booking-btn">
                Book Now
              </button>
            </div>
          </div>

          <div className="float-card float-1">
            <CheckCircle2 size={16} strokeWidth={2} />
            <div>
              <strong>Booking confirmed</strong>
              <span>Ref #AFR-2409</span>
            </div>
          </div>

          <div className="float-card float-2">
            <Wallet size={16} strokeWidth={2} />
            <div>
              <strong>Wallet balance</strong>
              <span>&#8358;42,000</span>
            </div>
          </div>

          <div className="float-card float-3">
            <CalendarCheck size={16} strokeWidth={2} />
            <div>
              <strong>Availability</strong>
              <span>Updated live</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
