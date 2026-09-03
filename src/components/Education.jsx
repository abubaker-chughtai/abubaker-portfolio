import { GraduationCap } from "lucide-react";
import { education, extras } from "../data/experience.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeader
          index="05"
          kicker="Education"
          title="Foundations, scores, and a path still in motion."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <article className="h-full rounded-3xl border border-line bg-card p-6">
              <GraduationCap className="mb-4 text-blue" size={22} />
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-mute">{item.school}</p>
              <p className="mt-4 text-sm font-medium text-cream">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-6 flex flex-wrap gap-3">
          {extras.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-navy/50 px-4 py-2 text-sm text-mute"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
