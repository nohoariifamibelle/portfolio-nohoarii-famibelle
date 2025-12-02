import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  // URL de base de votre site
  metadataBase: new URL("https://nohoarii.dev"),

  // Titre du site
  title: {
    default:
      "Développeur Fullstack Freelance Paris • Sites Vitrines, E-commerce & Apps sur-mesure",
    template: "%s | Nohoarii Famibelle",
  },

  // Description
  description:
    "Je crée des sites web modernes et sur-mesure pour PME à Paris : vitrines, e-commerce et applications web optimisées SEO. Boostez votre visibilité dès maintenant !",

  // Mots-clés
  keywords: [
    "développeur fullstack",
    "freelance Paris",
    "développement web",
    "site vitrine",
    "e-commerce",
    "application web",
    "React",
    "Next.js",
    "TypeScript",
    "développeur web Paris",
  ],

  // Informations auteur
  authors: [{ name: "Nohoarii Famibelle" }],
  creator: "Nohoarii Famibelle",
  publisher: "Nohoarii Famibelle",

  // Désactive la détection automatique de numéros
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 🟢 OPEN GRAPH (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nohoarii.dev",
    siteName: "Nohoarii Famibelle - Développeur Fullstack Freelance",
    title:
      "Développeur Fullstack Freelance Paris • Sites Vitrines, E-commerce & Apps sur-mesure",
    description:
      "Je crée des sites web modernes et sur-mesure pour PME à Paris : vitrines, e-commerce et applications web optimisées SEO. Boostez votre visibilité dès maintenant !",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nohoarii Famibelle - Développeur Fullstack Freelance Paris",
        type: "image/png",
      },
    ],
  },

  // 🐦 TWITTER CARDS
  twitter: {
    card: "summary_large_image",
    title: "Développeur Fullstack Freelance Paris",
    description:
      "Sites web modernes et performants pour PME : vitrines, e-commerce et applications sur-mesure optimisées SEO.",
    images: ["/twitter-image.png"],
  },

  // Instructions pour les robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Vérification Google Search Console (à ajouter plus tard)
  // verification: {
  //   google: 'votre-code-de-verification-google',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${outfit.variable} ${roboto.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
