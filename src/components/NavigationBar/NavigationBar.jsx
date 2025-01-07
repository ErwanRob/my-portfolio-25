import styles from "./NavigationBar.module.scss";
import { useLenis } from "lenis/react";

const NavigationBar = () => {
  const lenis = useLenis();

  const handleScroll = (target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5), // easeOutQuint
        offset: 0, // adjust if needed
        lock: true, // lock scrolling until animation completes
      });
    }
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles["nav__items"]}
        onClick={() => handleScroll("#hero")}
      >
        Home
      </button>
      <button
        className={styles["nav__items"]}
        onClick={() => handleScroll("#about-me")}
      >
        About Me
      </button>
      <button
        className={styles["nav__items"]}
        onClick={() => handleScroll("#projects")}
      >
        Projects
      </button>
      <button
        className={styles["nav__items"]}
        onClick={() => handleScroll("#skills")}
      >
        Skills
      </button>
      <button
        className={styles["nav__items"]}
        onClick={() => handleScroll("#contact")}
      >
        Contact
      </button>
    </nav>
  );
};

export default NavigationBar;
