// Déclarations pour TypeScript afin de pouvoir importer des images
declare module "*.png";

// Import du type StaticImageData de Next.js
import { StaticImageData } from "next/image";

// ------------------ Imports des images ------------------
import code_icon from "./icons/picto/code-icon.png";
import code_icon_dark from "./icons/picto/code-icon-dark.png";
import edu_icon from "./icons/picto/edu-icon.png";
import edu_icon_dark from "./icons/picto/edu-icon-dark.png";
import project_icon from "./icons/picto/project-icon.png";
import project_icon_dark from "./icons/picto/project-icon-dark.png";
import vscode from "./icons/tools/vscode.png";
import firebase from "./icons/tools/firebase.png";
import figma from "./icons/tools/figma.png";
import git from "./icons/tools/git.png";
import mongodb from "./icons/technos/mongodb.png";
import right_arrow_white from "./icons/picto/right-arrow-white.png";
import logo from "./icons/logo/logotype_NF_blue_wave.svg";
import mail_icon from "./icons/picto/mail_icon.png";
import mail_icon_dark from "./icons/picto/mail_icon_dark.png";
import hero_img from "./img/hero-img.png";
import download_icon from "./icons/picto/download-icon.png";
import hand_icon from "./icons/picto/hand-icon.png";
import header_bg_color from "./img/header-bg-color.png";
import moon_icon from "./icons/picto/moon_icon.png";
import sun_icon from "./icons/picto/sun_icon.png";
import arrow_icon from "./icons/picto/arrow-icon.png";
import arrow_icon_dark from "./icons/picto/arrow-icon-dark.png";
import menu_black from "./icons/picto/menu-black.png";
import menu_white from "./icons/picto/menu-white.png";
import close_black from "./icons/picto/close-black.png";
import close_white from "./icons/picto/close-white.png";
import web_icon from "./icons/picto/web-icon.png";
import mobile_icon from "./icons/picto/mobile-icon.png";
import ui_icon from "./icons/picto/ui-icon.png";
import graphics_icon from "./icons/picto/graphics-icon.png";
import right_arrow from "./icons/picto/right-arrow.png";
import send_icon from "./icons/picto/send-icon.png";
import right_arrow_bold from "./icons/picto/right-arrow-bold.png";
import right_arrow_bold_dark from "./icons/picto/right-arrow-bold-dark.png";
import profile_user from "./img/profile_user.png";
import react_icon from "./icons/technos/react-icon.svg";
import nextjs_icon from "./icons/technos/nextjs-icon.svg";
import node_icon from "./icons/technos/nodejs-icon.svg";
import tailwindcss_icon from "./icons/technos/tailwindcss-icon.svg";
import css3_icon from "./icons/technos/css3-icon.svg";
import html5_icon from "./icons/technos/html5-icon.svg";
import javascript_icon from "./icons/technos/javascript-icon.svg";
import typescript_icon from "./icons/technos/typescript-icon.svg";
import mongodb_icon from "./icons/technos/mongodb-icon.svg";
import firebase_icon from "./icons/tools/firebase-icon.svg";
import figma_icon from "./icons/tools/figma-icon.svg";
import github_icon from "./icons/tools/github-icon.svg";
import git_icon from "./icons/tools/git-icon.svg";
import vscode_icon from "./icons/tools/vscode-icon.svg";
import fbb_bg from "./projects/bg-fbb.png";

// ------------------ Objet assets ------------------
export const assets = {
  fbb_bg,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  mail_icon,
  mail_icon_dark,
  hero_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  profile_user,
  react_icon,
  nextjs_icon,
  node_icon,
  tailwindcss_icon,
  css3_icon,
  html5_icon,
  javascript_icon,
  typescript_icon,
  mongodb_icon,
  firebase_icon,
  figma_icon,
  github_icon,
  git_icon,
  vscode_icon,
};

// ------------------ Types ------------------
export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
}

export interface ServiceItem {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

// ------------------ Données ------------------
export const serviceData: ServiceItem[] = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Compétences clés",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Diplômes",
    description: "Bachelor Développement Web",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projets",
    description: "Contribution dans plus de 30 projets",
  },
];

export const toolsData: StaticImageData[] = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
