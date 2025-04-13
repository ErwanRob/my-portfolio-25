import { useEffect } from "react";
import { sections } from "../../config/sections";

const ReloadHandler = () => {
  useEffect(() => {
    let lastStoredSection = null;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let currentSection = null;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (
                rect.top <= window.innerHeight / 2 &&
                rect.bottom >= window.innerHeight / 2
              ) {
                currentSection = section;
                break;
              }
            }
          }

          if (currentSection && currentSection !== lastStoredSection) {
            sessionStorage.setItem("refreshMarker", currentSection);
            lastStoredSection = currentSection;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedSection = sessionStorage.getItem("refreshMarker");

    if (savedSection) {
      const targetElement = document.getElementById(savedSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with ID ${savedSection} not found.`);
      }
      sessionStorage.removeItem("refreshMarker");
    }
  }, []);

  return null;
};

export default ReloadHandler;
