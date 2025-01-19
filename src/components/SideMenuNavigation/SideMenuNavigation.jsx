import styles from "./SideMenuNavigation.module.scss";
import { useLenis } from "lenis/react";
import { easeOut } from "motion";
import { motion } from "motion/react";

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
    <motion.nav
      className={styles.nav}
      initial={{
        y: "0.5rem",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 3.2,
        ease: easeOut,
      }}
    >
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
    </motion.nav>
  );
};

export default NavigationBar;
