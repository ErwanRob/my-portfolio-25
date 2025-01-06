import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={`section ${styles.hero}`}>
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
        <div className="hero__content__buttonWrapper">
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
            onClick={handleClick}
            variant="secondary"
            disabled={true}
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
