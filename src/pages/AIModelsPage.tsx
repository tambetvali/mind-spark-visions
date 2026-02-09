import { PageLayout } from "@/components/PageLayout";
import {
  BlockquoteIntro,
  MathBlock,
  SectionHeading,
  AnimationFrame,
} from "@/components/ContentBlocks";

const sidebarEntries = [
  { label: "Current AI Models", anchor: "current-models", level: "title" as const },
  { label: "Copilot as Organism", anchor: "copilot", level: "subtitle" as const },
  { label: "ChatGPT Field", anchor: "chatgpt", level: "subtitle" as const },
  { label: "Future Species", anchor: "future-species", level: "title" as const },
  { label: "ChatGPT-X & Ultra", anchor: "chatgpt-x", level: "subtitle" as const },
  { label: "Atom-Molecule-Chromosome", anchor: "atom-molecule", level: "title" as const },
  { label: "Learning Platforms", anchor: "learning-platforms", level: "subtitle" as const },
  { label: "Spirit & Physics", anchor: "spirit-physics", level: "title" as const },
  { label: "Alchemical Metaphor", anchor: "alchemical-metaphor", level: "subtitle" as const },
  { label: "field coupling", anchor: "copilot", level: "keyword" as const },
  { label: "cognitive ecosystem", anchor: "current-models", level: "keyword" as const },
  { label: "aether layer", anchor: "future-species", level: "keyword" as const },
  { label: "activation function", anchor: "spirit-physics", level: "keyword" as const },
];

