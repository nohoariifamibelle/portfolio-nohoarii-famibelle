"use client";
import { useEffect, useState } from "react";
import { Phone, Linkedin, Mail, Send, ArrowRight } from "lucide-react";

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
  };
  if (!mounted) return null;
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
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
                    href="mailto:famibellenohoarii@gmail.com"
                    className="text-blueSurf-600 font-semibold hover:text-blueSurf-700 transition-colors"
                  >
                    famibellenohoarii@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-cyan-100">
                  <Phone size={28} className="text-blueSurf-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+33744415857"
                    className="text-blueSurf-600 font-semibold hover:text-blueSurf-700 transition-colors"
                  >
                    +33 7 44 41 58 57
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-cyan-100">
                  <Linkedin size={28} className="text-blueSurf-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Linkedin
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/nohoarii-famibelle-06292a262/"
                    className="text-blueSurf-600 font-semibold hover:text-blueSurf-700 transition-colors"
                  >
                    Nohoarii FAMIBELLE
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border-2 border-blue-100">
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
            </div> */}
          </div>
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100"
            id="contact"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
                  autoComplete="off"
                  suppressHydrationWarning
                  required
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blueSurf-400 focus:ring-2 focus:ring-blueSurf-100 transition-all"
                  value={formData.name}
                  onChange={handleChange}
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
                  autoComplete="off"
                  suppressHydrationWarning
                  required
                  placeholder="jean@example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blueSurf-400 focus:ring-2 focus:ring-blueSurf-100 transition-all"
                  value={formData.email}
                  onChange={handleChange}
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
                  autoComplete="off"
                  suppressHydrationWarning
                  required
                  placeholder="Parlez-moi de votre projet, vos objectifs, vos défis..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blueSurf-400 focus:ring-2 focus:ring-blueSurf-100 transition-all resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blueSurf-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blueSurf-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group hover:cursor-pointer"
                disabled={status.type === "loading"}
              >
                <>
                  <Send
                    className="w-5 h-5"
                    suppressHydrationWarning
                    aria-hidden="true"
                    focusable="false"
                  />
                  {status.type === "loading" ? "Envoi en cours..." : "Envoyer"}
                </>
              </button>

              {status.type === "success" && (
                <p
                  className="text-sm text-green-600 text-center"
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
              {status.type === "error" && (
                <p
                  className="text-sm text-red-600 text-center"
                  role="alert"
                  aria-live="assertive"
                >
                  {status.message}
                </p>
              )}

              <p className="text-xs text-slate-500 text-center">
                Vos données sont traitées de manière confidentielle.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
