import { ArrowDownRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { profile } from "../data/profile.js";
import { marquee } from "../data/skills.js";
import photo from "../assets/abubaker-profile.jpg";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 text-sm text-mute">
              <span className="availability inline-flex items-center gap-2 rounded-full border border-line bg-cream/5 px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" />
                Open to internships & collaborations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-blue" />
                {profile.location}
              </span>
            </div>

            <p className="mt-8 font-mono text-xs tracking-[0.28em] text-blue uppercase">Engineer · Builder · Explorer</p>
            <h1 className="hero-title mt-4 max-w-full font-display text-[clamp(2.3rem,11.2vw,4.75rem)] leading-[0.9] font-extrabold tracking-[-0.05em] text-cream lg:text-[6.6rem]">
              {profile.firstName}
              <br />
              <span className="bg-gradient-to-r from-blue via-sky-300 to-cream bg-clip-text text-transparent">
                {profile.lastName}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-mute sm:text-xl">
              {profile.title}
              <span className="mx-2 text-blue">/</span>
              {profile.tagline}
            </p>
            <p className="mt-3 max-w-lg text-base text-cream/80">{profile.pitch}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-medium text-night transition hover:brightness-110"
              >
                View Projects <ArrowDownRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-cream transition hover:border-blue/50 hover:bg-blue/10"
              >
                Contact Me <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-mute transition hover:text-cream"
              >
                <Download size={16} /> Resume
              </a>
            </div>
            <SocialLinks className="mt-6" />
          </div>

          <div className="portrait-stage relative mx-auto min-w-0 w-full max-w-[24rem]">
            <div className="portrait-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="portrait-shell">
              <div className="portrait-number" aria-hidden="true">01</div>
              <img
                src={photo}
                alt={`${profile.name}, software engineering student`}
                className="relative z-10 aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_12%]"
              />
              <div className="portrait-scan" aria-hidden="true" />
            </div>
            <div className="floating-chip chip-a" aria-hidden="true">FASTAPI</div>
            <div className="floating-chip chip-b" aria-hidden="true">AI / ML</div>
            <div className="relative z-20 -mt-9 ml-4 rounded-3xl border border-line bg-card/90 p-5 backdrop-blur-xl sm:ml-8">
              <p className="text-xs tracking-[0.2em] text-mute uppercase">Currently</p>
              <ul className="mt-3 space-y-2.5">
                {profile.focus.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-cream/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-y border-line bg-navy/60 py-4">
        <div className="overflow-hidden">
          <div className="marquee-track gap-10 px-6 text-sm tracking-[0.18em] text-mute uppercase">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="text-blue">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

