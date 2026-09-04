import { profile, stats } from "../data/profile.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeader
          index="01"
          kicker="About"
          title="Engineer by training. Builder by habit."
          copy="Student at UMT, operator in the field, and someone who likes turning messy real-world problems into clean systems."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr_0.8fr] lg:items-start">
        <Reveal className="hidden lg:block">
          <img
            src={profile.photoUrl}
            alt={`${profile.name} working on software engineering projects`}
            width="1024"
            height="1024"
            loading="lazy"
            className="hidden aspect-[4/5] w-full max-w-[16rem] rounded-3xl object-cover object-[center_12%] ring-1 ring-white/10 lg:block"
          />
        </Reveal>
        <Reveal>
          <p className="max-w-2xl text-lg leading-relaxed text-mute">{profile.bio}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-card px-4 py-5"
              >
                <p className="font-display text-3xl font-bold text-cream">{stat.value}</p>
                <p className="mt-1 text-xs tracking-wide text-mute uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
