import { MessageCircleQuestion, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.72 0.18 50 / 0.15), transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative reveal">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 animate-pulse-glow"
          style={{ background: "var(--gradient-primary)" }}>
          <MessageCircleQuestion className="w-10 h-10 text-primary-foreground" />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Perguntas <span className="text-gradient">&</span> Dúvidas
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          O momento é seu. Vamos conversar sobre como o FMEA pode transformar a gestão
          da manutenção na sua operação.
        </p>

        <div className="glass rounded-2xl p-8 inline-flex items-center gap-3 text-lg">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <span>Obrigado pela atenção!</span>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          FMEA · Failure Mode and Effects Analysis · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
