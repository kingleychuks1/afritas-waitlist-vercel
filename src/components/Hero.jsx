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
import { useCountdown, pad } from "../hooks.js";
import { LAUNCH_DATE } from "../config.js";

const propertyImage =
  "https://www.figma.com/api/mcp/asset/0cf86294-911d-4cee-8242-a875128de574";

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
              <img src={propertyImage} alt="A shortlet listing on Afritas" />
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
