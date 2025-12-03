import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Politique de Confidentialité | Nohoarii Famibelle",
  description:
    "Politique de confidentialité et protection des données personnelles.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Date de dernière mise à jour :</strong>{" "}
                {new Date().toLocaleDateString("fr-FR")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                La protection de vos données personnelles est une priorité pour
                Nohoarii Famibelle. Cette politique de confidentialité explique
                comment nous collectons, utilisons et protégeons vos
                informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Données collectées
              </h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                1.1 Données collectées directement
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Lorsque vous utilisez notre formulaire de contact ou vous
                inscrivez à la newsletter, nous collectons :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Votre adresse email</li>
                <li>Votre nom (si fourni)</li>
                <li>Votre message (formulaire de contact)</li>
                <li>Votre numéro de téléphone (si fourni)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
                1.2 Données collectées automatiquement
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
                <li>Données de navigation (cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Utilisation des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Analyser le trafic et l&apos;utilisation du site</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Base légale du traitement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Votre consentement :</strong> pour la newsletter et
                  les cookies non essentiels
                </li>
                <li>
                  <strong>L&apos;exécution du contrat :</strong> pour répondre à
                  vos demandes
                </li>
                <li>
                  <strong>Notre intérêt légitime :</strong> pour améliorer nos
                  services
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Conservation des données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous conservons vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Formulaire de contact :</strong> 3 ans à compter du
                  dernier contact
                </li>
                <li>
                  <strong>Newsletter :</strong> jusqu&apos;à votre
                  désinscription
                </li>
                <li>
                  <strong>Cookies :</strong> maximum 13 mois
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Partage des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nous ne vendons ni ne louons vos données personnelles. Vos
                données peuvent être partagées avec :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Prestataires techniques :</strong> hébergement,
                  emailing, analytics
                </li>
                <li>
                  <strong>Autorités légales :</strong> si la loi l&apos;exige
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nous utilisons des cookies pour :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Assurer le bon fonctionnement du site (cookies essentiels)
                </li>
                <li>Analyser le trafic (cookies analytics)</li>
                <li>Améliorer votre expérience utilisateur</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Vous pouvez gérer vos préférences de cookies via les paramètres
                de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Vos droits (RGPD)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Droit d&apos;accès :</strong> obtenir une copie de vos
                  données
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger vos données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement :</strong> supprimer vos
                  données
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> refuser certains
                  traitements
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos
                  données
                </li>
                <li>
                  <strong>Droit de limitation :</strong> limiter le traitement
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, contactez-nous à :{" "}
                <a
                  href="mailto:famibellenohoarii@gmail.com"
                  className="text-blueSurf-600 hover:text-blueSurf-700"
                >
                  famibellenohoarii@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Sécurité
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données contre
                tout accès non autorisé, perte, destruction ou divulgation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                9. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cette politique peut être mise à jour. La date de dernière mise
                à jour est indiquée en haut de cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                10. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant cette politique de
                confidentialité :
              </p>
              <ul className="list-none pl-0 text-gray-700 space-y-2 mt-3">
                <li>
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:famibellenohoarii@gmail.com"
                    className="text-blueSurf-600 hover:text-blueSurf-700"
                  >
                    famibellenohoarii@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Téléphone :</strong> +33 7 44 41 58 57
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
