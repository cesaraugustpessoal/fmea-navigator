import { useState } from "react";
import { AlertTriangle, Repeat2, Search, Calculator, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Slider } from "@/components/ui/slider";

const factors = [
  {
    key: "s" as const,
    letter: "S",
    icon: AlertTriangle,
    title: "Severidade",
    desc: "Gravidade do efeito da falha. Quanto maior, mais crítico o impacto.",
    color: "var(--color-destructive)",
  },
  {
    key: "o" as const,
    letter: "O",
    icon: Repeat2,
    title: "Ocorrência",
    desc: "Frequência com que a causa da falha tende a acontecer.",
    color: "var(--color-warning)",
  },
  {
    key: "d" as const,
    letter: "D",
    icon: Search,
    title: "Detecção",
    desc: "Capacidade dos controles atuais de detectar a falha.",
    color: "var(--color-accent)",
  },
];

type Key = "s" | "o" | "d";

function rpnInfo(rpn: number) {
  if (rpn > 100)
    return {
      color: "var(--color-destructive)",
      label: "Risco Alto",
      action: "Ação corretiva imediata necessária.",
    };
  if (rpn >= 50)
    return {
      color: "var(--color-warning)",
      label: "Risco Médio",
      action: "Planejar ações preventivas no curto prazo.",
    };
  return {
    color: "var(--color-success)",
    label: "Risco Baixo",
    action: "Monitorar dentro da rotina de manutenção.",
  };
}

export function RpnFormula() {
  const [values, setValues] = useState<Record<Key, number>>({ s: 7, o: 5, d: 4 });
  const rpn = values.s * values.o * values.d;
  const info = rpnInfo(rpn);

  const update = (k: Key, v: number) =>
    setValues((prev) => ({ ...prev, [k]: Math.min(10, Math.max(1, v)) }));

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
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {factors.map((f, i) => (
            <div
              key={f.letter}
              className="glass glass-hover rounded-2xl p-8 reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-6xl font-black" style={{ color: f.color }}>
                  {f.letter}
                </span>
                <f.icon
                  className="w-10 h-10 icon-hover"
                  style={{ color: f.color }}
                  strokeWidth={1.5}
                />
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

        {/* Interactive Calculator */}
        <div className="glass rounded-3xl p-6 md:p-12 reveal relative overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl transition-colors duration-700"
            style={{ background: `color-mix(in oklab, ${info.color} 20%, transparent)` }}
          />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            {/* Controls */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-5 h-5 text-primary" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                  Calculadora interativa
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Simule um cenário em tempo real
              </h3>

              <div className="space-y-7">
                {factors.map((f) => (
                  <div key={f.key}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                          style={{
                            background: `color-mix(in oklab, ${f.color} 18%, transparent)`,
                            color: f.color,
                            border: `1px solid color-mix(in oklab, ${f.color} 40%, transparent)`,
                          }}
                        >
                          {f.letter}
                        </div>
                        <div>
                          <div className="font-semibold leading-tight">{f.title}</div>
                          <div className="text-xs text-muted-foreground">
                            Escala 1 — 10
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={values[f.key]}
                        onChange={(e) => update(f.key, Number(e.target.value) || 1)}
                        className="w-16 h-12 text-center text-xl font-bold rounded-lg bg-surface-elevated border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        style={{ color: f.color }}
                      />
                    </div>
                    <Slider
                      value={[values[f.key]]}
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={(v) => update(f.key, v[0])}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Result display */}
            <div
              className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, color-mix(in oklab, ${info.color} 14%, transparent), color-mix(in oklab, ${info.color} 4%, transparent))`,
                border: `1px solid color-mix(in oklab, ${info.color} 35%, transparent)`,
                boxShadow: `0 20px 60px -20px color-mix(in oklab, ${info.color} 40%, transparent)`,
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5" />
                Resultado RPN
              </div>

              <div className="font-mono text-sm text-muted-foreground mb-2">
                {values.s} × {values.o} × {values.d} =
              </div>

              <div
                key={rpn}
                className="text-7xl md:text-9xl font-black tracking-tighter leading-none transition-colors duration-500 animate-fade-up"
                style={{ color: info.color }}
              >
                {rpn}
              </div>

              <div
                className="inline-block mt-6 px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider"
                style={{
                  background: `color-mix(in oklab, ${info.color} 20%, transparent)`,
                  color: info.color,
                  border: `1px solid color-mix(in oklab, ${info.color} 50%, transparent)`,
                }}
              >
                {info.label}
              </div>

              <p className="mt-6 text-sm text-muted-foreground max-w-xs mx-auto">
                {info.action}
              </p>

              {/* Range bar */}
              <div className="mt-8">
                <div className="relative h-2 rounded-full overflow-hidden bg-surface-elevated">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${Math.min(100, (rpn / 1000) * 100)}%`,
                      background: `linear-gradient(90deg, var(--color-success), var(--color-warning), var(--color-destructive))`,
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-muted-foreground">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                  <span>1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
