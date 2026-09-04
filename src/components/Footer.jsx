import { profile } from "../data/profile.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-sm text-mute">
          © {new Date().getFullYear()} · Built entirely by {profile.name}
        </p>
        <SocialLinks />
        <p className="text-sm text-mute">{profile.location}</p>
      </div>
    </footer>
  );
}
