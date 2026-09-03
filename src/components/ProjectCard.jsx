import { ArrowUpRight, Github } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";
import TiltCard from "./TiltCard.jsx";

export default function ProjectCard({ project, featured = false }) {
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

      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-8" : ""}`}>
        {featured ? (
          <p className="mb-2 text-xs tracking-[0.2em] text-blue uppercase">Featured</p>
        ) : null}
        <h3 className="font-display text-xl font-semibold text-cream md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{project.description}</p>
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
            <span className="text-xs text-mute/70">Academic / local build</span>
          )}
        </div>
      </div>
    </article>
    </TiltCard>
  );
}
