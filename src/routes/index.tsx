import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/fmea/Hero";
import { About } from "@/components/fmea/About";
import { Benefits } from "@/components/fmea/Benefits";
import { RpnFormula } from "@/components/fmea/RpnFormula";
import { Example } from "@/components/fmea/Example";
import { Footer } from "@/components/fmea/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FMEA — Análise de Modos de Falha e Seus Efeitos" },
      {
        name: "description",
        content:
          "Apresentação técnica interativa sobre FMEA (Failure Mode and Effects Analysis) aplicada à manutenção industrial: conceito, benefícios, cálculo do RPN e exemplo prático.",
      },
      { property: "og:title", content: "FMEA — Apresentação Técnica" },
      {
        property: "og:description",
        content:
          "Material visual interativo sobre Análise de Modos de Falha e Seus Efeitos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Benefits />
      <RpnFormula />
      <Example />
      <Footer />
    </main>
  );
}
