import { useLenis } from "lenis/react";
import styles from "./Header.module.scss";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Header = ({ toggleSettings }) => {
  const { t } = useTranslation();
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

  //viewPortHeight and the useEffect is used to get the height of the viewport in order to remove the header from the first section of the page, since the first section  is 100vh height, it works as intended.
  const [hidden, setHidden] = useState(true);
  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleResize = () => setViewPortHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.nav
        className={styles["header__nav"]}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -10,
          },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          delay: 0.3,
          duration: 0.2,
          ease: "backOut",
        }}
      >
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
              {t("header.home")}
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
              {t("header.about")}
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
              {t("header.projects")}
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
              {t("header.skills")}
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
              {t("header.contact")}
            </a>
          </li>
        </ul>
      </motion.nav>
      <div className={styles["header__settingsBtn"]}>
        <FontAwesomeIcon icon={faGear} onClick={toggleSettings} size="lg" />
      </div>
    </motion.div>
  );
};

Header.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
};
export default Header;
