import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function Contact() {
  /*
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });

    
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const apiUrl = `${supabaseUrl}/functions/v1/contact-message`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setStatus({
        type: "success",
        message: "Message envoyé avec succès! Je vous répondrai sous 24h.",
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };*/

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-blueSurf border-blueSurf border px-4 py-2 rounded-full lg:text-lg text-sm font-light mb-6">
            <Mail className="w-6 h-6" />
            Discutons ensemble
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Prêt à transformer{" "}
            <span className="text-blueSurf">votre vision</span> en réalité ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi pour discuter de votre projet. Je serai ravi de
            comprendre vos besoins et vous proposer une solution web performante
            et convertissante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-3"
                >
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blueSurf-400 focus:ring-2 focus:ring-blueSurf-100 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 mb-3"
                >
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jean@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blueSurf-400 focus:ring-2 focus:ring-blueSurf-100 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900 mb-3"
                >
                  Décrivez votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Parlez-moi de votre projet, vos objectifs, vos défis..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blueSurf-400 focus:ring-2 focus:ring-blueSurf-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blueSurf-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blueSurf-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group hover:cursor-pointer"
              >
                Envoyer
              </button>

              <p className="text-xs text-slate-500 text-center">
                Vos données sont traitées de manière confidentielle.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blueSurf-50 to-blue-50 rounded-3xl p-8 border-2 border-blueSurf-200">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blueSurf-100 text-blueSurf-700 text-sm font-semibold mb-3">
                  Réactivité garantie
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Réponse sous 24 heures
              </h3>
              <p className="text-slate-700 mb-4">
                Je vous réponds rapidement pour discuter de votre projet et
                trouver la meilleure solution pour vos besoins.
              </p>
              <div className="flex items-center gap-2 text-cyan-600 font-semibold">
                <span>Disponible et à l&apos;écoute</span>
                <ArrowRight size={18} />
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-cyan-100">
                  <Mail size={28} className="text-blueSurf-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-blueSurf-600 font-semibold hover:text-blueSurf-700 transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
              <p className="text-slate-600">
                Envoyez-moi un email directement pour une prise de contact
                rapide et personnalisée.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border-2 border-blue-100">
              <p className="text-sm font-semibold text-slate-600 mb-2">
                20+ projets réalisés
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Des résultats concrets
              </h3>
              <p className="text-slate-700">
                Des clients satisfaits qui ont vu leurs projets web devenir des
                outils de croissance réelle. Pourquoi pas le vôtre ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
