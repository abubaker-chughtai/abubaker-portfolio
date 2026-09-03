import { experience } from "../data/experience.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-navy/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeader
            index="04"
            kicker="Experience"
            title="Work that sits between people and product."
            copy="Sales, school operations, and teaching — all feeding how I think about software."
          />
        </Reveal>

        <ol className="timeline relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-line md:before:left-[15px]">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 80}>
              <li className="relative grid gap-4 pl-10 md:grid-cols-[220px_1fr] md:pl-14">
                <span className="absolute top-2 left-0 h-6 w-6 rounded-full border border-blue/40 bg-night shadow-[0_0_0_4px_#05070c]">
                  <span className="absolute inset-1.5 rounded-full bg-blue" />
                </span>
                <div>
                  <p className="text-xs tracking-[0.18em] text-blue uppercase">{job.period}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-mute">{job.company}</p>
                </div>
                <ul className="space-y-2 rounded-2xl border border-line bg-card p-5 text-sm leading-relaxed text-mute">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
