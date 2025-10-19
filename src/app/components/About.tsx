import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";

export default function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Qui suis-je ?</h4>
      <h2 className="text-center text-5xl font-roboto ">
        À <span>propos</span>
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-128 sm:w-100 rounded-3xl max-w-none">
          <Image
            src={assets.profile_user}
            alt="Photo de profil de Nohoarii FAMIBELLE"
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-2 max-w-2xl font-roboto">
            Je m&apos;appelle Nohoarii, développeur web passionné et créatif.
            <br />
            J&apos;aide les PME à se démarquer en ligne grâce à des sites web
            modernes, rapides et sur mesure. <br />
            Mon objectif : transformer vos idées en outils digitaux concrets qui
            renforcent votre visibilité et développent vos ventes.
          </p>
          <p className="mb-10 max-w-2xl font-roboto">
            De la conception à la mise en ligne, j&apos;assure un accompagnement
            complet pour garantir des solutions performantes, sécurisées et
            faciles à administrer. Faites le choix d&apos;un site web qui
            reflète vraiment votre entreprise.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl gap-6 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700">Outils que j&apos;utilise</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
