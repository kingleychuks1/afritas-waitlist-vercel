import Marquee from "./Marquee.jsx";

const CATEGORIES = [
  "Hotels",
  "Shortlets",
  "Events",
  "Attractions",
  "Car Rentals",
  "Boat Rentals",
  "Tours",
  "Experiences",
  "Wallet",
  "Secure Payments",
];

export default function CategoryMarquee() {
  return (
    <div className="marquee-section">
      <Marquee items={CATEGORIES} />
    </div>
  );
}
