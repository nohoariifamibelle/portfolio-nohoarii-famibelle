import { MessageCircleQuestionMark } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Processus et collaboration",
    items: [
      {
        question: "Comment se déroule un projet avec vous ?",
        answer:
          "Tout commence par un échange pour comprendre vos besoins. Ensuite, je vous propose une maquette, puis développe votre site en vous tenant informé à chaque étape. Vous validez avant la mise en ligne, et je reste disponible après le lancement.",
      },
      {
        question: "À quelle fréquence communiquez-vous pendant le projet ?",
        answer:
          "Je donne des nouvelles au minimum une fois par semaine, avec des points d'avancement réguliers. Vous pouvez me contacter à tout moment par email ou téléphone, je réponds généralement sous 24h maximum.",
      },
      {
        question: "Puis-je demander des modifications en cours de route ?",
        answer:
          "Absolument. Les retours font partie du processus. Je prévois des phases de validation et d'ajustements pour que le résultat final corresponde exactement à vos attentes.",
      },
    ],
  },
  {
    title: "Tarifs et délais",
    items: [
      {
        question: "Quels sont vos tarifs ?",
        answer:
          "Chaque projet est unique. Un site vitrine démarre autour de 2000€, un site e-commerce à partir de 4000€. Je vous envoie un devis détaillé après notre premier échange pour être totalement transparent sur les coûts.",
      },
      {
        question: "Combien de temps prend la réalisation d'un site ?",
        answer:
          "Un site vitrine classique prend 3 à 4 semaines, un projet e-commerce plutôt 6 à 8 semaines. Ces délais incluent les phases de validation et d'ajustements. Je m'adapte aussi à vos contraintes si vous avez une deadline particulière.",
      },
      {
        question: "Proposez-vous des facilités de paiement ?",
        answer:
          "Oui, le paiement s'effectue en plusieurs fois : un acompte au démarrage (30%), une part à mi-projet (40%) et le solde à la livraison (30%). Pour les projets importants, nous pouvons discuter d'un échelonnement adapté.",
      },
    ],
  },
  {
    title: "Prestations et expertise",
    items: [
      {
        question: "Quels types de sites créez-vous ?",
        answer:
          "Je réalise des sites vitrines, e-commerce, portfolios, landing pages et applications web sur mesure. Mon objectif : un site rapide, moderne et pensé pour convertir vos visiteurs en clients.",
      },
      {
        question: "Utilisez-vous WordPress ou du code sur mesure ?",
        answer:
          "Je développe en code sur mesure avec des technologies modernes (React, TypeScript) pour garantir performance et sécurité. Résultat : des sites ultra-rapides, sans plugins inutiles, et totalement adaptés à vos besoins.",
      },
      {
        question: "Proposez-vous la maintenance après livraison ?",
        answer:
          "Oui, je propose des contrats de maintenance mensuels incluant mises à jour, sauvegardes et support technique. Vous avez aussi une garantie de 30 jours après livraison pour toute correction sans frais supplémentaires.",
      },
      {
        question: "Mon site sera-t-il optimisé pour Google ?",
        answer:
          "Totalement. Chaque site que je crée est optimisé SEO dès le départ : structure, vitesse de chargement, balises, responsive. La plupart de mes clients voient leurs premiers résultats de référencement dans les 2-3 mois suivant la mise en ligne.",
      },
    ],
  },
  {
    title: "Questions pratiques",
    items: [
      {
        question: "Où êtes-vous basé ? Travaillez-vous à distance ?",
        answer:
          "Je travaille principalement à distance, ce qui me permet d'accompagner des clients partout en France. Pour les projets locaux, je peux me déplacer pour un premier rendez-vous si nécessaire.",
      },
      {
        question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
        answer:
          "Cela n'arrive que très rarement car nous validons ensemble chaque étape. Mais si un élément ne vous convient pas, je m'engage à le corriger jusqu'à satisfaction complète, dans la limite du scope initial du projet.",
      },
      {
        question: "Puis-je gérer mon site moi-même après la livraison ?",
        answer:
          "Oui, je vous forme à la gestion de votre site et vous fournis une documentation claire. Vous pourrez modifier textes et images facilement. Pour les modifications plus techniques, je reste disponible.",
      },
    ],
  },
];

const FAQAccordion = ({
  category,
  isOpen,
  onToggle,
}: {
  category: FAQCategory;
  isOpen: string | null;
  onToggle: (id: string) => void;
}) => {
  return (
    <div className="space-y-3">
      <motion.h3
        className="text-lg font-semibold text-primary mb-4 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="h-1 w-8 bg-blueSurf"
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        {category.title}
      </motion.h3>
      {category.items.map((item, index) => {
        const itemId = `${category.title}-${index}`;
        const isItemOpen = isOpen === itemId;

        return (
          <motion.div
            key={itemId}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.01 }}
            className="border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors"
          >
            <button
              onClick={() => onToggle(itemId)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
              aria-expanded={isItemOpen}
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isItemOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isItemOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <section
      id="faq"
      className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden bg-gradient-subtle"
    >
      <div className="text-center mb-20">
        <motion.div
          className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <MessageCircleQuestionMark className="w-4 h-4" />
          Questions fréquentes
        </motion.div>
        <motion.h2
          className="text-5xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Des questions ? J&apos;ai les{" "}
          <span className="text-blueSurf">réponses.</span>
        </motion.h2>
        <motion.p
          className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          Tout ce que vous devez savoir avant de lancer votre projet web.
          Transparence, clarté et solutions concrètes pour vous aider à décider
          en toute confiance.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* FAQ Content */}
        <div className="space-y-12">
          {faqData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <FAQAccordion
                category={category}
                isOpen={openItem}
                onToggle={handleToggle}
              />
            </motion.div>
          ))}
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
          Vous avez une vision ? Concrétisons-la ensemble.
        </motion.h2>
        <motion.p
          className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Parlons de vos ambitions et bâtissons un site à votre image, capable
          de séduire et fidéliser votre audience.
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
