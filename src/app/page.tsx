"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Faq from "./components/FAQ";
//import Advantage from "./components/Advantage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="cursor-default">
        <Hero />
        {/* <Advantage /> */}
        <Projects />
        <Services />
        <About />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
