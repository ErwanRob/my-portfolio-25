import { useLenis } from "lenis/react";
import styles from "./Header.module.scss";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Header = ({ toggleSettings }) => {
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

  const [hidden, setHidden] = useState(true);
  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setViewPortHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous || latest < viewPortHeight) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      className={styles.header}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: -100,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <nav className={styles["header__nav"]}>
        <ul className={styles["header__nav__list"]}>
          <li className={styles["header__nav__list__item"]}>
            <a
              href="#hero"
              className={styles["header__nav__list__item__link"]}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#hero");
              }}
            >
              Home
            </a>
          </li>
          <li className={styles["header__nav__list__item"]}>
            <a
              href="#about-me"
              className={styles["header__nav__list__item__link"]}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#about-me");
              }}
            >
              About
            </a>
          </li>
          <li className={styles["header__nav__list__item"]}>
            <a
              href="#projects"
              className={styles["header__nav__list__item__link"]}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className={styles["header__nav__list__item"]}>
            <a
              href="#skills"
              className={styles["header__nav__list__item__link"]}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className={styles["header__nav__list__item"]}>
            <a
              href="#contact"
              className={styles["header__nav__list__item__link"]}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className={styles["header__nav__settingsBtn"]}>
          <FontAwesomeIcon icon={faGear} onClick={toggleSettings} size="lg" />
        </div>
      </nav>
    </motion.div>
  );
};

Header.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
};
export default Header;
