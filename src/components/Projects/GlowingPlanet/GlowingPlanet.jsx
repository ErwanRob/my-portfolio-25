import { motion } from "motion/react";
import styles from "./GlowingPlanet.module.scss";
import { backOut, easeIn, easeInOut } from "motion";
import { useState } from "react";

const GlowingPlanet = () => {
  const [isBlackHole, setIsBlackHole] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsBlackHole(!isBlackHole);
    setIsHovering(false); // hover resets when clicking
  };

  const handleHoverStart = () => {
    if (!isBlackHole) {
      setIsHovering(true);
    }
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
  };

  /* const handleClose = () => {
    setIsBlackHole(false);
  }; */

  return (
    <div className={styles.glowingPlanet}>
      <motion.div
        className={styles["glowingPlanet__container"]}
        initial={{ y: "20rem", x: "20rem", opacity: 0, rotate: -960 }}
        //InView
        whileInView={
          !isBlackHole
            ? {
                y: "0",
                x: "0",
                opacity: 1,
                rotate: 0,
                transition: { duration: 1.5, ease: backOut },
              }
            : {} // Disable WhileInView animation if black hole is active
        }
        //Animate
        animate={
          isBlackHole
            ? {
                scale: 16,
                rotate: -960,
                backgroundColor: "var(--dark-grey)",
                y: "0",
                x: "0",
                opacity: 1,
                transition: {
                  backgroundColor: {
                    duration: 0.25,
                    ease: easeIn,
                  },
                  duration: 0.75,
                  ease: "easeInOut",
                },
              } // Animate scale if black hole turns active
            : {}
        }
        //Hover
        whileHover={
          isHovering
            ? {
                scale: 1.2,
                rotate: 720,
                backgroundColor: "var(--dark-grey)",
                transition: {
                  backgroundColor: {
                    duration: 0.75,
                    ease: easeInOut,
                  },
                  duration: 0.75,
                  ease: "easeInOut",
                },
              }
            : {} // Disable WhileHover animation if black hole is active
        }
        //general transition
        //on click
        onClick={handleClick}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <div className={styles["glowingPlanet__container__orb"]} />
      </motion.div>
    </div>
  );
};

export default GlowingPlanet;
