const palettes = {
  neural: ["#5b8cff", "#7c3aed", "#22d3ee"],
  library: ["#f59e0b", "#5b8cff", "#efeae0"],
  waste: ["#34d399", "#0ea5e9", "#5b8cff"],
  shop: ["#fb7185", "#5b8cff", "#f59e0b"],
  traffic: ["#f43f5e", "#f59e0b", "#22c55e"],
  directory: ["#22d3ee", "#5b8cff", "#a78bfa"],
  asm: ["#a3e635", "#5b8cff", "#22d3ee"],
};

export default function ProjectVisual({ visual, title }) {
  const [a, b, c] = palettes[visual] ?? palettes.neural;

  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`${visual}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} stopOpacity="0.9" />
          <stop offset="100%" stopColor={b} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="#0a101c" />
      <rect width="640" height="360" fill={`url(#${visual}-bg)`} opacity="0.35" />
      <circle cx="520" cy="70" r="90" fill={c} opacity="0.25" />
      <circle cx="90" cy="280" r="70" fill={a} opacity="0.2" />
      <g fill="none" stroke={a} strokeWidth="1.4" opacity="0.55">
        <rect x="48" y="48" width="180" height="110" rx="16" />
        <rect x="248" y="72" width="140" height="86" rx="14" />
        <rect x="410" y="160" width="170" height="120" rx="18" />
      </g>
      <text
        x="48"
        y="310"
        fill="#efeae0"
        fontFamily="Syne, sans-serif"
        fontSize="22"
        fontWeight="700"
      >
        {title}
      </text>
    </svg>
  );
}
