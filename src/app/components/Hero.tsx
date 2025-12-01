import { MapPin } from "lucide-react";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import { useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

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
    <motion.div
      className="relative flex-shrink-0 w-64 md:w-72 mx-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Card with logo */}
      <motion.div
        className="relative h-32 rounded-[10px] backdrop-blur-glass bg-glass-bg border border-glass-border shadow-glass
                   flex items-center justify-center p-6 group overflow-hidden"
        whileHover={{
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          borderColor: "rgba(59, 130, 246, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Subtle gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          className="relative z-10 max-w-full max-h-full object-contain filter"
        />
      </motion.div>

      {/* iPhone mockup with screenshot - appears on hover */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        initial={{ opacity: 0, y: 20, scale: 0.75 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -16 : 8,
          scale: isHovered ? 1 : 0.75,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        style={{
          bottom: "100%",
          transformOrigin: "bottom center",
        }}
      >
        <div className="relative">
          {/* Glow effect behind phone */}
          <motion.div
            className="absolute inset-0 bg-primary/20 blur-2xl scale-110"
            animate={{
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <DeviceFrameset device="iPhone X" color="black" width={200}>
            <Image
              src={company.websiteScreenshot}
              alt={`${company.name} website`}
              className="w-full h-full object-cover"
            />
          </DeviceFrameset>
        </div>
      </motion.div>
    </motion.div>
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
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-20">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-md text-sm font-light mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <MapPin className="w-6 h-6" />
              Basé sur Paris • Disponible à distance
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                Transformez votre site web en machine à{" "}
                <span className="text-blueSurf">générer des clients</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              Vous perdez des opportunités chaque jour face à des concurrents
              mieux positionnés en ligne. Créez enfin un site qui convertit vos
              visiteurs en demandes de devis qualifiées.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            >
              <motion.a
                href="#contact"
                className="bg-blueSurf text-white border border-transparent px-6 py-4 text-base font-medium rounded-lg shadow-lg uppercase"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0c4a6e",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Obtenir mon devis gratuit
              </motion.a>

              <motion.a
                href="#projects"
                className="border-gray-300 hover:bg-gray-100 text-gray-600 border px-6 py-4 text-base font-medium rounded-lg shadow-lg uppercase"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#9ca3af",
                  backgroundColor: "#f3f4f6",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Voir mes réalisations
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={assets.hero_img}
                alt="Développeur travaillant sur un laptop"
                className="flex items-center justify-center w-100 h-auto object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="absolute top-8 right-16 lg:top-4 lg:right-4 bg-white rounded-xl shadow-lg px-6 py-3 hidden md:block"
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.4,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">98%</span>
                <span className="text-gray-600">Clients satisfaits</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-8 lg:left-2 bg-white rounded-xl shadow-lg px-6 py-3 hidden md:block"
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5,
              }}
              whileHover={{ scale: 1.05, x: -5 }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">+20</span>
                <span className="text-gray-600">Projets livrés</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-16 lg:right-6 bg-white rounded-xl shadow-lg px-6 py-3 hidden md:block"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.6,
              }}
              whileHover={{ scale: 1.05, y: 5 }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">48h</span>
                <span className="text-gray-600">Délai de réponse</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="  absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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
