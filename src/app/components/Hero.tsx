import { MapPin, Mail, Zap } from "lucide-react";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import { useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface Company {
  id: number;
  name: string;
  logo: string;
  websiteScreenshot: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: "Company One",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 2,
    name: "Company Two",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 3,
    name: "Company Three",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 4,
    name: "Company Four",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 5,
    name: "Company Five",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 6,
    name: "Company Six",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 7,
    name: "Company Seven",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 8,
    name: "Company Eight",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 9,
    name: "Company Nine",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
  {
    id: 10,
    name: "Company Ten",
    logo: assets.logo,
    websiteScreenshot: assets.logo,
  },
];

const CompanyCard = ({ company }: { company: Company }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-64 md:w-72 mx-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card with logo */}
      <div
        className="relative h-32 rounded-[10px] backdrop-blur-glass bg-glass-bg border border-glass-border shadow-glass 
                   flex items-center justify-center p-6 transition-all duration-500 ease-smooth
                   hover:shadow-glow hover:border-primary/30 group overflow-hidden"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          className="relative z-10 max-w-full max-h-full object-contain filter"
        />
      </div>

      {/* iPhone mockup with screenshot - appears on hover */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ease-bounce pointer-events-none
                   ${
                     isHovered
                       ? "bottom-[calc(100%+1rem)] opacity-100 scale-100"
                       : "bottom-[calc(100%+0.5rem)] opacity-0 scale-75"
                   }`}
        style={{
          transformOrigin: "bottom center",
        }}
      >
        <div className="relative">
          {/* Glow effect behind phone */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl scale-110 animate-glow-pulse" />

          <DeviceFrameset device="iPhone X" color="black" width={200}>
            <Image
              src={company.websiteScreenshot}
              alt={`${company.name} website`}
              className="w-full h-full object-cover"
            />
          </DeviceFrameset>
        </div>
      </div>
    </div>
  );
};
export default function Hero() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.8,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );
  return (
    <section className="min-h-screen px-6 py-20">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-20">
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
              les PME dans la création de sites performants, modernes et
              orientés résultats.
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
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Embla carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex py-12">
              {/* Duplicate companies for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <CompanyCard key={`${company.id}-${index}`} company={company} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
