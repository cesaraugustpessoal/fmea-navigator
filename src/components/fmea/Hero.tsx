import { ArrowDown, Activity, Cog } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating geometric accents */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-pulse-glow rounded-2xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-accent/20 rounded-full" />
      <Cog
        className="absolute top-20 right-1/4 w-24 h-24 text-primary/10 animate-[spin_20s_linear_infinite]"
        strokeWidth={1}
      />
      <Cog
        className="absolute bottom-20 left-1/4 w-16 h-16 text-accent/10 animate-[spin_15s_linear_infinite_reverse]"
        strokeWidth={1}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground tracking-wide">
            Apresentação Técnica · Manutenção Industrial
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 animate-fade-up">
          <span className="text-gradient">FMEA</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up [animation-delay:200ms]">
          Análise de Modos de Falha e Seus Efeitos na{" "}
          <span className="text-foreground font-medium">Manutenção Industrial</span>
        </p>

        <a
          href="#sobre"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-primary-foreground transition-all hover:scale-105 animate-fade-up [animation-delay:400ms]"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
        >
          Iniciar Apresentação
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
}
