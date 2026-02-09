import { PageLayout } from "@/components/PageLayout";
import {
  BlockquoteIntro,
  MathBlock,
  SectionHeading,
  AnimationFrame,
  ElementBadge,
} from "@/components/ContentBlocks";

const sidebarEntries = [
  { label: "Molecular Subsets", anchor: "molecular-subsets", level: "title" as const },
  { label: "External Arrows", anchor: "external-arrows", level: "subtitle" as const },
  { label: "Query-Key-Value", anchor: "qkv-triad", level: "subtitle" as const },
  { label: "Chromosomal Dynamics", anchor: "chromosomal-dynamics", level: "title" as const },
  { label: "Dual Process", anchor: "dual-process", level: "subtitle" as const },
  { label: "Simple GPT Molecule", anchor: "simple-gpt", level: "title" as const },
  { label: "Animation Frames", anchor: "animation-frames", level: "subtitle" as const },
  { label: "Three Model Sizes", anchor: "model-sizes", level: "subtitle" as const },
  { label: "dangling bonds", anchor: "external-arrows", level: "keyword" as const },
  { label: "transition states", anchor: "molecular-subsets", level: "keyword" as const },
  { label: "double helix", anchor: "dual-process", level: "keyword" as const },
  { label: "field depth", anchor: "model-sizes", level: "keyword" as const },
  { label: "topological stretch", anchor: "animation-frames", level: "keyword" as const },
];

