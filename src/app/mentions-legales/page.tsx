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
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l&apos;économie numérique, il est
                précisé aux utilisateurs du site Nohoarii l&apos;identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Éditeur du site
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le présent site, accessible à l’URL https://nohoarii.dev/ (le «
                Site »), est édité par :
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nohoarii FAMIBELLE, résidant 19 Avenue du Bel-Air, 75012, Paris,
                de nationalité Française (France), né(e) le 15/02/2000
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Hébergement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Site est hébergé par la société Vercel, situé 340, South
                Lemon Avenue à Walnut, Californie, USA, (contact téléphonique ou
                email : +19513836898).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Directeur de publication
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le Directeur de la publication du Site est Nohoarii FAMIBELLE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Nous contacter
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Par téléphone : +33744415857
              </p>
              <p className="text-gray-700 leading-relaxed">
                Par email : famibellenohoarii@gmail.com
              </p>
              <p className="text-gray-700 leading-relaxed">
                Par courrier : 19 Avenue du Bel-Air, 75012, Paris
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Données personnelles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le traitement de vos données à caractère personnel est régi par
                notre Charte du respect de la vie privée, disponible depuis la
                section &quot;Charte de Protection des Données
                Personnelles&quot;, conformément au Règlement Général sur la
                Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
