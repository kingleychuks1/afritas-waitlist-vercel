import { Reveal } from "../hooks.js";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Find hotels, shortlets, events, attractions, cars and boat experiences.",
  },
  {
    n: "02",
    title: "Book and Pay",
    body: "Reserve securely using trusted local and international payment options.",
  },
  {
    n: "03",
    title: "Experience",
    body: "Manage your booking and enjoy your journey with confidence.",
  },
];

export default function Steps() {
  return (
    <section id="how">
      <div className="wrap">
        <Reveal className="steps-grid">
          {STEPS.map((s) => (
            <div className="step-card" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
