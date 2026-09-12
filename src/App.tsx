import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-950 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
