import {
  Briefcase,
  Lightbulb,
  CheckCircle2,
  Rocket,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6">
            <Briefcase className="w-4 h-4" />
            Ma méthode en 3 étapes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Un accompagnement complet pour des{" "}
            <span className="text-blueSurf-600">résultats mesurables</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            De la première idée jusqu&apos;à l&apos;optimisation continue,
            chaque étape est pensée pour transformer vos objectifs business en
            résultats concrets et mesurables.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
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
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Comprendre et concevoir pour convertir
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Identifier vos besoins, analyser votre marché et concevoir une
                expérience utilisateur (UX/UI) alignée sur vos objectifs de
                conversion.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  Analyse stratégique de vos objectifs business
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  Étude de votre audience et benchmark concurrentiel
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  Conception UX/UI : wireframes et maquettes personnalisées
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  Définition d&apos;une stratégie de conversion performante
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">
                  Durée moyenne
                </span>
                <span className="text-slate-900 font-bold">3-5 jours</span>
              </div>
            </div>
          </div>

          {/* Service 2 */}
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
                <span className="text-slate-500 font-medium">
                  Durée moyenne
                </span>
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
                <span className="text-slate-500 font-medium">
                  Durée moyenne
                </span>
                <span className="text-slate-900 font-bold">Continu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir mon accompagnement ?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Parce que votre site web n&apos;est pas qu&apos;une vitrine,
                c&pos;est un investissement stratégique. Je m&apos;engage à
                créer des solutions qui génèrent un retour sur investissement
                mesurable.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Qualité garantie</div>
                    <div className="text-sm text-slate-400">
                      Code professionnel et maintenable
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Livraison rapide</div>
                    <div className="text-sm text-slate-400">
                      En ligne en quelques semaines
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-500/20 p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Orienté résultats</div>
                    <div className="text-sm text-slate-400">
                      Focus sur vos KPIs business
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Support continu</div>
                    <div className="text-sm text-slate-400">
                      Toujours disponible pour vous
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10  backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-emerald-400 mb-2">
                  100%
                </div>
                <div className="text-slate-300">de clients satisfaits</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Respect des délais</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-slate-300">Performance moyenne</span>
                  <span className="font-semibold">95/100</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-slate-300">
                    Amélioration conversion
                  </span>
                  <span className="font-semibold">+240%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Discutons de votre projet
              </a>
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
      </div>
    </section>
  );
}
