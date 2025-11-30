import {
  HandHelping,
  Lightbulb,
  CheckCircle2,
  Rocket,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Award,
  X,
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

      {/* Advantages Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Advantage 1 */}
        <div className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300">
          <div className="absolute -top-6 left-8">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </div>
          </div>

          <div className="mb-6 mt-4">
            <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-8 h-8 text-emerald-600" />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-red-600 bg-red-50 rounded-md mb-4">
              Problème
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Votre site fait fuir les prospects
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Votre site actuel est obsolète, lent et peu rassurant. Les
              visiteurs partent en 10 secondes pour aller chez vos concurrents.
              Vous perdez des dizaines d&apos;opportunités chaque mois.
            </p>
          </div>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-green-600 bg-green-50 rounded-md mb-4">
              Ma solution
            </span>

            <h4 className="text-xl font-semibold text-green-800 mb-4">
              Design moderne + expérience optimisée
            </h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Interface professionnelle et rassurante{" "}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Temps de chargement ultra-rapide
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Navigation intuitive adaptée à vos clients
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Version mobile impeccable
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 rounded-md mb-4">
              Résultat
            </span>

            <div className="text-4xl font-bold text-blue-500 mb-2">+150%</div>

            <p className="text-base text-gray-700 leading-normal">
              de temps passé sur le site. Les visiteurs explorent et découvrent
              vos services.
            </p>
          </div>
        </div>

        {/* Advantage 2 */}
        <div className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
          <div className="absolute -top-6 left-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </div>
          </div>

          <div className="mb-6 mt-4">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Développer un site sur mesure, rapide et fiable
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Créer un site web moderne, performant et évolutif, basé sur les
              meilleures technologies pour garantir rapidité et sécurité.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Code propre, maintenable et conforme aux bonnes pratiques
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Performance optimale (Core Web Vitals)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Design responsive et mobile-first
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Sécurité et conformité RGPD
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Durée moyenne</span>
              <span className="text-slate-900 font-bold">2-4 semaines</span>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
          <div className="absolute -top-6 left-8">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
              3
            </div>
          </div>

          <div className="mb-6 mt-4">
            <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Mettre en ligne & faire évoluer votre site
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Suivre les performances, ajuster, tester et améliorer
              continuellement la conversion avec des données réelles.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Mise en ligne complète
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Corrections de bugs et maintenance technique
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Évolutions sur mesure (optionnel)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Évolutions et nouvelles fonctionnalités
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Durée moyenne</span>
              <span className="text-slate-900 font-bold">Continu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-slate-600 text-lg mb-6">
          Chaque projet est unique. Parlons de vos besoins spécifiques.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blueSurf-600 hover:bg-blueSurf-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Obtenir un devis gratuit
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
