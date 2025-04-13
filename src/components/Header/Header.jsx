import { useLenis } from "lenis/react";
import styles from "./Header.module.scss";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";
import useViewportHeight from "../Hooks/useViewportHeight";

const Header = ({ toggleSettings, display }) => {
  const { t } = useTranslation();
  const lenis = useLenis();

  const handleScroll = useCallback(
    (target) => {
      if (lenis) {
        lenis.scrollTo(target, {
          duration: 1,
          easing: (x) => 1 - Math.pow(1 - x, 5), // easeOutQuint
          offset: 0, // adjust if needed
          lock: true, // lock scrolling until animation completes
        });
      }
    },
    [lenis]
  );

  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();
  const viewportHeight = useViewportHeight();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous || latest < viewportHeight) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <header className={styles.headerWrapper}>
      {display ? (
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
                  aria-label="Navigate to Home section"
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
                  aria-label="Navigate to About Me section"
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
                  aria-label="Navigate to Projects section"
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
                  aria-label="Navigate to Skills section"
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
                  aria-label="Navigate to Contact section"
                >
                  {t("header.contact")}
                </a>
              </li>
            </ul>
          </motion.nav>
          <LanguageSwitcher env={"header"} />
          <div className={styles["header__settingsBtn"]}>
            <FontAwesomeIcon
              icon={faGear}
              onClick={toggleSettings}
              size="lg"
              aria-label="Open settings"
            />
          </div>
        </motion.div>
      ) : null}
    </header>
  );
};

Header.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
};
export default Header;
