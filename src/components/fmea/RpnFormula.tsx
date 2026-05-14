import { AlertTriangle, Repeat2, Search } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const factors = [
  {
    letter: "S",
    icon: AlertTriangle,
    title: "Severidade",
    desc: "Gravidade do efeito da falha. Quanto maior, mais crítico o impacto.",
    color: "var(--color-destructive)",
  },
  {
    letter: "O",
    icon: Repeat2,
    title: "Ocorrência",
    desc: "Frequência com que a causa da falha tende a acontecer.",
    color: "var(--color-warning)",
  },
  {
    letter: "D",
    icon: Search,
    title: "Detecção",
    desc: "Capacidade dos controles atuais de detectar a falha antes do efeito.",
    color: "var(--color-accent)",
  },
];

export function RpnFormula() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          eyebrow="03 — Metodologia"
          title="Como funciona? O cálculo do RPN"
          description="O Risk Priority Number (RPN) — Número de Prioridade de Risco — quantifica o nível de criticidade de cada modo de falha identificado."
        />

        {/* Formula */}
        <div className="glass rounded-3xl p-8 md:p-16 mb-12 reveal text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-6 relative">
            Fórmula
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-3xl md:text-6xl font-bold tracking-tight relative">
            <span className="text-gradient">RPN</span>
            <span className="text-muted-foreground">=</span>
            <span className="text-foreground">S</span>
            <span className="text-primary">×</span>
            <span className="text-foreground">O</span>
            <span className="text-primary">×</span>
            <span className="text-foreground">D</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-mono relative">
            Cada fator é avaliado em uma escala de 1 a 10
          </p>
        </div>

        {/* Factors */}
        <div className="grid md:grid-cols-3 gap-6">
          {factors.map((f, i) => (
            <div
              key={f.letter}
              className="glass glass-hover rounded-2xl p-8 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-6xl font-black"
                  style={{ color: f.color }}
                >
                  {f.letter}
                </span>
                <f.icon className="w-10 h-10" style={{ color: f.color }} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground mb-6">{f.desc}</p>

              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-2 rounded-full"
                    style={{
                      background: `color-mix(in oklab, ${f.color} ${20 + idx * 8}%, transparent)`,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-muted-foreground">
                <span>1 · Baixo</span>
                <span>10 · Alto</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
