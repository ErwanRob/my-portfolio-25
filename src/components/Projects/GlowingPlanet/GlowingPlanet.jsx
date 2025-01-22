import { motion } from "motion/react";
import styles from "./GlowingPlanet.module.scss";
import { backOut } from "motion";
import { useState } from "react";
import { useLenis } from "lenis/react";

const GlowingPlanet = () => {
  const [isBlackHole, setIsBlackHole] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const lenis = useLenis();

  const handleScroll = () => {
    if (lenis) {
      lenis.scrollTo("#gallery", {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5), // easeOutQuint
        offset: 0, // might need to adjust for animation later, i'll see
        lock: false, // lock scrolling during ScrollTo animation
      });
    }
  };

  const handleClick = () => {
    setIsBlackHole(!isBlackHole);
    setIsHovering(false); // hover resets when clicking
    handleScroll();
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
                rotate: -1920,
                backgroundColor: "var(--dark-grey)",
                y: "200vh",
                x: "0",
                opacity: 1,
                transition: {
                  backgroundColor: {
                    duration: 0.1,
                    ease: "easeIn",
                  },
                  scale: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                  rotate: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 0.5,
                    ease: "easeIn",
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
                    ease: "easeInOut",
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
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={styles["glowingPlanet__container__orb"]} />
      </motion.div>
    </div>
  );
};

export default GlowingPlanet;

/* 
//Version if i need a delay on lenis scrollTo
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const handleScroll = async () => {
  if (lenis) {
    await delay(2000); 
    lenis.scrollTo("#gallery", {
      duration: 3,
      easing: (x) => 1 - Math.pow(1 - x, 5), 
      offset: -300, 
      lock: false, 
    });
  }
}; */
