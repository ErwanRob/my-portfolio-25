import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles["nav__items"]} href="#hero">
        Home
      </a>
      <a className={styles["nav__items"]} href="#about-me">
        About Me
      </a>
      <a className={styles["nav__items"]} href="#projects">
        Projects
      </a>
      <a className={styles["nav__items"]} href="#skills">
        Skills
      </a>
      <a className={styles["nav__items"]} href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
