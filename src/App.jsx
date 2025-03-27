import "./i18n";
import { ReactLenis } from "lenis/react";
import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ReloadHandler from "./components/common/ReloadHandler";
import AllMenuWrapper from "./components/common/AllMenuWrapper";

const App = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang || i18n.language;
  }, [lang, i18n]);

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