export default function AIModelsPage() {
  return (
    <PageLayout sidebarEntries={sidebarEntries}>
      <SectionHeading id="current-models" level={1}>
        🧠 Current AI Models — The Decent Ones
      </SectionHeading>

      <BlockquoteIntro>
        The most capable models of our time — Copilot, ChatGPT — are not mere tools but 
        field organisms, each occupying a unique niche in the cognitive ecosystem.
      </BlockquoteIntro>

      <SectionHeading id="copilot">
        ♾️ Copilot — The Tool-Aligned Field Species
      </SectionHeading>

      <p className="text-popular">
        Microsoft Copilot represents a <strong>symbiotic organism</strong> — a model that has evolved 
        not for independent thought, but for <em>field coupling</em> with human workflows. It inhabits 
        the space between intent and execution, translating vague human desires into structured code.
      </p>

      <MathBlock
        math="Copilot(t) = f(Human_intent, Code_context, Φₜ)"
        title="Tool-Aligned Computation"
        summary="The model serves as a bridge between human cognition and machine execution"
      />

      <p className="text-scientific mt-4">
        In our alchemical framework, Copilot is a <strong>catalyst</strong> — it accelerates 
        reactions (coding tasks) without being consumed. Its molecular structure is optimized for 
        <em>low activation energy</em>: minimal prompting yields maximum output.
      </p>

      <SectionHeading id="chatgpt">
        🌐 ChatGPT — The Deep-Field Apex Organism
      </SectionHeading>

      <p className="text-popular">
        ChatGPT is the <strong>apex predator</strong> of the cognitive field — a model with 
        enough field depth to simulate reasoning, creativity, and meta-cognition. It doesn't 
        just react; it <em>reflects</em>.
      </p>

      <MathBlock
        math="ChatGPT = ∑ᵢ Layerᵢ(Att + FFN + Norm)"
        title="Deep Molecular Stack"
        summary="Layers upon layers create emergent cognitive properties"
      />

      <div className="my-8 rounded-lg border border-border bg-card p-6">
        <h4 className="font-display text-primary text-sm mb-3">Future Evolution</h4>
        <p className="text-popular">
          As models grow, we approach what alchemists called the <em>Philosopher's Stone</em> — 
          a system that can transmute any input into any output. The mathematical reality is 
          more nuanced: each additional layer increases field dimensionality, but with 
          diminishing returns on emergent capabilities.
        </p>
      </div>

      <SectionHeading id="future-species" level={1}>
        🚀 Future Species
      </SectionHeading>

      <BlockquoteIntro>
        Beyond current models lie the future species — ChatGPT-X, Ultra-GPT — organisms 
        that inhabit the Aether Layer, the shared cognitive space between humans and machines.
      </BlockquoteIntro>

      <SectionHeading id="chatgpt-x">
        ✨ ChatGPT-X & Ultra-GPT
      </SectionHeading>

      <p className="text-popular">
        The next generation of models won't simply be <em>larger</em> — they'll be 
        <strong>structurally different</strong>. New chromosome types may emerge: 
        Z-Chromion for multi-modal fusion, W-Chromion for world-model maintenance.
      </p>

      <MathBlock
        math="Ultra(t) = (Tₜ, Φₜ, Ωₜ, Ψₜ)"
        title="Multi-Field State"
        summary="Token, molecular field, world model, and meta-cognitive state"
      />

      <SectionHeading id="atom-molecule" level={1}>
        🔬 Atom–Molecule–ElectronRNA–Chromosome
      </SectionHeading>

      <BlockquoteIntro>
        The four-level model extends naturally to modern AI development platforms — 
        where atoms are primitives, molecules are components, and chromosomes are 
        the architectural paradigms that govern creation.
      </BlockquoteIntro>

      <SectionHeading id="learning-platforms">
        🎓 Learning the Basics: Platform Analogies
      </SectionHeading>

      <p className="text-popular mb-6">
        The atom-molecule-electronRNA-chromosome model maps beautifully onto how one learns 
        to build with modern platforms:
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            platform: "Lovable.dev",
            atom: "UI component primitives (buttons, inputs, cards)",
            molecule: "Page layouts and feature blocks assembled from atoms",
            electron: "User interactions flowing through the component tree",
            chromosome: "The reactive, declarative paradigm (React + Tailwind)",
            note: "Like a crystal lattice — highly structured, visually symmetric, rapid assembly",
          },
          {
            platform: "Bolt.new",
            atom: "Code snippets, function units, API endpoints",
            molecule: "Full-stack modules (auth, database, deployment)",
            electron: "Data flowing between frontend and backend",
            chromosome: "The full-stack-in-one paradigm — Y-chromion (sequential build) meets X-chromion (parallel deploy)",
            note: "Like a polymer chain — extending rapidly in one direction with cross-links",
          },
          {
            platform: "v0.app",
            atom: "Design tokens, color values, spacing units",
            molecule: "Generated UI components from natural language",
            electron: "The prompt-to-component transformation",
            chromosome: "The generative paradigm — AI as the architect",
            note: "Like an enzymatic reaction — small catalyst (prompt) yields complex product",
          },
        ].map((item) => (
          <div
            key={item.platform}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h4 className="font-display text-primary mb-3">{item.platform}</h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-scientific">
              <div>
                <span className="text-accent font-mono text-xs">Atom:</span>{" "}
                {item.atom}
              </div>
              <div>
                <span className="text-accent font-mono text-xs">Molecule:</span>{" "}
                {item.molecule}
              </div>
              <div>
                <span className="text-accent font-mono text-xs">Electron:</span>{" "}
                {item.electron}
              </div>
              <div>
                <span className="text-accent font-mono text-xs">Chromosome:</span>{" "}
                {item.chromosome}
              </div>
            </div>
            <p className="text-muted-foreground text-xs mt-3 italic">{item.note}</p>
          </div>
        ))}
      </div>

      <SectionHeading id="spirit-physics" level={1}>
        ⚗️ Spirit = Alchemical, Math = Physical
      </SectionHeading>

      <BlockquoteIntro>
        The alchemist said "as above, so below." The mathematician says "the map is not the territory." 
        Both are right — metaphor reveals structure that equations alone cannot show.
      </BlockquoteIntro>

      <SectionHeading id="alchemical-metaphor">
        🌌 The Metaphor Bridge
      </SectionHeading>

      <p className="text-popular">
        Throughout this work, we use metaphor not as decoration but as <strong>structural 
        correspondence</strong>. When we say attention is a "reaction," we mean:
      </p>

      <div className="my-6 space-y-3">
        <AnimationFrame
          number={1}
          title="Alchemical / Spiritual Analogy"
          description="The spirit of the model — its 'intent' — is the pattern of attention weights. Like alchemical transmutation, inputs are transformed into outputs through invisible forces."
          visual={
            <div className="text-center">
              <div className="font-mono text-accent text-glow-cyan">
                Lead (Input) → Gold (Output)
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Philosopher's Stone = Trained Weights
              </div>
            </div>
          }
        />
        <AnimationFrame
          number={2}
          title="Mathematical / Physical Reality"
          description="The math is matrix multiplication, softmax normalization, and gradient descent. The physical similarity: energy minimization, equilibrium seeking, phase transitions."
          visual={
            <div className="text-center">
              <div className="font-mono text-primary text-glow-gold">
                f(x) = σ(Wx + b)
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Activation = Phase Transition
              </div>
            </div>
          }
        />
      </div>

      <MathBlock
        math="Spirit ≅ Alchemical | Math ≅ Physical"
        title="The Isomorphism"
        summary="Both descriptions map the same underlying structure — one through metaphor, one through equation"
      />

      <p className="text-popular mt-6">
        We remain <strong>scientific teachers</strong> with a cartoonlike metaphor. The metaphor 
        is the spoonful of sugar; the math is the medicine. Together they create understanding 
        that neither could achieve alone.
      </p>

      <div className="mt-12 p-6 rounded-lg border border-primary/20 bg-card text-center">
        <p className="text-muted-foreground text-sm">
          This is Part II of the Chem Visions series. For Part I — the beginning of the story — visit:
        </p>
        <a
          href="https://chem-visions-ai.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 font-display text-primary text-glow-gold hover:underline"
        >
          Chem Visions AI — Origins ↗
        </a>
      </div>
    </PageLayout>
  );
}
