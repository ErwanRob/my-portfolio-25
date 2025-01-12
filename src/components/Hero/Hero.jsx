import styles from "./Hero.module.scss";
import HeadLine from "../HeadLine/HeadLine";
import SubLine from "../SubLine/SubLine";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Hero = ({ toggleSettings }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={`section ${styles.hero} `} id="hero">
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__container"]}>
          <HeadLine />
          <SubLine />
          <div className={styles["hero__content__container__buttonWrapper"]}>
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
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
};
