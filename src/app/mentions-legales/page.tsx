import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mentions Légales | Nohoarii Famibelle",
  description:
    "Mentions légales du site de Nohoarii Famibelle, développeur web freelance à Paris.",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Éditeur du site
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site est édité par :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Nom :</strong> Nohoarii Famibelle
                </li>
                <li>
                  <strong>Statut :</strong> Auto-entrepreneur / Micro-entreprise
                </li>
                <li>
                  <strong>SIRET :</strong>
                </li>
                <li>
                  <strong>Adresse :</strong> Nation, Paris
                </li>
                <li>
                  <strong>Email :</strong> famibellenohoarii@gmail.com
                </li>
                <li>
                  <strong>Téléphone :</strong> +33 7 44 41 58 57
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Hébergement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site est hébergé par :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Nom :</strong> Vercel Inc.
                </li>
                <li>
                  <strong>Adresse :</strong> 340, South Lemon Avenue à Walnut,
                  Californie, USA
                </li>
                <li>
                  <strong>Site web :</strong> https://vercel.com/
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                logos, etc.) est la propriété exclusive de Nohoarii Famibelle,
                sauf mention contraire. Toute reproduction, distribution,
                modification, adaptation, retransmission ou publication de ces
                différents éléments est strictement interdite sans l&apos;accord
                écrit préalable de Nohoarii Famibelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que
                possible et le site est périodiquement remis à jour. Toutefois,
                Nohoarii Famibelle ne peut garantir l&apos;exactitude, la
                complétude ou l&apos;actualité des informations diffusées sur
                son site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Liens hypertextes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site peut contenir des liens hypertextes vers d&apos;autres
                sites. Nohoarii Famibelle n&apos;exerce aucun contrôle sur ces
                sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Droit applicable
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le présent site et les mentions légales sont soumis au droit
                français. En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
