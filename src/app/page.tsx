"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="cursor-default">
        <Hero />
        <Projects />
        <Services />
        <About />
      </main>
    </>
  );
}
