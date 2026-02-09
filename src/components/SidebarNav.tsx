import { useLocation, Link } from "react-router-dom";

interface SidebarEntry {
  label: string;
  anchor: string;
  level: "title" | "subtitle" | "keyword";
}

interface SidebarNavProps {
  entries: SidebarEntry[];
}

export function SidebarNav({ entries }: SidebarNavProps) {
  const location = useLocation();

  const handleClick = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-sidebar p-4 hidden lg:block">
      <h3 className="font-display text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
        Navigation
      </h3>
      <ul className="space-y-1">
        {entries.map((entry) => (
          <li key={entry.anchor}>
            <button
              onClick={() => handleClick(entry.anchor)}
              className={`block w-full text-left transition-colors rounded-sm px-2 py-1 ${
                entry.level === "title"
                  ? "text-sm font-display text-foreground hover:text-primary"
                  : entry.level === "subtitle"
                    ? "text-xs pl-4 text-muted-foreground hover:text-foreground"
                    : "text-xs pl-6 text-accent/60 hover:text-accent font-mono"
              }`}
            >
              {entry.level === "keyword" ? `⟐ ${entry.label}` : entry.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
