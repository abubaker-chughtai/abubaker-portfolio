export default function SectionHeader({ index, kicker, title, copy }) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 font-mono text-xs tracking-[0.22em] text-blue uppercase">
          {index} — {kicker}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {copy ? (
        <p className="max-w-md text-sm leading-relaxed text-mute md:text-right md:text-base">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
