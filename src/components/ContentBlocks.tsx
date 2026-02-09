interface BlockquoteIntroProps {
  children: React.ReactNode;
}

export function BlockquoteIntro({ children }: BlockquoteIntroProps) {
  return <blockquote className="blockquote-intro">{children}</blockquote>;
}

interface MathBlockProps {
  math: string;
  title?: string;
  summary?: string;
}

export function MathBlock({ math, title, summary }: MathBlockProps) {
  return (
    <div className="math-block">
      <div className="text-glow-cyan">{math}</div>
      {title && <div className="math-title mt-2">{title}</div>}
      {summary && <div className="math-summary mt-1">{summary}</div>}
    </div>
  );
}

interface ElementBadgeProps {
  icon: string;
  symbol: string;
  name: string;
}

export function ElementBadge({ icon, symbol, name }: ElementBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary border border-border text-sm font-mono">
      <span>{icon}</span>
      <span className="text-primary font-semibold">{symbol}</span>
      <span className="text-muted-foreground text-xs">{name}</span>
    </span>
  );
}

interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
  level?: 1 | 2 | 3;
}

export function SectionHeading({ id, children, level = 2 }: SectionHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = {
    1: "text-3xl md:text-4xl text-glow-gold text-primary mt-16 mb-6",
    2: "text-2xl text-glow-gold text-primary/90 mt-12 mb-4",
    3: "text-xl text-accent mt-8 mb-3",
  };

  return (
    <Tag id={id} className={`font-display ${styles[level]}`}>
      {children}
    </Tag>
  );
}

interface AnimationFrameProps {
  number: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

export function AnimationFrame({ number, title, description, visual }: AnimationFrameProps) {
  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6 border-glow-cyan">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-2xl font-mono text-accent text-glow-cyan">
          {String(number).padStart(2, "0")}
        </span>
        <h4 className="font-display text-lg text-foreground">{title}</h4>
      </div>
      <p className="text-popular text-muted-foreground mb-4">{description}</p>
      <div className="bg-secondary/50 rounded p-4 flex items-center justify-center min-h-[80px]">
        {visual}
      </div>
    </div>
  );
}
