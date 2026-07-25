import { X } from "lucide-react";
import { Reveal } from "../hooks.js";

const BENEFITS = [
  {
    n: "01",
    title: "Everything in one place",
    body: "Book accommodation, transportation, events and experiences through one platform.",
  },
  {
    n: "02",
    title: "Verified vendors",
    body: "Discover trusted businesses and service providers across Africa.",
  },
  {
    n: "03",
    title: "Secure by design",
    body: "Protect customers with secure payments, booking records and clear communication.",
  },
  {
    n: "04",
    title: "Built for African travel",
    body: "Designed around African destinations, businesses, payment methods and travellers.",
  },
];

const NOT_LIST = [
  "Not just another hotel website",
  "Not an unverified marketplace",
  "Not a complicated booking system",
];

export default function Intro() {
  return (
    <section id="features">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            What Afritas is
          </span>
          <h2>One platform for the way Africa travels.</h2>
          <p>
            Afritas connects travellers with trusted accommodation, transportation, events and
            experiences while giving vendors the tools they need to manage and grow their
            businesses.
          </p>
        </Reveal>

        <Reveal className="benefit-grid">
          {BENEFITS.map((b) => (
            <div className="benefit-card" key={b.n}>
              <span className="step-n">{b.n}</span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="not-strip">
          <span className="not-strip-label">What Afritas is not</span>
          <ul>
            {NOT_LIST.map((item) => (
              <li key={item}>
                <X size={15} strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
