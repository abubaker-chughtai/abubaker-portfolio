import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { Github } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeader
          index="03"
          kicker="Projects"
          title="Selected work across AI, data, and systems."
          copy="From a DistilBERT classifier to assembly and digital logic — a spread of what I like to build."
        />
      </Reveal>

      <Reveal>
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-line bg-card/70 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-cream">Code profile</p>
            <p className="mt-1 text-sm text-mute">Repositories will be linked project-by-project as they are prepared for public review.</p>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm text-cream transition hover:border-blue/50 hover:text-blue sm:self-auto">
            <Github size={16} /> View GitHub
          </a>
        </div>
      </Reveal>

      <Reveal>
        <ProjectCard project={featured} featured index={0} />
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectCard project={project} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

