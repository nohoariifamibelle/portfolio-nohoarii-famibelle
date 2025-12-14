import { HandHelping } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  colorScheme: "lightBlue" | "darkBlue" | "white";
  visual: React.ReactNode;
  className?: string;
  index?: number;
}
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Card: React.FC<CardProps> = ({
  title,
  description,
  colorScheme,
  visual,
  className = "",
  index = 0,
}) => {
  const baseClasses = "rounded-3xl flex flex-col justify-between";

  const colorClasses = {
    lightBlue: "bg-blueSurf-50 border-2 border-blueSurf-200",
    darkBlue:
      "bg-blueSurf text-white hover:shadow-2xl hover:shadow-blue-500/20",
    white: "bg-white shadow-md",
  };

  const textColorClasses = {
    lightBlue: "text-gray-800",
    darkBlue: "text-white",
    white: "text-gray-800",
  };

  const titleSizeClasses =
    colorScheme === "darkBlue"
      ? "text-3xl md:text-4xl font-bold mb-6"
      : "text-2xl md:text-3xl font-bold mb-4";

  const descriptionClasses =
    colorScheme === "darkBlue"
      ? "text-base md:text-lg leading-relaxed"
      : "text-base md:text-lg leading-relaxed text-gray-700";

  return (
    <motion.div
      className={`${baseClasses} ${colorClasses[colorScheme]} ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          colorScheme === "darkBlue"
            ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div>
        <motion.h3
          className={`${titleSizeClasses} ${textColorClasses[colorScheme]}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className={descriptionClasses}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className="mt-6 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {visual}
      </motion.div>
    </motion.div>
  );
};

export default function Advantage() {
  return (
    <section id="advantage" className="max-w-7xl mx-auto px-6 bg-white py-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <HandHelping className="w-4 h-4" />
          Comment j&apos;aide mes clients
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Votre site actuel vous{" "}
          <span className="text-blueSurf-600">coûte des clients</span> chaque
          jour
        </motion.h2>
        <motion.p
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          La plupart des PME perdent 60% de leurs opportunités à cause d&apos;un
          site qui ne convertit pas. Voici comment je corrige ça.
        </motion.p>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-fr lg:auto-rows-auto">
          {/* CARTE 1 - Des résultats qui comptent */}
          <Card
            title="Des résultats qui comptent"
            description="Chaque fonctionnalité est pensée pour transformer vos visiteurs en clients."
            colorScheme="lightBlue"
            className="lg:col-span-3 lg:row-span-1 p-4 md:p-8 min-h-[200px]"
            index={0}
            visual={
              <div className="w-full">
                <div className="flex gap-2 items-end justify-center mb-4">
                  <div className="w-8 h-12 bg-[#077ea2] rounded-t-lg"></div>
                  <div className="w-8 h-16 bg-[#077ea2] rounded-t-lg"></div>
                  <div className="w-8 h-20 bg-[#077ea2] rounded-t-lg"></div>
                  <div className="w-8 h-24 bg-[#077ea2] rounded-t-lg"></div>
                </div>
                <div className="flex gap-3 justify-center text-2xl">
                  <span role="img" aria-label="money">
                    💰
                  </span>
                  <span role="img" aria-label="chart">
                    📊
                  </span>
                  <span role="img" aria-label="trending">
                    📈
                  </span>
                </div>
              </div>
            }
          />

          {/* CARTE 2 - Rapide et efficace ⭐ CARTE PRINCIPALE */}
          <Card
            title="Rapide et efficace"
            description="Votre site web professionnel livré en quelques semaines, sans compromis sur la qualité ni la performance."
            colorScheme="darkBlue"
            className="lg:col-span-5 lg:row-span-1 p-8 md:p-10 min-h-[200px]"
            index={1}
            visual={
              <div className="flex flex-col items-center justify-center my-8">
                <div
                  className="text-6xl md:text-6xl mb-2"
                  role="img"
                  aria-label="rocket"
                >
                  🚀
                </div>
              </div>
            }
          />

          {/* CARTE 3 - Performance garantie */}
          <Card
            title="Performance garantie"
            description="Un site ultra-rapide, optimisé pour Google et conçu pour offrir une expérience utilisateur exceptionnelle qui fidélise vos visiteurs."
            colorScheme="white"
            className="lg:col-span-4 lg:row-span-1 p-6 md:p-8 min-h-[200px] border-2 border-gray-200"
            index={2}
            visual={
              <div className="relative inline-block">
                <div
                  className="text-6xl md:text-7xl"
                  role="img"
                  aria-label="lightning"
                >
                  ⚡
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  100%
                </div>
              </div>
            }
          />

          {/* CARTE 4 - Votre partenaire de A à Z */}
          <Card
            title="Votre partenaire de A à Z"
            description="De la stratégie initiale à l'optimisation continue, je gère l'intégralité de votre projet pour que vous puissiez vous concentrer sur votre business."
            colorScheme="white"
            className="lg:col-span-7 lg:row-span-1 p-8 md:p-6 min-h-[200px] border-2 border-gray-200"
            index={3}
            visual={
              <div className="flex items-center justify-center gap-2 w-full flex-wrap">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  ✓
                </div>
                <div className="h-1 w-8 md:w-12 bg-green-500 rounded"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  ✓
                </div>
                <div className="h-1 w-8 md:w-12 bg-green-500 rounded"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  ✓
                </div>
              </div>
            }
          />

          {/* CARTE 5 - Un développeur, toutes les compétences */}
          <Card
            title="Un développeur, toutes les compétences"
            description="Front-end, back-end, intégrations, déploiement : je gère chaque étape technique pour que vous n'ayez à vous soucier de rien."
            colorScheme="darkBlue"
            className="lg:col-span-5 lg:row-span-1 p-6 md:p-8 min-h-[200px]"
            index={4}
            visual={
              <div>
                <Image
                  src={assets.carrousel_technos_black}
                  alt="Carrousel de technologies"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
