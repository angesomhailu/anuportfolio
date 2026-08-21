import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <section
        id="contact"
        className="min-h-screen bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Contact
          </h2>
        </div>
      </section>
    </main>
  );
}