import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
