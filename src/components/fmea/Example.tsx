import { Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Row {
  componente: string;
  modo: string;
  efeito: string;
  s: number;
  o: number;
  d: number;
  acao: string;
}

const rows: Row[] = [
  {
    componente: "Rolamento",
    modo: "Desgaste prematuro",
    efeito: "Travamento do eixo",
    s: 8,
    o: 6,
    d: 4,
    acao: "Lubrificação periódica e análise de vibração",
  },
  {
    componente: "Bobina",
    modo: "Curto-circuito",
    efeito: "Queima do motor",
    s: 9,
    o: 4,
    d: 5,
    acao: "Termografia trimestral e isolamento reforçado",
  },
  {
    componente: "Ventilador",
    modo: "Acúmulo de sujeira",
    efeito: "Superaquecimento",
    s: 6,
    o: 7,
    d: 3,
    acao: "Limpeza preventiva mensal",
  },
  {
    componente: "Eixo",
    modo: "Desalinhamento",
    efeito: "Vibração excessiva",
    s: 7,
    o: 5,
    d: 6,
    acao: "Alinhamento a laser semestral",
  },
];

function rpnColor(rpn: number) {
  if (rpn >= 150) return "var(--color-destructive)";
  if (rpn >= 100) return "var(--color-alert)";
  if (rpn >= 50) return "var(--color-warning)";
  return "var(--color-success)";
}

function rpnLabel(rpn: number) {
  if (rpn >= 150) return "Crítico";
  if (rpn >= 100) return "Alto";
  if (rpn >= 50) return "Moderado";
  return "Baixo";
}

export function Example() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="04 — Aplicação"
          title="Exemplo prático: Motor Elétrico"
          description="Um FMEA aplicado a um equipamento comum em ambientes industriais. Note como o RPN orienta a priorização das ações."
        />

        {/* Desktop table */}
        <div className="hidden lg:block glass rounded-2xl overflow-hidden reveal">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-elevated/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <th className="text-left p-4">Componente</th>
                <th className="text-left p-4">Modo de Falha</th>
                <th className="text-left p-4">Efeito</th>
                <th className="text-center p-4">S</th>
                <th className="text-center p-4">O</th>
                <th className="text-center p-4">D</th>
                <th className="text-center p-4">RPN</th>
                <th className="text-left p-4">Ação Recomendada</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const rpn = r.s * r.o * r.d;
                const color = rpnColor(rpn);
                return (
                  <tr
                    key={r.componente}
                    className="border-t border-border hover:bg-surface-elevated/40 transition-colors"
                  >
                    <td className="p-4 font-semibold">{r.componente}</td>
                    <td className="p-4 text-muted-foreground">{r.modo}</td>
                    <td className="p-4 text-muted-foreground">{r.efeito}</td>
                    <td className="p-4 text-center font-mono">{r.s}</td>
                    <td className="p-4 text-center font-mono">{r.o}</td>
                    <td className="p-4 text-center font-mono">{r.d}</td>
                    <td className="p-4 text-center">
                      <div
                        className="inline-flex flex-col items-center justify-center min-w-[72px] px-3 py-1.5 rounded-lg font-bold"
                        style={{
                          background: `color-mix(in oklab, ${color} 18%, transparent)`,
                          color: color,
                          border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`,
                        }}
                      >
                        <span className="text-lg leading-none">{rpn}</span>
                        <span className="text-[10px] font-mono uppercase mt-0.5">
                          {rpnLabel(rpn)}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground max-w-xs">
                      {r.acao}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {rows.map((r) => {
            const rpn = r.s * r.o * r.d;
            const color = rpnColor(rpn);
            return (
              <div key={r.componente} className="glass rounded-2xl p-6 reveal">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-lg">{r.componente}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{r.modo}</p>
                  </div>
                  <div
                    className="flex flex-col items-center px-3 py-2 rounded-lg font-bold"
                    style={{
                      background: `color-mix(in oklab, ${color} 18%, transparent)`,
                      color: color,
                      border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`,
                    }}
                  >
                    <span className="text-xl leading-none">{rpn}</span>
                    <span className="text-[10px] font-mono uppercase mt-0.5">
                      {rpnLabel(rpn)}
                    </span>
                  </div>
                </div>

                <div className="text-sm mb-4">
                  <span className="text-muted-foreground">Efeito: </span>
                  <span>{r.efeito}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { l: "S", v: r.s },
                    { l: "O", v: r.o },
                    { l: "D", v: r.d },
                  ].map((x) => (
                    <div
                      key={x.l}
                      className="bg-surface-elevated/50 rounded-lg p-3 text-center"
                    >
                      <div className="text-xs font-mono text-muted-foreground">
                        {x.l}
                      </div>
                      <div className="text-xl font-bold">{x.v}</div>
                    </div>
                  ))}
                </div>

                <div className="text-sm border-t border-border pt-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">
                    Ação ·{" "}
                  </span>
                  <span className="text-muted-foreground">{r.acao}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono reveal">
          <span className="text-muted-foreground uppercase tracking-wider">Legenda:</span>
          {[
            { label: "Baixo (<50)", color: "var(--color-success)" },
            { label: "Moderado (50-99)", color: "var(--color-warning)" },
            { label: "Alto (100-149)", color: "var(--color-alert)" },
            { label: "Crítico (≥150)", color: "var(--color-destructive)" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: l.color }}
              />
              <span style={{ color: l.color }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
