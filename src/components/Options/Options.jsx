import PropTypes from "prop-types";
import styles from "./Options.module.scss";

const Options = ({ isSettingsVisible }) => {
  return (
    <nav
      className={`${styles.options} ${
        isSettingsVisible ? styles.fadein : styles.fadeout
      }`}
    >
      {/* These will not be 'a' tag as they all will serve a special action */}
      <a className={styles["options__items"]} href="#">
        Language (T.B.D)
      </a>
      <p className={styles["options__sub"]}>Select your prefered language.</p>
      <a className={styles["options__items"]} href="#">
        Animations (T.B.D)
      </a>
      <p className={styles["options__sub"]}>Enable/Disable all animations.</p>
      <a className={styles["options__items"]} href="#">
        Light mode (T.B.D)
      </a>
      <p className={styles["options__sub"]}>Turn the light on, or off.</p>
      <a className={styles["options__items"]} href="#">
        ColorBlind (T.B.D)
      </a>
      <p className={styles["options__sub"]}>Enable/Disable color blind mode.</p>
      <a className={styles["options__items"]} href="#">
        High Contrast(T.B.D)
      </a>
      <p className={styles["options__sub"]}>
        Enable/Disable high contrast mode.
      </p>
    </nav>
  );
};
export default Options;

Options.propTypes = {
  isSettingsVisible: PropTypes.bool.isRequired,
};
