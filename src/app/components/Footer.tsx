import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  /*
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Newsletter signup:", email);
  };*/

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <h3 className="text-white text-xl font-bold mb-4">
              Nohoarii Famibelle
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Développeur web freelance à Paris. Je crée des sites performants
              qui transforment vos visiteurs en clients.
            </p>

            <div className="space-y-3">
              <Link
                href="mailto:famibellenohoarii@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">famibellenohoarii@gmail.com</span>
              </Link>
              <Link
                href="tel:+33744415857"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+33 7 44 41 58 57</span>
              </Link>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-sm">Paris, France</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.linkedin.com/in/nohoarii-famibelle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/nohoariifamibelle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Accueil
              </Link>
              <Link
                href="/#project"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Mes réalisations
              </Link>
              <Link
                href="/#services"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                À propos
              </Link>
              <Link
                href="/#faq"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">
              Pourquoi me choisir ?
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="text-green-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white text-sm font-medium">
                    Disponible sous 48h
                  </p>
                  <p className="text-gray-500 text-xs">Réactivité garantie</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield
                  size={18}
                  className="text-green-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white text-sm font-medium">
                    Paiement sécurisé
                  </p>
                  <p className="text-gray-500 text-xs">
                    Transactions protégées
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white text-sm font-medium">
                    Sans engagement
                  </p>
                  <p className="text-gray-500 text-xs">
                    Collaboration flexible
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Restez informé</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recevez des conseils exclusifs, astuces CRO et ressources pour
              améliorer votre présence en ligne.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="w-full bg-white text-slate-900 hover:shadow-xl hover:scale-105 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2"
              >
                S&apos;inscrire
                <ArrowRight size={16} />
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="bg-gradient-to-r from-blueSurf-500 to-blueSurf-600 rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Prêt à booster votre site ?
                </h3>
                <p className="text-blue-100 text-sm">
                  Discutons de votre projet et voyons comment je peux vous aider
                  à atteindre vos objectifs.
                </p>
              </div>
              <Link
                href="/#contact"
                className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg cursor-pointer"
              >
                Démarrer mon projet
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Nohoarii Famibelle. Tous droits
              réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
