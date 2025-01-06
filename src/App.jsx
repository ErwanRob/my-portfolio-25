import ParticlesComponent from "./components/ParticlesComponent";
import Options from "./components/Options/Options";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <div className="particles-wrapper">
        <ParticlesComponent />
      </div>
      <div className="options-wrapper">
        <Options />
      </div>
      <div className="navbar-wrapper">
        <NavigationBar />
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
};

export default App;

/* 

 */

{
  /*  <div className="section hero">
          <Hero />
        </div>
        <div className="section about-me">
          <AboutMe />
        </div>
        <div className="section projects">
          <Projects />
        </div>
        <div className="section skills">
          <Skills />
        </div>
        <div className="section contact">
          <Contact />
        </div> */
}
