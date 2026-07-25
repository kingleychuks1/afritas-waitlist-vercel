import Marquee from "./Marquee.jsx";

const DESTINATIONS = [
  "Lagos",
  "Abuja",
  "Accra",
  "Nairobi",
  "Kigali",
  "Cape Town",
  "Zanzibar",
  "Dakar",
  "Cairo",
  "Johannesburg",
];

export default function FinalCta() {
  return (
    <section id="final-cta">
      <div className="wrap">
        <div className="cta">
          <h2>Africa is waiting to be discovered.</h2>
          <p>
            Join Afritas from the beginning and be among the first travellers and vendors to
            experience Africa's connected booking platform.
          </p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}>
            <a href="#waitlist" className="btn btn-primary" data-role="traveller">
              Join as a Traveller
            </a>
            <a href="#waitlist" className="btn btn-outline btn-outline-dark" data-role="vendor">
              Join as a Vendor
            </a>
          </div>
        </div>
      </div>
      <div className="marquee-section marquee-section-dark">
        <Marquee items={DESTINATIONS} variant="marquee-dark" />
      </div>
    </section>
  );
}
