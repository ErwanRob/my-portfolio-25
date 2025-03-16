import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ReactLenis } from "lenis/react";
import ReloadHandler from "./components/ReloadHandler";
import AllMenuWrapper from "./components/AllMenuWrapper";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        easing: function easeOutQuint(x) {
          return 1 - Math.pow(1 - x, 5);
        },
        duration: 0.75,
        wheelMultiplier: 1.5,
      }}
    >
      <div className="App">
        <ReloadHandler />
        <AllMenuWrapper />
        <div className="content-wrapper">
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
