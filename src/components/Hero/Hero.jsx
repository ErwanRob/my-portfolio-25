import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Hero = ({ toggleSettings }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={`section ${styles.hero} `} id="hero">
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__titleWrapper"]}>
          <h1 className={styles["hero__content__titleWrapper__title"]}>
            Welcome.
          </h1>
          <span
            className={styles["hero__content__titleWrapper__blinkingCursor"]}
          >
            |
          </span>
        </div>
        <div className={styles["hero__content__buttonWrapper"]}>
          <Button
            text="Discover my work"
            onClick={handleClick}
            variant="primary"
          ></Button>
          <Button
            text="Feedbacks"
            onClick={handleClick}
            variant="secondary"
          ></Button>
          <Button
            text="Settings"
            onClick={toggleSettings}
            variant="secondary"
            disabled={false}
          ></Button>
          <Button
            text="Hire me"
            onClick={handleClick}
            variant="tertiary"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  toggleSettings: PropTypes.func.isRequired, // Text is required and should be a string
};
