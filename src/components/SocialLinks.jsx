import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream transition hover:border-blue/50 hover:bg-blue/10 hover:text-blue"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

