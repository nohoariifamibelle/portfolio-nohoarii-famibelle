"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Faq from "./components/FAQ";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="cursor-default">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
