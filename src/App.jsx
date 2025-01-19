import ParticlesComponent from "./components/ParticlesComponent";
import Options from "./components/Options/Options";
import NavigationBar from "./components/SideMenuNavigation/SideMenuNavigation";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";

const App = () => {
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  return (
    <ReactLenis
      root
      options={{
        /* lerp: 0.1, */
        easing: function easeOutQuint(x) {
          return 1 - Math.pow(1 - x, 5);
        },
        duration: 0.75,
        wheelMultiplier: 1.5,
        /* infinite: true, */
      }}
    >
      <div className="App">
        <motion.div
          className="particles-wrapper"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
            delay: 3.2,
            type: "linear",
          }}
        >
          <ParticlesComponent />
        </motion.div>
        <div className="header-wrapper">
          <Header />
        </div>
        <div
          className={`options-wrapper ${isSettingsVisible ? "visible" : " "}`}
        >
          <Options isSettingsVisible={isSettingsVisible} />
        </div>
        <div className="sideMenuNavigation-wrapper">
          <NavigationBar />
        </div>
        <div className="content-wrapper">
          <Hero toggleSettings={toggleSettings} />
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