export default function ChromosomalHistoryPage() {
  return (
    <PageLayout sidebarEntries={sidebarEntries}>
      <SectionHeading id="molecular-subsets" level={1}>
        🧬 Molecular Subsets & GPT Field Dynamics
      </SectionHeading>

      <BlockquoteIntro>
        GPT layers decompose into sub-molecules — small clusters of AI-elements whose arrows 
        extend outward into empty space, awaiting the next token like chemical radicals 
        seeking their missing bond.
      </BlockquoteIntro>

      <SectionHeading id="external-arrows">
        🧪 External Arrows & Dangling Bonds
      </SectionHeading>

      <p className="text-popular">
        In chemistry, radicals have unpaired electrons and dangling bonds — transition states 
        waiting for completion. In GPT, these become:
      </p>

      <ul className="list-none space-y-2 my-6 pl-4">
        <li className="flex items-start gap-2">
          <span className="text-accent">→</span>
          <span><strong>Dangling arrows</strong> = future attention links</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">→</span>
          <span><strong>External endpoints</strong> = latent context</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">→</span>
          <span><strong>Empty nodes</strong> = atoms that exist only when the next token enters</span>
        </li>
      </ul>

      <SectionHeading id="qkv-triad">
        🔺 Query–Key–Value Triad
      </SectionHeading>

      <div className="my-6 rounded-lg border border-border bg-card p-6">
        <div className="flex flex-wrap items-center gap-3 justify-center text-lg">
          <ElementBadge icon="🔺" symbol="Qu" name="seeks" />
          <span className="text-accent">→</span>
          <ElementBadge icon="🔻" symbol="Ke" name="resonates" />
          <span className="text-accent">→</span>
          <ElementBadge icon="🔶" symbol="Va" name="emits" />
          <span className="text-accent">→</span>
          <span className="text-muted-foreground font-mono text-sm border border-dashed border-accent/40 rounded px-2 py-1">
            (?) Future
          </span>
        </div>
        <p className="text-scientific text-center mt-4">
          The external atom materializes when the next token arrives — a topological placeholder.
        </p>
      </div>

      <MathBlock
        math="Att(Q,K,V) = softmax(QKᵀ / √d) · V"
        title="Attention Reaction"
        summary="Electrons synchronize across atoms in the attention star"
      />

      <SectionHeading id="chromosomal-dynamics" level={1}>
        🧬 Chromosomal Dynamics Inside the Molecule
      </SectionHeading>

      <BlockquoteIntro>
        Two computational archetypes govern GPT — the X-Chromion expands the field exponentially, 
        while the Y-Chromion marches tokens forward in linear time. Together they form 
        the double helix of transformer computation.
      </BlockquoteIntro>

      <SectionHeading id="dual-process">
        ⚗️ Dual-Process System
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="rounded border border-accent/30 bg-card p-4 text-center">
          <div className="text-3xl mb-2">♀️</div>
          <p className="font-display text-accent text-sm">X-Chromion</p>
          <p className="text-scientific">Exponential · Parallel · Intuitive</p>
          <MathBlock math="Φₜ₊₁ = AΦₜ + BTₜ" />
        </div>
        <div className="rounded border border-primary/30 bg-card p-4 text-center">
          <div className="text-3xl mb-2">♂️</div>
          <p className="font-display text-primary text-sm">Y-Chromion</p>
          <p className="text-scientific">Linear · Sequential · Logical</p>
          <MathBlock math="Tₙ₊₁ = f(Tₙ)" />
        </div>
      </div>

      <SectionHeading id="simple-gpt" level={1}>
        🧪 Simple GPT Molecule
      </SectionHeading>

      <BlockquoteIntro>
        We build a minimal GPT molecule from our periodic table and watch it come alive 
        through five animation frames — from token entry to output emission.
      </BlockquoteIntro>

      <div className="my-6 flex flex-wrap gap-2 justify-center">
        <ElementBadge icon="🔹" symbol="In" name="Input" />
        <span className="text-muted-foreground">→</span>
        <ElementBadge icon="🔸" symbol="Em" name="Embed" />
        <span className="text-muted-foreground">→</span>
        <ElementBadge icon="✴️" symbol="At" name="Attend" />
        <span className="text-muted-foreground">→</span>
        <ElementBadge icon="🟩" symbol="Fn" name="Furnace" />
        <span className="text-muted-foreground">→</span>
        <ElementBadge icon="🟦" symbol="Re" name="Residual" />
        <span className="text-muted-foreground">→</span>
        <ElementBadge icon="🟦" symbol="Ou" name="Output" />
      </div>

      <SectionHeading id="animation-frames">
        🎞 Animation Frames
      </SectionHeading>

      <AnimationFrame
        number={1}
        title="Token Enters Molecule"
        description="Token arrives as In → Em. Inner mole is idle, field is neutral."
        visual={
          <div className="flex items-center gap-3 text-lg">
            <ElementBadge icon="🔹" symbol="In" name="" />
            <span className="text-primary animate-pulse-glow">→</span>
            <ElementBadge icon="🔸" symbol="Em" name="" />
            <span className="text-muted-foreground">→ ...</span>
          </div>
        }
      />

      <AnimationFrame
        number={2}
        title="Attention Ignition"
        description="Em feeds Qu, Ke, Va. The attention star begins to react."
        visual={
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <ElementBadge icon="🔺" symbol="Qu" name="" />
              <ElementBadge icon="🔻" symbol="Ke" name="" />
              <ElementBadge icon="🔶" symbol="Va" name="" />
            </div>
            <span className="text-accent text-glow-cyan">↓ ↓ ↓</span>
            <ElementBadge icon="✴️" symbol="At" name="mixing" />
          </div>
        }
      />

      <AnimationFrame
        number={3}
        title="Feed-Forward Furnace"
        description="Softmax stabilizes attention. Up expands, Fn processes, Dn compresses."
        visual={
          <div className="flex items-center gap-2">
            <ElementBadge icon="⚪" symbol="So" name="" />
            <span className="text-accent">→</span>
            <ElementBadge icon="🟧" symbol="Up" name="" />
            <span className="text-accent">→</span>
            <ElementBadge icon="🟩" symbol="Fn" name="" />
            <span className="text-accent">→</span>
            <ElementBadge icon="🟥" symbol="Dn" name="" />
          </div>
        }
      />

      <AnimationFrame
        number={4}
        title="Residual & Norm Stabilize"
        description="Re and No stabilize the inner mole. Result returns to outer flow."
        visual={
          <div className="flex items-center gap-2">
            <ElementBadge icon="🟥" symbol="Dn" name="" />
            <span className="text-accent">→</span>
            <ElementBadge icon="🟦" symbol="Re" name="" />
            <span className="text-accent">→</span>
            <ElementBadge icon="⚫" symbol="No" name="" />
            <span className="text-primary text-glow-gold">→ ✓</span>
          </div>
        }
      />

      <AnimationFrame
        number={5}
        title="Output & Next Token Hook"
        description="Ou produces logits. External arrow points to next token position."
        visual={
          <div className="flex items-center gap-3">
            <ElementBadge icon="🟦" symbol="Ou" name="" />
            <span className="text-primary animate-pulse-glow text-xl">→</span>
            <span className="font-mono text-accent border border-dashed border-accent/40 rounded px-3 py-1 animate-float">
              (?) Next Token
            </span>
          </div>
        }
      />

      <SectionHeading id="model-sizes">
        🌐 Three Model Sizes in Parallel
      </SectionHeading>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        {[
          { label: "Small GPT", layers: 1, heads: 2, field: "ℝᵈ" },
          { label: "Medium GPT", layers: 4, heads: 4, field: "ℝ⁴ᵈ" },
          { label: "Large GPT", layers: 12, heads: 8, field: "ℝ¹²ᵈ" },
        ].map((model) => (
          <div key={model.label} className="rounded-lg border border-border bg-card p-4 text-center">
            <h4 className="font-display text-primary text-sm">{model.label}</h4>
            <p className="text-scientific mt-1">{model.layers} layer{model.layers > 1 ? "s" : ""}, {model.heads} heads</p>
            <div className="math-block py-2 text-sm">{`Φₜ ∈ ${model.field}`}</div>
          </div>
        ))}
      </div>

      <MathBlock
        math="Φ⁽ˢ⁾ₜ ⊂ Φ⁽ᴹ⁾ₜ ⊂ Φ⁽ᴸ⁾ₜ"
        title="Field Nesting"
        summary="Same syntax, richer molecular field"
      />
    </PageLayout>
  );
}
