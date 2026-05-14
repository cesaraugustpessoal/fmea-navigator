import { Shield, ShieldCheck, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  { icon: Shield, title: "Prevenção", desc: "Antecipa falhas antes que ocorram." },
  { icon: ShieldCheck, title: "Segurança", desc: "Protege pessoas e ativos críticos." },
  { icon: Wrench, title: "Confiabilidade", desc: "Aumenta a disponibilidade dos equipamentos." },
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="01 — Conceito" title="O que é o FMEA?" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 reveal">
            <p className="text-lg leading-relaxed text-muted-foreground">
              O <span className="text-foreground font-semibold">FMEA</span> é um método
              sistemático e proativo utilizado para avaliar processos e produtos com o
              objetivo de identificar onde e como eles podem falhar.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Através dele, é possível avaliar o impacto relativo das diferentes falhas,
              priorizando ações corretivas de acordo com seu nível de risco — tornando a
              manutenção mais inteligente, preditiva e eficiente.
            </p>
            <div className="glass rounded-2xl p-6 border-l-4 border-l-primary">
              <p className="text-sm font-mono text-muted-foreground mb-1">
                ORIGEM · 1949
              </p>
              <p className="text-foreground">
                Desenvolvido pelas Forças Armadas dos EUA e adotado pela NASA, hoje é
                padrão em automotivo, aeroespacial e indústria 4.0.
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 reveal glass-hover">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-6">
              Os 3 Pilares
            </p>
            <div className="space-y-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated/50 hover:bg-surface-elevated transition-colors"
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <p.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
