import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-card/70 text-cream transition hover:border-blue/50 hover:text-blue"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

