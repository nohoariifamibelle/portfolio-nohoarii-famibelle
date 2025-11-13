import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6">
            <MapPin className="w-6 h-6" />
            Basé sur Paris • Disponible à distance
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
              Je transforme vos idées en{" "}
              <span className="text-blueSurf">
                applications web performantes
              </span>
            </h1>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Développeur Web Fullstack spécialisé en Next.js, j&apos;accompagne
            les PME dans la création de sites performants, modernes et orientés
            résultats. <br /> Chaque projet est guidé par l&apos;analyse, le
            design et la performance pour transformer votre présence en ligne en
            véritable levier de croissance.
          </p>

          <div className="flex items-center gap-4">
            <button
              className="bg-blueSurf text-white border border-transparent hover:bg-blueSurf-700 hover:cursor-pointer px-6 py-4 text-base font-medium rounded-lg hover:scale-105 shadow-lg hover:shadow-xl 
"
            >
              DEMANDER UN DEVIS GRATUIT
            </button>

            <a
              className="flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 hover:cursor-pointer rounded-full w-14 h-14 p-0"
              href="mailto:famibellenohoarii@gmail.com"
              aria-label="Envoyer un email"
            >
              <Mail className="w-5 h-5 " />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <Image
            src={assets.hero_img}
            alt="Développeur travaillant sur un laptop"
            className="flex items-center justify-center w-100 h-auto object-cover rounded-3xl shadow-2xl"
          />

          <div className="absolute top-8 right-16 lg:top-4 lg:right-4 bg-white rounded-xl shadow-lg px-6 py-3 hidden md:block">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">98%</span>
              <span className="text-gray-600">Clients satisfaits</span>
            </div>
          </div>

          <div className="absolute top-1/2 left-8 lg:left-2 bg-white rounded-xl shadow-lg px-6 py-3 hidden md:block">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">+20</span>
              <span className="text-gray-600">Projets livrés</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-16 lg:right-6 bg-white rounded-xl shadow-lg px-6 py-3 hidden md:block">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">48h</span>
              <span className="text-gray-600">Délai de réponse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
