// Seamless horizontal scrolling strip. Renders the item list twice back to
// back and animates a translateX(-50%) so the loop point is invisible.
export default function Marquee({ items, variant = "" }) {
  return (
    <div className={`marquee ${variant}`}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
