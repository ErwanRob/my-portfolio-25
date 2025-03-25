import PropTypes from "prop-types";
import styles from "./Settings.module.scss";
import { motion } from "motion/react";

const settingsList = [
  {
    title: "Language",
    icon: "🌐",
    description: "Select your prefered language.",
  },
  {
    title: "Animations",
    icon: "🎬",
    description: "Enable/Disable all animations.",
  },
  {
    title: "Light mode",
    icon: "🌞",
    description: "Turn the light on, or off.",
  },
  {
    title: "ColorBlind",
    icon: "🌗",
    description: "Enable/Disable color blind mode.",
  },
  {
    title: "High Contrast",
    icon: "🌗",
    description: "Enable/Disable high contrast mode.",
  },
];

const Settings = ({ isSettingsVisible, toggleSettings }) => {
  return (
    <div
      className={`${styles.settings} ${
        isSettingsVisible ? styles.fadein : styles.fadeout
      }`}
    >
      <motion.div
        className={styles["settings__close"]}
        onClick={toggleSettings}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.25, color: "#8b5cf6" }}
        whileTap={{ scale: 0.8, color: "#fff" }}
        transition={{ duration: 0.15, ease: "backOut" }}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </motion.div>
      <p className={styles["settings__disclaimer"]}>
        These settings are not available yet.
      </p>
      <p className={styles["settings__disclaimer"]}>They are features which</p>
      <p className={styles["settings__disclaimer"]}>
        could be added in the future
      </p>

      <ul className={styles["settings__list"]}>
        {settingsList.map((item, index) => (
          <li className={styles["settings__list__item"]} key={index}>
            <p
              /*   href="#" */
              className={styles["settings__list__item__title"]}
              /*     initial={{ scale: 1 }} */
              /* whileHover={{ scaleX: 1.05, color: "#8b5cf6" }} */
              /*   whileHover={{ scaleX: 1.05 }}
              transition={{ duration: 0.05, ease: "easeInOut" }} */
            >
              {item.icon}
              {item.title}
            </p>
            <p className={styles["settings__list__item__sub"]}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Settings;

Settings.propTypes = {
  isSettingsVisible: PropTypes.bool.isRequired,
  toggleSettings: PropTypes.func.isRequired,
};

{
  /* These will not be 'a' tag as they all will serve different purposes */
}
{
  /* <a className={styles["settings__list__items"]} href="#">
Language (T.B.D)
</a>
<p className={styles["settings__list__sub"]}>
Select your prefered language.
</p>
<a className={styles["settings__list__items"]} href="#">
Animations (T.B.D)
</a>
<p className={styles["settings__list__sub"]}>
Enable/Disable all animations.
</p>
<a className={styles["settings__list__items"]} href="#">
Light mode (T.B.D)
</a>
<p className={styles["settings__list__sub"]}>
Turn the light on, or off.
</p>
<a className={styles["settings__list__items"]} href="#">
ColorBlind (T.B.D)
</a>
<p className={styles["settings__list__sub"]}>
Enable/Disable color blind mode.
</p>
<a className={styles["settings__list__items"]} href="#">
High Contrast(T.B.D)
</a>
<p className={styles["settings__list__sub"]}>
Enable/Disable high contrast mode.  </p> */
}
