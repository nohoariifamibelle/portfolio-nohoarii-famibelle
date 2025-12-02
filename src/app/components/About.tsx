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
export default function About() {
  return (
    <section id="about" className="max-w-7xl bg-gray-50 mx-auto px-6 py-20">
      {/* About Section */}
      {/* Header with value proposition */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6">
          <Zap className="w-6 h-6" />
          Votre partenaire digital
        </div>
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Un site web qui génère{" "}
          <span className="text-blueSurf">des résultats</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          J&apos;aide les PME à transformer leur présence en ligne en véritable
          outil de croissance. Sites vitrines et e-commerce performants, livrés
          rapidement.
        </p>
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl opacity-50 blur-2xl"></div>
          <div className="relative bg-white p-2 rounded-2xl shadow-xl">
            <Image
              src={assets.profile_user}
              alt="Photo de profil de Nohoarii FAMIBELLE"
              className="rounded-xl w-full h-[500px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-slate-100 max-lg:right-20  max-sm:right-10">
              <div className="flex items-center gap-3">
                <div className="bg-blueSurf-100 p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-blueSurf" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-slate-900">20+</div>
                  <div className="text-sm text-slate-600">Projets réussis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Nohoarii, développeur web freelance
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
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
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg mt-1">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Solutions sécurisées et fiables
                </h3>
                <p className="text-slate-600">
                  De la conception à la mise en ligne, accompagnement complet.
                  Hébergement performant et maintenance assurée.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-2 rounded-lg mt-1">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
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
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="cursor-pointer bg-blueSurf hover:bg-blueSurf-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blueSurf-200 hover:shadow-xl hover:shadow-blueSurf-300"
            >
              Discutons de votre projet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#projects"
              className="cursor-pointer bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 transition-all"
            >
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </div>

      {/* Credentials cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Compétences */}
        <div className="bg-white border-2 border-slate-100 rounded-xl p-8 hover:border-blueSurf-200 hover:shadow-lg transition-all cursor-default">
          <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Code2 className="w-7 h-7 text-slate-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Technologies modernes
          </h3>
          <p className="text-slate-600 mb-4">
            React, Next.js, TypeScript pour des sites web rapides et évolutifs.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
              React
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
              Next.js
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
              TypeScript
            </span>
          </div>
        </div>

        {/* Card 2: Formation */}
        <div className="bg-white border-2 border-slate-100 rounded-xl p-8 hover:border-blueSurf-200 hover:shadow-lg transition-all cursor-default">
          <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Award className="w-7 h-7 text-slate-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Formation solide
          </h3>
          <p className="text-slate-600 mb-4">
            Mastère Tech Lead | Cybersécurité et Intelligence Artificielle
          </p>
          <p className="text-sm text-slate-500">
            Expertise technique validée pour garantir la qualité de vos projets.
          </p>
        </div>

        {/* Card 3: Expérience */}
        <div className="bg-white border-2 border-slate-100 rounded-xl p-8 hover:border-blueSurf-200 hover:shadow-lg transition-all cursor-default">
          <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Briefcase className="w-7 h-7 text-slate-700" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Expérience concrète
          </h3>
          <p className="text-slate-600 mb-4">Plus de 20 projets réalisés</p>
          <p className="text-sm text-slate-500">
            PME et entrepreneurs accompagnés dans leur transformation digitale.
          </p>
        </div>
      </div>
      {/* Technologies Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Technologies maîtrisées
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Un ensemble de langages et frameworks modernes pour concevoir des
            sites web rapides, stables et évolutifs.
          </p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Outils professionnels pour garantir la qualité de vos projets
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Des technologies modernes et fiables pour assurer performance,
            sécurité et évolutivité de votre site.
          </p>
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
      <div className="mt-24 bg-gradient-to-br from-blueSurf-50 to-blueSurf-50 border-2 border-blueSurf-200 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Prêt à transformer votre présence en ligne ?
        </h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          Discutons de votre projet sans engagement. Obtenez un devis
          personnalisé et des conseils adaptés à vos besoins en 48h.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blueSurf-600 hover:bg-blueSurf-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Démarrer votre projet
          <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  );
}
