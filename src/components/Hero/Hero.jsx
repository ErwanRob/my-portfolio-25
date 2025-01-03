import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={styles.hero}>
      <div className={styles["hero__content"]}>
        <h1 className={styles["hero__content__title"]}>Welcome.</h1>
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
          disabled="true"
        ></Button>
      </div>
    </div>
  );
};

export default Hero;
