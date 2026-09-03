import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

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
        <ProjectCard project={featured} featured />
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
