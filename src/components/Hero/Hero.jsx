import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={styles.hero}>
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__titleWrapper"]}>
          <h1 className={styles["hero__content__titleWrapper__title"]}>
            Welcome.
            {/* <span className={styles.typingText}>Welcome.</span> */}
          </h1>
          <span
            className={styles["hero__content__titleWrapper__blinkingCursor"]}
          >
            |
          </span>
        </div>
        <div className="hero__content__buttonWrapper">
          <Button
            text="Learn more"
            onClick={handleClick}
            variant="primary"
          ></Button>
          <Button
            text="Learn more"
            onClick={handleClick}
            variant="secondary"
          ></Button>
          <Button
            text="Learn more"
            onClick={handleClick}
            variant="secondary"
            disabled={true}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
