import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Introduction", path: "/introduction", special: false },
  { type: "separator" as const },
  { label: "Chromosomal History of GPT", path: "/chromosomal-history", special: true },
  { label: "AI Models & Futures", path: "/ai-models", special: true },
  { type: "separator" as const },
  { label: "Origins", path: "https://chem-visions-ai.lovable.app/", external: true },
];

export function TopNav() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flex items-center h-14 px-6 gap-1">
        <Link
          to="/"
          className="font-display text-lg text-primary text-glow-gold mr-6 tracking-wider"
        >
          Chem Visions II
        </Link>

        {navItems.map((item, i) => {
          if ("type" in item && item.type === "separator") {
            return (
              <div
                key={`sep-${i}`}
                className="w-px h-6 bg-border mx-2"
              />
            );
          }

          const navItem = item as {
            label: string;
            path: string;
            special?: boolean;
            external?: boolean;
          };

          if (navItem.external) {
            return (
              <a
                key={navItem.path}
                href={navItem.path}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-sm font-display tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {navItem.label} ↗
              </a>
            );
          }

          const isActive = location.pathname === navItem.path;

          return (
            <Link
              key={navItem.path}
              to={navItem.path}
              className={`px-3 py-1.5 text-sm font-display tracking-wide transition-all rounded-sm ${
                navItem.special
                  ? isActive
                    ? "text-glow-cyan text-accent border border-accent/30 border-glow-cyan"
                    : "text-accent/80 hover:text-accent hover:border-glow-cyan border border-transparent"
                  : isActive
                    ? "text-primary text-glow-gold"
                    : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {navItem.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
