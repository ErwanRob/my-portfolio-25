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
        wheelMultiplier: 1.25,
        /* infinite: true, needed for mobile devices ?*/
        /*  overscroll: true, */
      }}
    >
      <div className="App">
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
