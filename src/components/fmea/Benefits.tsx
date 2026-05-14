import { TrendingDown, AlertOctagon, Repeat, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const benefits = [
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    desc: "Diminui paradas não programadas e custos com manutenção corretiva.",
    color: "var(--color-success)",
  },
  {
    icon: AlertOctagon,
    title: "Minimização de Riscos",
    desc: "Identifica falhas críticas antes que afetem operação e segurança.",
    color: "var(--color-alert)",
  },
  {
    icon: Repeat,
    title: "Melhoria Contínua",
    desc: "Cria um ciclo de aprendizado e otimização constante de processos.",
    color: "var(--color-accent)",
  },
  {
    icon: Award,
    title: "Aumento de Qualidade",
    desc: "Eleva a confiabilidade e o padrão dos produtos e serviços entregues.",
    color: "var(--color-warning)",
  },
];

export function Benefits() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="02 — Vantagens"
          title="Por que utilizar o FMEA?"
          description="Uma ferramenta estratégica que transforma reatividade em previsibilidade."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="glass glass-hover rounded-2xl p-6 reveal group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: `color-mix(in oklab, ${b.color} 18%, transparent)` }}
              >
                <b.icon className="w-7 h-7" style={{ color: b.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              <div
                className="mt-6 h-1 w-12 rounded-full transition-all group-hover:w-full"
                style={{ backgroundColor: b.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
