import "./i18n";
import { ReactLenis } from "lenis/react";
import { useCallback, useMemo } from "react";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ReloadHandler from "./components/common/ReloadHandler";
import AllMenuWrapper from "./components/common/AllMenuWrapper";

const App = () => {
  const easeOutQuint = useCallback((x) => 1 - Math.pow(1 - x, 5), []);
  const lenisOptions = useMemo(
    () => ({
      easing: easeOutQuint,
      duration: 0.75,
      wheelMultiplier: 1.5,
    }),
    [easeOutQuint]
  );

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="App">
        <ReloadHandler />
        <AllMenuWrapper />
        <main className="content-wrapper">
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
