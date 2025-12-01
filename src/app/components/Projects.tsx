"use client";
import { FolderGit2, Check, ExternalLink } from "lucide-react";
import { assets } from "../../../assets/assets";
import { StaticImageData } from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  features: string[];
  link?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Site vitrine pour une entreprise de transport",
      description:
        "Site vitrine pour une entreprise de transport, de personnes et de marchandises",
      image: assets.fbb_bg,
      features: [
        "Formulaire de contact",
        "Intégration des maquettes",
        "Style des formulaires",
      ],
      link: "#",
    },
    {
      id: "2",
      title: "E-commerce Premium",
      description:
        "Refonte complète d'une boutique en ligne avec optimisation du parcours d'achat. Résultat : +45% de taux de conversion. Interface moderne et intuitive pour une expérience utilisateur optimale.",
      image: assets.fbb_bg,
      features: ["Optimisation SEO", "Paiement sécurisé", "Gestion des stocks"],
      link: "#",
    },
    {
      id: "3",
      title: "Application Web SaaS",
      description:
        "Développement d'une plateforme de gestion de projets avec tableau de bord analytique et interface intuitive. Solution complète pour la gestion d'équipe et le suivi de projets en temps réel.",
      image: assets.fbb_bg,
      features: [
        "Tableau de bord",
        "Gestion des tâches",
        "Analytics en temps réel",
      ],
      link: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto" id="projects">
        {/* Introduction */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6">
            <FolderGit2 className="w-6 h-6" />
            Mes réalisations orientées performance
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Des projets sur mesure conçus pour{" "}
            <span className="text-blueSurf">performer.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Chaque réalisation est pensée pour attirer, convertir et faire
            croître l&apos;activité de mes clients.
            <br /> Découvrez comment une approche centrée sur la donnée, le
            design et la performance crée de véritables leviers de croissance
            digitale.
          </p>
        </div>

        {/* Projects section */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-6 py-4 border"
            >
              {/* Titre */}
              <div className="py-4 px-4 lg:col-span-3">
                <div className="flex items-center gap-4">
                  <div className="w-32 h-1 bg-yellow-400"></div>

                  <h2 className="text-white text-4xl font-light tracking-wide">
                    {project.title}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-2">
                {/* Image de mise en avant */}
                <div className="relative rounded-2xl border-2 border-blue-400 overflow-hidden h-96 md:h-[500px] group cursor-pointer transition-all hover:border-blue-300">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.image.src})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-1 space-y-8 flex flex-col">
                <p className="text-white leading-relaxed text-sm md:text-lg">
                  {project.description}
                </p>

                <div className="space-y-4 flex-grow">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="lg:mt-auto mb-4">
                  <a
                    href={project.link || "#"}
                    target={
                      project.link?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.link?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`Voir le site en ligne - ${project.title}`}
                    className="group/cta inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:scale-[0.98] w-full lg:w-auto justify-center lg:justify-start max-w-full bg-white text-slate-900 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>Voir le site en ligne</span>
                    <ExternalLink
                      size={18}
                      className="transition-transform duration-300 ease-in-out group-hover/cta:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-br from-blueSurf-50 to-blueSurf-50 border-2 border-blueSurf-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble un site qui vous
            ressemble et qui convertit vos visiteurs en clients.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blueSurf-600 hover:bg-blueSurf-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Démarrer votre projet
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
