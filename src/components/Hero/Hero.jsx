import styles from "./Hero.module.scss";
import PropTypes from "prop-types";
import HeadLine from "../HeadLine/HeadLine";
import Button from "../Button/Button";

const Hero = ({ toggleSettings }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  /* const [isPreloading, setIsPreloading] = useState(true); */

  return (
    <div className={`section ${styles.hero} `} id="hero">
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__container"]}>
          <HeadLine />
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
  toggleSettings: PropTypes.func.isRequired, // Text is required and should be a string
};

/* initial={{
  scaleX: 10,
  width: "10rem",
  transformOrigin: "right",
}}
animate={{
   width: "1rem",
  scaleX: 0.5,
}}
transition={{ duration: 1 }} 


initial={
              {
                 x: 100,
              }
            }
            animate={
              {
                 x: 0,
              }
            }
            transition={{ duration: 0.6 }}


*/
/* <motion.div
              initial={{
                width: "100%",
                x: 0,
              }}
              animate={{
                width: 0,
                x: "-1rem",
              }}
              transition={{
                duration: 0.3,
                delay: 1,
                ease: backIn,
              }}
              className={
                styles["hero__content__container__titleWrapper__international"]
              }
            >
              #Hello
            </motion.div> */
