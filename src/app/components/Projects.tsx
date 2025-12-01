"use client";
import { FolderGit2, Check, ExternalLink } from "lucide-react";
import { assets } from "../../../assets/assets";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

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
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FolderGit2 className="w-6 h-6" />
            Mes réalisations orientées performance
          </motion.div>
          <motion.h2
            className="text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Des projets sur mesure conçus pour{" "}
            <span className="text-blueSurf">performer.</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Chaque réalisation est pensée pour attirer, convertir et faire
            croître l&apos;activité de mes clients.
            <br /> Découvrez comment une approche centrée sur la donnée, le
            design et la performance crée de véritables leviers de croissance
            digitale.
          </motion.p>
        </motion.div>

        {/* Projects section */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-6 py-4 border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Titre */}
              <div className="py-4 px-4 lg:col-span-3">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-32 h-1 bg-yellow-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />

                  <motion.h2
                    className="text-white text-4xl font-light tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    {project.title}
                  </motion.h2>
                </div>
              </div>
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              >
                {/* Image de mise en avant */}
                <motion.div
                  className="relative rounded-2xl border-2 border-blue-400 overflow-hidden h-96 md:h-[500px] cursor-pointer"
                  whileHover={{ scale: 1.02, borderColor: "#93c5fd" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${project.image.src})`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.div
                className="lg:col-span-1 space-y-8 flex flex-col"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
              >
                <p className="text-white leading-relaxed text-sm md:text-lg">
                  {project.description}
                </p>

                <div className="space-y-4 flex-grow">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.7 + featureIndex * 0.1,
                      }}
                    >
                      <motion.div
                        className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: index * 0.2 + 0.8 + featureIndex * 0.1,
                        }}
                      >
                        <Check size={16} className="text-white" />
                      </motion.div>
                      <span className="text-white">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="lg:mt-auto mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                >
                  <motion.a
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
                    className="group/cta inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-base w-full lg:w-auto justify-center lg:justify-start max-w-full bg-white text-slate-900 rounded-xl shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span>Voir le site en ligne</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink size={18} />
                    </motion.div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-gradient-to-br from-blueSurf-50 to-blueSurf-50 border-2 border-blueSurf-200 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prêt à donner vie à votre projet ?
          </motion.h2>
          <motion.p
            className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discutons de vos besoins et créons ensemble un site qui vous
            ressemble et qui convertit vos visiteurs en clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blueSurf-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0c4a6e",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>Démarrer votre projet</span>
              <motion.span
                className="text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
