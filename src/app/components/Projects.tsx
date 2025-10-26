"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "website" | "design";
  link?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Premium",
    description:
      "Refonte complète d'une boutique en ligne avec optimisation du parcours d'achat. Résultat : +45% de taux de conversion.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "website",
    link: "#",
  },
  {
    id: "2",
    title: "Site Vitrine Corporate",
    description:
      "Création d'un site institutionnel moderne pour une entreprise B2B. Focus sur la crédibilité et la génération de leads.",
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "website",
    link: "#",
  },
  {
    id: "3",
    title: "Application Web SaaS",
    description:
      "Développement d'une plateforme de gestion de projets avec tableau de bord analytique et interface intuitive.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "website",
    link: "#",
  },
  {
    id: "4",
    title: "Identité Visuelle Startup",
    description:
      "Conception complète de l'identité de marque : logo, charte graphique et déclinaisons digitales pour une startup tech.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "design",
    link: "#",
  },
  {
    id: "5",
    title: "Refonte UI/UX Mobile",
    description:
      "Redesign complet d'une application mobile avec focus sur l'expérience utilisateur et l'accessibilité.",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "design",
    link: "#",
  },
  {
    id: "6",
    title: "Design System",
    description:
      "Création d'un système de design complet avec composants réutilisables pour une cohérence multi-plateformes.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "design",
    link: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
        <Button
          className="w-full group/btn bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 transition-all duration-300"
          asChild
        >
          <a href={project.link}>
            Voir le projet
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"website" | "design">("website");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto" id="projects">
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

        <Tabs
          defaultValue="website"
          className="w-full"
          onValueChange={(value) => setActiveTab(value as "website" | "design")}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14 bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
            <TabsTrigger
              value="website"
              className="text-base font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-md rounded-lg transition-all duration-300"
            >
              Création de site
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="text-base font-semibold data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-md rounded-lg transition-all duration-300"
            >
              Design web
            </TabsTrigger>
          </TabsList>

          <TabsContent value="website" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

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
