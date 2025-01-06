import styles from "./Options.module.scss";

const Options = () => {
  return (
    <nav className={styles.options}>
      {/* These will not be 'a' tag as they all will serve a special action */}
      <a className={styles["options__items"]} href="#hero">
        Language
      </a>
      <p className={styles["options__sub"]}>Select your prefered language.</p>
      <a className={styles["options__items"]} href="#about-me">
        Animations
      </a>
      <p className={styles["options__sub"]}>Enable/Disable all animations.</p>
      <a className={styles["options__items"]} href="#projects">
        Light mode (W.I.P)
      </a>
      <p className={styles["options__sub"]}>Turn the light on, or off.</p>
      <a className={styles["options__items"]} href="#skills">
        ColorBlind (W.I.P)
      </a>
      <p className={styles["options__sub"]}>
        Enable/Disable all color blind mode.
      </p>
      <a className={styles["options__items"]} href="#contact">
        High Contrast(W.I.P)
      </a>
      <p className={styles["options__sub"]}>
        Enable/Disable high contrast mode.
      </p>
    </nav>
  );
};
export default Options;
