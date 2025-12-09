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
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 bg-white py-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Briefcase className="w-4 h-4" />
          Ma méthode en 3 étapes
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Un accompagnement complet pour des{" "}
          <span className="text-blueSurf-600">résultats mesurables</span>
        </motion.h2>
        <motion.p
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          De la première idée jusqu&apos;à l&apos;optimisation continue, chaque
          étape est pensée pour transformer vos objectifs business en résultats
          concrets et mesurables.
        </motion.p>
      </div>

      {/* Services Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Service 1 */}
        <motion.div
          className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgb(110, 231, 183)",
            boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute -top-6 left-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </div>
          </motion.div>

          <div className="mb-6 mt-4">
            <motion.div
              className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Lightbulb className="w-8 h-8 text-emerald-600" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-slate-900 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Comprendre et concevoir pour convertir
            </motion.h3>
            <motion.p
              className="text-slate-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Identifier vos besoins, analyser votre marché et concevoir une
              expérience utilisateur (UX/UI) alignée sur vos objectifs de
              conversion.
            </motion.p>
          </div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Analyse stratégique de vos objectifs business
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Étude de votre audience et benchmark concurrentiel
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Conception UX/UI : wireframes et maquettes personnalisées
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Définition d&apos;une stratégie de conversion performante
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-slate-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Durée moyenne</span>
              <span className="text-slate-900 font-bold">3-5 jours</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgb(147, 197, 253)",
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute -top-6 left-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </div>
          </motion.div>

          <div className="mb-6 mt-4">
            <motion.div
              className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Rocket className="w-8 h-8 text-blue-600" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-slate-900 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              Développer un site sur mesure, rapide et fiable
            </motion.h3>
            <motion.p
              className="text-slate-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Créer un site web moderne, performant et évolutif, basé sur les
              meilleures technologies pour garantir rapidité et sécurité.
            </motion.p>
          </div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Code propre, maintenable et conforme aux bonnes pratiques
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Performance optimale (Core Web Vitals)
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Design responsive et mobile-first
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.65 }}
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Sécurité et conformité RGPD
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-slate-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Durée moyenne</span>
              <span className="text-slate-900 font-bold">2-4 semaines</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgb(153, 246, 228)",
            boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.15)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute -top-6 left-8"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
              3
            </div>
          </motion.div>

          <div className="mb-6 mt-4">
            <motion.div
              className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <BarChart3 className="w-8 h-8 text-teal-600" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-slate-900 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              Mettre en ligne & faire évoluer votre site
            </motion.h3>
            <motion.p
              className="text-slate-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Suivre les performances, ajuster, tester et améliorer
              continuellement la conversion avec des données réelles.
            </motion.p>
          </div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Mise en ligne complète
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.65 }}
            >
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Corrections de bugs et maintenance technique
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Évolutions sur mesure (optionnel)
              </span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.75 }}
            >
              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">
                Évolutions et nouvelles fonctionnalités
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-slate-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Durée moyenne</span>
              <span className="text-slate-900 font-bold">Continu</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Me Section */}
      <motion.div
        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Pourquoi choisir mon accompagnement ?
            </motion.h3>
            <motion.p
              className="text-slate-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Parce que votre site web n&apos;est pas qu&apos;une vitrine,
              c&apos;est un investissement stratégique. <br /> Je m&apos;engage
              à créer des solutions qui génèrent un retour sur investissement
              mesurable.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Qualité garantie</div>
                  <div className="text-sm text-slate-400">
                    Code professionnel et maintenable
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Livraison rapide</div>
                  <div className="text-sm text-slate-400">
                    En ligne en quelques semaines
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="bg-teal-500/20 p-2 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Orienté résultats</div>
                  <div className="text-sm text-slate-400">
                    Focus sur vos KPIs business
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Support continu</div>
                  <div className="text-sm text-slate-400">
                    Toujours disponible pour vous
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="bg-white/10  backdrop-blur rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="text-5xl font-bold text-emerald-400 mb-2">
                100%
              </div>
              <div className="text-slate-300">de clients satisfaits</div>
            </motion.div>
            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Respect des délais</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="bg-emerald-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="flex justify-between items-center mt-6">
                  <span className="text-slate-300">Performance moyenne</span>
                  <span className="font-semibold">95/100</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex justify-between items-center mt-6">
                  <span className="text-slate-300">Amélioration conversion</span>
                  <span className="font-semibold">+240%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="bg-teal-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.a
              href="#contact"
              className="block w-full text-center bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Discutons de votre projet
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-slate-600 text-lg mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Chaque projet est unique. Parlons de vos besoins spécifiques.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blueSurf-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#0c5282",
            boxShadow: "0 20px 25px -5px rgba(14, 116, 144, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          Obtenir un devis gratuit
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
