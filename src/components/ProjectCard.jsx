import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";
import TiltCard from "./TiltCard.jsx";

export default function ProjectCard({ project, featured = false, index = 0 }) {
  return (
    <TiltCard className="h-full">
    <article
      className={`shine project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition duration-300 hover:border-blue/50 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-navy ${
          featured ? "md:w-[54%] md:min-h-[280px]" : "h-44"
        }`}
      >
        <ProjectVisual visual={project.visual} title={project.title} />
      </div>

      <div className={`flex min-w-0 flex-1 flex-col p-6 ${featured ? "md:p-8" : ""}`}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs tracking-[0.18em] text-blue uppercase">
            {featured ? "Featured case study" : project.category}
          </p>
          <span className="font-mono text-xs text-mute">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-cream md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{project.description}</p>

        {featured ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Challenge", project.challenge],
              ["Built", project.contribution],
              ["Outcome", project.outcome],
            ].map(([label, copy]) => (
              <div key={label} className="project-proof rounded-2xl border border-line bg-night/35 p-4">
                <p className="text-xs font-semibold tracking-wide text-blue uppercase">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">{copy}</p>
              </div>
            ))}
          </div>
        ) : (
          <details className="project-details mt-5 border-t border-line pt-4">
            <summary className="cursor-pointer list-none text-sm font-medium text-cream">
              Project breakdown <span className="ml-1 text-blue">+</span>
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-mute">
              <p><b className="text-cream">Challenge:</b> {project.challenge}</p>
              <p><b className="text-cream">Contribution:</b> {project.contribution}</p>
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-blue" size={15} /><span>{project.outcome}</span></p>
            </div>
          </details>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-cream/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue hover:underline"
            >
              Live demo <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-mute hover:text-cream"
            >
              <Github size={14} /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-mute/80">
              <CheckCircle2 size={13} className="text-blue" /> Documented academic build
            </span>
          )}
        </div>
      </div>
    </article>
    </TiltCard>
  );
}

