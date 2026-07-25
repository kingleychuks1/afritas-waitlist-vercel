import { ShieldCheck, Lock, FileText, CheckCircle2, Headset, CalendarClock } from "lucide-react";
import { Reveal } from "../hooks.jsx";

const POINTS = [
  { icon: ShieldCheck, label: "Verified vendor profiles" },
  { icon: Lock, label: "Secure payment processing" },
  { icon: FileText, label: "Transparent booking details" },
  { icon: CheckCircle2, label: "Booking confirmations" },
  { icon: Headset, label: "Customer support" },
  { icon: CalendarClock, label: "Vendor availability management" },
];

export default function Security() {
  return (
    <section id="security">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Designed around trust
          </span>
          <h2>Fewer uncertainties. Safer bookings. Better experiences.</h2>
        </Reveal>
        <Reveal className="pillars">
          {POINTS.map((p) => (
            <div className="pillar" key={p.label}>
              <div className="icon">
                <p.icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{p.label}</h3>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
