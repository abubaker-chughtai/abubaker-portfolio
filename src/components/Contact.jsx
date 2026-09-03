import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile.js";
import Reveal from "./Reveal.jsx";

const channels = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "abubaker-chughtai",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Facebook",
    href: profile.facebook,
    value: "Abubaker Chughtai",
    Icon: Facebook,
    external: true,
  },
  {
    label: "Instagram",
    href: profile.instagram,
    value: "@abubakerchughtai07",
    Icon: Instagram,
    external: true,
  },
  {
    label: "Phone",
    href: profile.phoneHref,
    value: profile.phone,
    Icon: Phone,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="mb-4 font-mono text-xs tracking-[0.22em] text-blue uppercase">
          07 — Contact
        </p>
        <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Let’s build the next thing together.
        </h2>
        <p className="mt-5 max-w-xl text-mute">
          Open to internships, collaborations, and conversations about full-stack, AI, and
          education-tech.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 font-display text-xl text-cream sm:text-3xl"
        >
          {profile.email}
          <ArrowUpRight className="text-blue transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ label, href, value, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="rounded-2xl border border-line bg-card p-5 transition hover:border-blue/40"
            >
              <Icon className="mb-3 text-blue" size={18} />
              <p className="text-sm text-mute">{label}</p>
              <p className="mt-1 text-sm text-cream break-all">{value}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
