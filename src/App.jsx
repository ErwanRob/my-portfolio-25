import Settings from "./components/Settings/Settings";
import SideMenuNavigation from "./components/SideMenuNavigation/SideMenuNavigation";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "./components/Hooks/useMediaQuery";

const App = () => {
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    if (isXSmall || isSmall || isMedium) {
      setSideMenuVisible(false);
      setHeaderVisible(false);
    } else {
      setSideMenuVisible(true);
      setHeaderVisible(true);
    }
  }, [isXSmall, isSmall, isMedium]);

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };
  const toggleSideMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  };

  return (
    /* infinite: true, needed for mobile devices ? */
    /* lerp: 0.1, */
    <ReactLenis
      root
      options={{
        easing: function easeOutQuint(x) {
          return 1 - Math.pow(1 - x, 5);
        },
        duration: 0.75,
        wheelMultiplier: 1.25,
      }}
    >
      <div className="App">
        {isHeaderVisible ? (
          <div className="header-wrapper">
            <Header toggleSettings={toggleSettings} />
          </div>
        ) : null}

        <div
          className={`settings-wrapper ${isSettingsVisible ? "visible" : " "}`}
        >
          <Settings
            toggleSettings={toggleSettings}
            isSettingsVisible={isSettingsVisible}
          />
        </div>

        <div
          className={`sideMenuNavigation-wrapper ${
            isSideMenuVisible ? "visible" : ""
          }`}
        >
          <SideMenuNavigation
            isSideMenuVisible={isSideMenuVisible}
            toggleSideMenu={toggleSideMenu}
          />
        </div>

        {isXSmall || isSmall || isMedium ? (
          <div className="sideMenuNavigation-toggle">
            <button
              className={"sideMenuNavigation-toggle__btn"}
              onClick={toggleSideMenu}
              aria-label="Toggle side menu"
            >
              {isSideMenuVisible ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        ) : null}

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
