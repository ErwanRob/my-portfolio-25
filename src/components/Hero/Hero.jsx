import styles from "./Hero.module.scss";
import HeadLine from "./HeadLine/HeadLine";
import SubLine from "./SubLine/SubLine";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import ParticlesComponent from "../ParticlesComponent";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Hero = ({ toggleSettings }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);

  // Delay mounting of ParticlesComponent by 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRenderParticles(true);
      console.log("Hero Particles rendered");
    }, 2700); // Timeout to match Preloader animation end. and not impact load time

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  const particlesWrapperRef = useRef(null);
  const particlesInView = useInView(particlesWrapperRef);

  return (
    <div className={styles.hero} id="hero">
      <motion.div
        ref={particlesWrapperRef}
        className="particles-wrapper"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 2.7,
          type: "linear",
        }}
      >
        {shouldRenderParticles && particlesInView && (
          <ParticlesComponent
            id="tsparticlesHero"
            direction="none"
            speed={0.75}
          />
        )}
      </motion.div>
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
