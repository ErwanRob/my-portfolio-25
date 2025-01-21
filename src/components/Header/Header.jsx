import { useLenis } from "lenis/react";
import styles from "./Header.module.scss";

const Header = () => {
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
    <header className={styles.header}>
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
      </nav>
    </header>
  );
};

export default Header;
