import ParticlesComponent from "./components/ParticlesComponent";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="particles-wrapper">
        <ParticlesComponent />
      </div>
      <div className="content-wrapper">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
