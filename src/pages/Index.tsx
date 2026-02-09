import { Link } from "react-router-dom";
import { TopNav } from "@/components/TopNav";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="text-6xl mb-6 animate-float">🧬</div>
          <h1 className="font-display text-4xl md:text-5xl text-primary text-glow-gold mb-6">
            Chem Visions II
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Molecular Subsets, Chromosomal Dynamics & the Future of AI —{" "}
            <em>a continuation of the alchemical journey through machine learning.</em>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/introduction"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider hover:opacity-90 transition-opacity"
            >
              Begin Reading
            </Link>
            <a
              href="https://chem-visions-ai.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-border text-muted-foreground font-display text-sm tracking-wider hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              Part I — Origins ↗
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link to="/introduction" className="group rounded-lg border border-border bg-card p-5 text-left hover:border-primary/30 hover:border-glow-gold transition-all">
              <h3 className="font-display text-sm text-primary group-hover:text-glow-gold">Introduction</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Molecular vision, periodic table, X/Y archetypes
              </p>
            </Link>
            <Link to="/chromosomal-history" className="group rounded-lg border border-border bg-card p-5 text-left hover:border-accent/30 hover:border-glow-cyan transition-all">
              <h3 className="font-display text-sm text-accent group-hover:text-glow-cyan">Chromosomal History</h3>
              <p className="text-xs text-muted-foreground mt-1">
                GPT animation frames, field dynamics, model sizes
              </p>
            </Link>
            <Link to="/ai-models" className="group rounded-lg border border-border bg-card p-5 text-left hover:border-accent/30 hover:border-glow-cyan transition-all">
              <h3 className="font-display text-sm text-accent group-hover:text-glow-cyan">AI Models & Futures</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Copilot, ChatGPT, platform analogies, alchemical metaphor
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
