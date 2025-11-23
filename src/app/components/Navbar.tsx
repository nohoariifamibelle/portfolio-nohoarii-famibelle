"use client";

import { assets } from "../../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, MoonIcon, SunIcon } from "lucide-react";

// Liens de navigation centralisés pour éviter la duplication
const NAV_LINKS = [
  { href: "#top", label: "Accueil" },
  { href: "#projects", label: "Mes réalisations" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  // Gestion du menu mobile avec état React
  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
    // TODO: Implémenter la logique de dark mode (localStorage, context, etc.)
  }, []);

  // Scroll listener avec cleanup et throttle
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScroll(window.scrollY > 50);
      }, 100); // Throttle à 100ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Fermeture du menu au clic en dehors
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  // Fermeture du menu avec la touche Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Background de l'en-tête"
          width={1920}
          height={500}
          className="w-full"
          priority
        />
      </div>

      <nav
        aria-label="Navigation principale"
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/60 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <Link href="#top" aria-label="Retour à l'accueil">
          <Image
            src={assets.logo}
            alt="Logo"
            width={64}
            height={64}
            className="cursor-pointer mr-14"
          />
        </Link>

        {/* Menu desktop */}
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-roboto hover:text-blueSurf transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Bouton Dark Mode */}
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
            className="hover:scale-110 transition-transform"
          >
            {isDarkMode ? (
              <SunIcon className="w-7 h-7" strokeWidth={1} />
            ) : (
              <MoonIcon className="w-7 h-7" strokeWidth={1} />
            )}
          </button>

          {/* CTA Desktop */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center text-white gap-3 px-5 py-2.5 bg-blueSurf hover:bg-blueSurf-700 rounded-lg ml-4 text-base font-medium hover:scale-105 shadow-lg hover:shadow-xl transition-all"
          >
            DEVIS GRATUIT <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Bouton menu mobile */}
          <button
            className="block lg:hidden ml-3"
            onClick={openMenu}
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Image
              src={assets.menu_black}
              alt=""
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>

        {/* Menu mobile */}
        <ul
          id="mobile-menu"
          ref={sideMenuRef}
          role="navigation"
          aria-label="Menu mobile"
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-blueSurf transition-all duration-500 ${
            isMenuOpen ? "right-0" : "-right-64"
          }`}
        >
          {/* Bouton fermeture */}
          <div className="absolute right-6 top-6">
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={assets.close_black}
                alt=""
                width={20}
                height={20}
                className="w-5"
              />
            </button>
          </div>

          {/* Liens de navigation mobile */}
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="font-roboto text-white hover:text-gray-200 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* CTA Mobile */}
          <li className="mt-8">
            <Link
              href="#contact"
              className="flex items-center justify-between w-full px-5 py-2.5 border border-gray-500 rounded-full font-roboto bg-white hover:bg-gray-100 transition-colors"
              onClick={closeMenu}
            >
              Devis gratuit
              <Image
                src={assets.arrow_icon}
                alt=""
                width={12}
                height={12}
                className="w-3"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
