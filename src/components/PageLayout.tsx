import { TopNav } from "./TopNav";
import { SidebarNav } from "./SidebarNav";

interface SidebarEntry {
  label: string;
  anchor: string;
  level: "title" | "subtitle" | "keyword";
}

interface PageLayoutProps {
  children: React.ReactNode;
  sidebarEntries: SidebarEntry[];
}

export function PageLayout({ children, sidebarEntries }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <div className="flex flex-1">
        <SidebarNav entries={sidebarEntries} />
        <main className="flex-1 max-w-4xl mx-auto px-6 py-10 lg:px-12">
          {children}
        </main>
      </div>
    </div>
  );
}
