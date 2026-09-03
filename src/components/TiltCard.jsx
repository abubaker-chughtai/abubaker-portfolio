import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
    card.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
  };

  const reset = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
