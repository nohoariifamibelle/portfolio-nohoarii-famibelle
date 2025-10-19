import { assets } from "../../../assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Background de l'en-tête"
          height={400}
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/60 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-16 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top" className="font-roboto">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="font-roboto">
              A propos
            </a>
          </li>
          <li>
            <a href="#services" className="font-roboto">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="font-roboto">
              Mes projets
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="Bouton thème sombre ou thème clair"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-roboto"
          >
            Devis gratuit{" "}
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu burger" className="w-6" />
          </button>
        </div>
        {/* ----- Mobile menu ----- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blueSurf transition duration-500 "
        >
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt="Icône Fermer le menu"
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu} className="font-roboto">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-roboto">
              A propos
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu} className="font-roboto">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu} className="font-roboto">
              Mes projets
            </a>
          </li>
          <li className="mt-8">
            <a
              href="#contact"
              className="flex items-center justify-between w-full px-5 py-2.5 border border-gray-500 rounded-full font-roboto bg-white"
              onClick={closeMenu}
            >
              Devis gratuit{" "}
              <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
