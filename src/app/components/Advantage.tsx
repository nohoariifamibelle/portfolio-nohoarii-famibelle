import {
  HandHelping,
  Lightbulb,
  CheckCircle2,
  Rocket,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function Advantage() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 bg-white py-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6">
          <HandHelping className="w-4 h-4" />
          Comment j&apos;aide mes clients
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Votre site actuel vous{" "}
          <span className="text-blueSurf-600">coûte des clients</span> chaque
          jour
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          La plupart des PME perdent 60% de leurs opportunités à cause d&apos;un
          site qui ne convertit pas. Voici comment je corrige ça.
        </p>
      </div>
    </section>
  );
}
