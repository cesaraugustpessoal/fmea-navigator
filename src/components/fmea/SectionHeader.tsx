interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl mb-16 reveal">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-12 bg-primary" />
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
