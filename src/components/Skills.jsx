import { BriefcaseBusiness, Code2, Database, Wrench } from "lucide-react";
import { skills } from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const icons = {
  languages: Code2,
  frameworks: Wrench,
  databases: Database,
  professional: BriefcaseBusiness,
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-navy/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeader
            index="02"
            kicker="Skills"
            title="A stack shaped by coursework and real clients."
            copy="Languages, tools, and database craft — grouped the way I actually use them."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = icons[group.id] ?? Code2;
            return (
              <Reveal key={group.id} delay={i * 90}>
                <article className="h-full rounded-3xl border border-line bg-card p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-night/40 px-3 py-1.5 text-sm text-cream/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-mute">
                    {group.evidence}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

