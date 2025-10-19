import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
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
  title:
    "Développeur Web Freelance Paris | Sites Vitrines, E-commerce & Apps sur-mesure",
  description:
    "Je crée des sites web modernes et sur-mesure pour PME à Paris : vitrines, e-commerce et applications web optimisées SEO. Boostez votre visibilité dès maintenant !",
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
      </body>
    </html>
  );
}
