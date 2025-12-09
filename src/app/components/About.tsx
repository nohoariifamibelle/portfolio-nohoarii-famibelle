import {
  Code2,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../../../assets/assets";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="max-w-7xl bg-gray-50 mx-auto px-6 py-20">
      {/* About Section */}
      {/* Header with value proposition */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Zap className="w-6 h-6" />
          Votre partenaire digital
        </motion.div>
        <motion.h2
          className="text-5xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Un site web qui génère{" "}
          <span className="text-blueSurf">des résultats</span>
        </motion.h2>
        <motion.p
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          J&apos;aide les PME à transformer leur présence en ligne en véritable
          outil de croissance. Sites vitrines et e-commerce performants, livrés
          rapidement.
        </motion.p>
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left: Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl opacity-50 blur-2xl"></div>
          <motion.div
            className="relative bg-white p-2 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={assets.profile_user}
              alt="Photo de profil de Nohoarii FAMIBELLE"
              className="rounded-xl w-full h-[500px] object-cover"
            />
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-slate-100 max-lg:right-20  max-sm:right-10"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-blueSurf-100 p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-blueSurf" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-slate-900">20+</div>
                  <div className="text-sm text-slate-600">Projets réussis</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <div>
          <motion.h2
            className="text-3xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Nohoarii, développeur web freelance
          </motion.h2>

          <div className="space-y-4 mb-8">
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="bg-emerald-100 p-2 rounded-lg mt-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Augmentez votre visibilité
                </h3>
                <p className="text-slate-600">
                  Sites web modernes, rapides et optimisés pour les moteurs de
                  recherche. Votre vitrine digitale qui travaille pour vous
                  24/7.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="bg-blue-100 p-2 rounded-lg mt-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Shield className="w-5 h-5 text-blue-600" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Solutions sécurisées et fiables
                </h3>
                <p className="text-slate-600">
                  De la conception à la mise en ligne, accompagnement complet.
                  Hébergement performant et maintenance assurée.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="bg-amber-100 p-2 rounded-lg mt-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Zap className="w-5 h-5 text-amber-600" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Livraison rapide
                </h3>
                <p className="text-slate-600">
                  Méthodologie agile pour des résultats concrets en quelques
                  semaines. Votre site web prêt à convertir vos visiteurs en
                  clients.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact"
                className="cursor-pointer bg-blueSurf text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-blueSurf-200"
              >
                Discutons de votre projet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#projects"
                className="cursor-pointer bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200"
              >
                Voir mes réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Credentials cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Compétences */}
        <motion.div
          className="bg-white border-2 border-slate-100 rounded-xl p-8 cursor-default"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgb(191, 219, 254)",
            boxShadow: "0 20px 25px -5px rgba(14, 116, 144, 0.1)",
          }}
        >
          <motion.div
            className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Code2 className="w-7 h-7 text-slate-700" />
          </motion.div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Technologies modernes
          </h3>
          <p className="text-slate-600 mb-4">
            React, Next.js, TypeScript pour des sites web rapides et évolutifs.
          </p>
          <div className="flex flex-wrap gap-2">
            <motion.span
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1, backgroundColor: "rgb(226, 232, 240)" }}
            >
              React
            </motion.span>
            <motion.span
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1, backgroundColor: "rgb(226, 232, 240)" }}
            >
              Next.js
            </motion.span>
            <motion.span
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.1, backgroundColor: "rgb(226, 232, 240)" }}
            >
              TypeScript
            </motion.span>
          </div>
        </motion.div>

        {/* Card 2: Formation */}
        <motion.div
          className="bg-white border-2 border-slate-100 rounded-xl p-8 cursor-default"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgb(191, 219, 254)",
            boxShadow: "0 20px 25px -5px rgba(14, 116, 144, 0.1)",
          }}
        >
          <motion.div
            className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="w-7 h-7 text-slate-700" />
          </motion.div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Formation solide
          </h3>
          <p className="text-slate-600 mb-4">
            Mastère Tech Lead | Cybersécurité et Intelligence Artificielle
          </p>
          <p className="text-sm text-slate-500">
            Expertise technique validée pour garantir la qualité de vos projets.
          </p>
        </motion.div>

        {/* Card 3: Expérience */}
        <motion.div
          className="bg-white border-2 border-slate-100 rounded-xl p-8 cursor-default"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            borderColor: "rgb(191, 219, 254)",
            boxShadow: "0 20px 25px -5px rgba(14, 116, 144, 0.1)",
          }}
        >
          <motion.div
            className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Briefcase className="w-7 h-7 text-slate-700" />
          </motion.div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Expérience concrète
          </h3>
          <p className="text-slate-600 mb-4">Plus de 20 projets réalisés</p>
          <p className="text-sm text-slate-500">
            PME et entrepreneurs accompagnés dans leur transformation digitale.
          </p>
        </motion.div>
      </div>
      {/* Technologies Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Technologies maîtrisées
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Un ensemble de langages et frameworks modernes pour concevoir des
            sites web rapides, stables et évolutifs.
          </motion.p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {/* First set */}
            <div className="flex gap-6 flex-shrink-0">
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.react_icon}
                  alt="React"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  React
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.nextjs_icon}
                  alt="Next.js"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Next.js
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.typescript_icon}
                  alt="TypeScript"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  TypeScript
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.javascript_icon}
                  alt="JavaScript"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  JavaScript
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.html5_icon}
                  alt="HTML5"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  HTML5
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.css3_icon}
                  alt="CSS3"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  CSS3
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.tailwindcss_icon}
                  alt="Tailwind CSS"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Tailwind CSS
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.node_icon}
                  alt="Node.js"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Node.js
                </p>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-6 flex-shrink-0">
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.react_icon}
                  alt="React"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  React
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.nextjs_icon}
                  alt="Next.js"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Next.js
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.typescript_icon}
                  alt="TypeScript"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  TypeScript
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.javascript_icon}
                  alt="JavaScript"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  JavaScript
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.html5_icon}
                  alt="HTML5"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  HTML5
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.css3_icon}
                  alt="CSS3"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  CSS3
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.tailwindcss_icon}
                  alt="Tailwind CSS"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Tailwind CSS
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.node_icon}
                  alt="Node.js"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Node.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Outils professionnels pour garantir la qualité de vos projets
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Des technologies modernes et fiables pour assurer performance,
            sécurité et évolutivité de votre site.
          </motion.p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {/* First set */}
            <div className="flex gap-6 flex-shrink-0">
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blueSurf-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.vscode_icon}
                  alt="VS Code"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  VS Code
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blueSurf-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.git_icon}
                  alt="Git"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Git
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.github_icon}
                  alt="GitHub"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  GitHub
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.figma_icon}
                  alt="Figma"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Figma
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.firebase}
                  alt="Firebase"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Firebase
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.mongodb_icon}
                  alt="MongoDB"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  MongoDB
                </p>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-6 flex-shrink-0">
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.vscode_icon}
                  alt="VS Code"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  VS Code
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.git_icon}
                  alt="Git"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Git
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.github_icon}
                  alt="GitHub"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  GitHub
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.figma_icon}
                  alt="Figma"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Figma
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.firebase_icon}
                  alt="Firebase"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  Firebase
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all w-40">
                <Image
                  src={assets.mongodb_icon}
                  alt="MongoDB"
                  className="w-14 h-14 mb-2 mx-auto"
                />
                <p className="text-sm font-medium text-slate-700 text-center">
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-24 bg-gradient-to-br from-blueSurf-50 to-blueSurf-50 border-2 border-blueSurf-200 rounded-2xl p-12 text-center"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold text-slate-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Prêt à transformer votre présence en ligne ?
        </motion.h2>
        <motion.p
          className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Discutons de votre projet sans engagement. Obtenez un devis
          personnalisé et des conseils adaptés à vos besoins en 48h.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blueSurf-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#0c5282",
            boxShadow: "0 20px 25px -5px rgba(14, 116, 144, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          Démarrer votre projet
          <span className="text-xl">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
