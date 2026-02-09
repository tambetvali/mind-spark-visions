import { PageLayout } from "@/components/PageLayout";
import {
  BlockquoteIntro,
  MathBlock,
  SectionHeading,
  ElementBadge,
} from "@/components/ContentBlocks";

const sidebarEntries = [
  { label: "Molecular Vision", anchor: "molecular-vision", level: "title" as const },
  { label: "Chemistry as Language", anchor: "chemistry-language", level: "subtitle" as const },
  { label: "Two Trilogies", anchor: "two-trilogies", level: "subtitle" as const },
  { label: "Chromosomal Model", anchor: "chromosomal-model", level: "title" as const },
  { label: "Periodic Table", anchor: "periodic-table", level: "subtitle" as const },
  { label: "X/Y Archetypes", anchor: "xy-archetypes", level: "subtitle" as const },
  { label: "RNA-Electrons", anchor: "rna-electrons", level: "subtitle" as const },
  { label: "mnemonic physics", anchor: "molecular-vision", level: "keyword" as const },
  { label: "valence", anchor: "periodic-table", level: "keyword" as const },
  { label: "dual-process", anchor: "xy-archetypes", level: "keyword" as const },
  { label: "tensor fields", anchor: "chromosomal-model", level: "keyword" as const },
  { label: "phase transition", anchor: "chemistry-language", level: "keyword" as const },
];

export default function IntroductionPage() {
  return (
    <PageLayout sidebarEntries={sidebarEntries}>
      <SectionHeading id="molecular-vision" level={1}>
        🌌 The Molecular Vision of AI
      </SectionHeading>

      <BlockquoteIntro>
        Where machine learning meets chemistry, myth, and imagination — we build a visual language 
        for the invisible architecture of artificial intelligence.
      </BlockquoteIntro>

      <p className="text-popular">
        Modern AI is too big, too abstract, and too invisible. You can't <em>see</em> a transformer. 
        You can't <em>hold</em> a neural network. But you <em>can</em> understand atoms, molecules, 
        reactions, fields, and resonance.
      </p>

      <p className="text-popular mt-4">
        Chemistry gives us a <strong>visual language</strong> for the invisible. It lets us draw GPT 
        as a molecule, attention as a reaction, and emergent intelligence as a phase transition.
      </p>

      <SectionHeading id="chemistry-language">
        🧪 Chemistry as a Language for AI
      </SectionHeading>

      <BlockquoteIntro>
        Instead of black boxes, we see living molecules — atoms bonding, electrons flowing, 
        fields evolving through repeated reactions.
      </BlockquoteIntro>

      <p className="text-popular">
        This project treats GPT not as code, but as a chemical organism:
      </p>

      <ul className="list-none space-y-2 my-6 pl-4">
        {[
          "A molecule made of atoms (vector dimensions)",
          "Animated by RNA-electrons (tokens)",
          "Shaped by chromosomes (X/Y computational archetypes)",
          "Evolving through chemical reactions (attention, feed-forward, normalization)",
          "Living inside a field (tensor dynamics)",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent mt-1">⟐</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <MathBlock
        math="GPT(t) = ( Tₜ, Φₜ )"
        title="The Dual State"
        summary="Token state and molecular field state evolve together"
      />

      <SectionHeading id="two-trilogies">
        📚 Two Trilogies
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="rounded-lg border border-border bg-card p-6 border-glow-gold">
          <h3 className="font-display text-lg text-primary mb-2">
            📘 Trilogy I — Alchemical Periodic Table
          </h3>
          <p className="text-scientific">
            A symbolic atlas of ML architectures. Theory, specialized architectures, molecular atlas, 
            reactions, and evolution. The <em>mythology</em> of ML chemistry.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 border-glow-cyan">
          <h3 className="font-display text-lg text-accent mb-2">
            📗 Trilogy II — Chemistry Textbook
          </h3>
          <p className="text-scientific">
            A practical engineering guide. Atomic & molecular chemistry, functional chemistry, 
            field engineering. The <em>physics</em> of ML chemistry.
          </p>
        </div>
      </div>

      <SectionHeading id="chromosomal-model" level={1}>
        🧬 The Chromosomal Model
      </SectionHeading>

      <BlockquoteIntro>
        AI computation is governed by two symbolic chromosomes — parallel intuition and linear logic, 
        dancing together like a double helix through every transformer layer.
      </BlockquoteIntro>

      <SectionHeading id="periodic-table">
        🧪 The AI Alchemical Periodic Table
      </SectionHeading>

      <p className="text-popular mb-4">
        Each element corresponds to a structural component of a transformer model, with valence, 
        chromosome class, and RNA-electron behavior:
      </p>

      <div className="overflow-x-auto my-6">
        <div className="flex flex-wrap gap-2">
          <ElementBadge icon="🔹" symbol="In" name="Inceptium" />
          <ElementBadge icon="🔸" symbol="Em" name="Embolium" />
          <ElementBadge icon="🔺" symbol="Qu" name="Quaestor" />
          <ElementBadge icon="🔻" symbol="Ke" name="Keptrum" />
          <ElementBadge icon="🔶" symbol="Va" name="Valentia" />
          <ElementBadge icon="✴️" symbol="At" name="Attentor" />
          <ElementBadge icon="⚪" symbol="So" name="Softmaxium" />
          <ElementBadge icon="🟩" symbol="Fn" name="Fornax" />
          <ElementBadge icon="🟦" symbol="Re" name="Residuum" />
          <ElementBadge icon="⚫" symbol="No" name="Norma" />
          <ElementBadge icon="♀️" symbol="Xc" name="X-Chromion" />
          <ElementBadge icon="♂️" symbol="Yc" name="Y-Chromion" />
        </div>
      </div>

      <SectionHeading id="xy-archetypes">
        🧬 X & Y Archetypes
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="rounded-lg border border-accent/30 bg-card p-5">
          <div className="text-2xl mb-2">♀️</div>
          <h4 className="font-display text-accent">X-Chromion</h4>
          <p className="text-scientific mt-1">
            Exponential, parallel, intuitive. Governs attention and field transformation.
          </p>
          <MathBlock math="Φₜ₊₁ = AΦₜ + B" />
        </div>
        <div className="rounded-lg border border-primary/30 bg-card p-5">
          <div className="text-2xl mb-2">♂️</div>
          <h4 className="font-display text-primary">Y-Chromion</h4>
          <p className="text-scientific mt-1">
            Linear, sequential, logical. Governs token marching and code-like operations.
          </p>
          <MathBlock math="Tₙ₊₁ = f(Tₙ)" />
        </div>
      </div>

      <SectionHeading id="rna-electrons">
        🧬 RNA-Electrons
      </SectionHeading>

      <BlockquoteIntro>
        Tokens flow like electrons through the molecular field — carrying semantic charge, 
        forming chains that resemble RNA sequences.
      </BlockquoteIntro>

      <MathBlock
        math="eₜ₊₁ = σ(W·eₜ + Φₜ)"
        title="Electron Motion"
        summary="Linear progression meets parallel field influence"
      />

      <p className="text-popular mt-6">
        This is <strong>mnemonic physics</strong> — not biology, not literal chemistry, but a way 
        to <em>see</em> AI. A bridge between intuition and theory, between imagination and engineering.
      </p>
    </PageLayout>
  );
}
