const FAQS = [
  {
    q: "What is Afritas?",
    a: "Afritas is a single booking platform for hotels, shortlets, events, attractions, car rentals and boat rentals across Africa, with secure payments built in.",
  },
  {
    q: "Where will Afritas launch first?",
    a: "Afritas is launching first in Nigeria, then expanding city by city and country by country across Africa.",
  },
  {
    q: "What services can customers book?",
    a: "Hotels, shortlets, events, attractions, car rentals, boat rentals and tours, all bookable and payable in one place.",
  },
  {
    q: "Who can become an Afritas vendor?",
    a: "Hotels, shortlet owners, event organisers, attraction operators, car rental companies, boat rental companies, tour operators and property managers.",
  },
  {
    q: "How does Afritas protect customers?",
    a: "Through verified vendor profiles, secure payment processing, transparent booking details, booking confirmations and ongoing customer support.",
  },
  {
    q: "How do vendor subscription plans work?",
    a: "Vendors choose a plan that fits the size of their business, giving them access to listing tools, booking management and performance tracking.",
  },
  {
    q: "Can vendors synchronise their calendars?",
    a: "Yes. Vendors can sync availability across their listings to prevent double bookings and keep every calendar up to date automatically.",
  },
  {
    q: "When will Afritas launch?",
    a: "We're finishing up the platform now. Join the waitlist to be notified the moment early access opens in your city.",
  },
];

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            FAQs
          </span>
          <h2>Questions, answered.</h2>
        </div>

        <div className="faq faq-numbered">
          {FAQS.map((f, i) => (
            <details className="faq-item" key={f.q}>
              <summary>
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q">{f.q}</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
