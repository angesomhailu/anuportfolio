import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <section
        id="projects"
        className="min-h-screen bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Projects
          </h2>
        </div>
      </section>

      <section
        id="experience"
        className="min-h-screen bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Experience
          </h2>
        </div>
      </section>

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