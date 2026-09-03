import { FileText } from "lucide-react";
import { research } from "../data/experience.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Research() {
  return (
    <section id="research" className="border-y border-line bg-navy/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeader index="06" kicker="Research" title="Writing that sits next to the code." />
        </Reveal>
        <Reveal>
          <article className="relative overflow-hidden rounded-3xl border border-line bg-card p-8 md:p-12">
            <div className="orb orb-a !top-[-160px] !right-[-40px] !opacity-60" />
            <FileText className="relative mb-6 text-blue" size={28} />
            <p className="relative mb-3 text-xs font-semibold tracking-[0.18em] text-blue uppercase">Course research · IJSRP format</p>
            <p className="relative font-display text-2xl leading-snug font-semibold md:text-4xl">
              “{research.title}”
            </p>
            <p className="relative mt-5 text-sm text-blue">{research.authors}</p>
            <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-mute">
              {research.note}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

