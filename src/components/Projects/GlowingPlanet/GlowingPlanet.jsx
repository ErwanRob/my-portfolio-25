import { motion } from "motion/react";
import styles from "./GlowingPlanet.module.scss";
import { backOut } from "motion";
import { useLenis } from "lenis/react";
import PropTypes from "prop-types";

const GlowingPlanet = ({
  yTransform,
  scaleTransform,
  bgTransformBlackHole,
  spinTranformBlackHole,
}) => {
  const lenis = useLenis();

  const handleScroll = () => {
    if (lenis) {
      lenis.scrollTo("#idProject1", {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5), // easeOutQuint
        offset: 0, // Bad for responsiveness, i shall not use
        lock: false, // lock scrolling during ScrollTo animation
      });
    }
  };

  const handleClick = () => {
    handleScroll();
  };

  return (
    <motion.div
      style={{ y: yTransform, scale: scaleTransform }}
      className={styles.glowingPlanet}
    >
      <motion.div
        style={{
          backgroundColor: bgTransformBlackHole,
          rotate: spinTranformBlackHole,
        }}
        className={styles["glowingPlanet__container"]}
        initial={{
          y: "-30rem",
          x: "0rem",
          opacity: 0,
          rotate: -960,
          backgroundColor: "rgba(26, 26, 26,0)",
        }}
        whileInView={{
          y: "0rem",
          x: "0rem",
          opacity: 1,
          rotate: 1080,
          transition: { duration: 1.5, ease: backOut },
        }}
        whileHover={{
          scale: 1.2,
          rotate: 1800,
          backgroundColor: "rgba(26, 26, 26,1)",
          transition: {
            backgroundColor: {
              duration: 0.75,
              ease: "easeInOut",
            },
            scale: {
              duration: 0.25,
              ease: "easeInOut",
            },
            duration: 0.75,
            ease: "easeInOut",
          },
        }}
        onClick={handleClick}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={styles["glowingPlanet__container__orb"]} />
      </motion.div>
    </motion.div>
  );
};

export default GlowingPlanet;

GlowingPlanet.propTypes = {
  yTransform: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  scaleTransform: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  bgTransformBlackHole: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  spinTranformBlackHole: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

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
}; 

  /* const handleClose = () => {
    setIsBlackHole(false);
  }; */

/*   const handleHoverStart = () => {
    if (!isBlackHole) {
      setIsHovering(true);
    }
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
  }; */

/*   setIsBlackHole(!isBlackHole);
    setIsHovering(false);  */ // hover resets when clicking

/*   const [isBlackHole, setIsBlackHole] = useState(false);
  const [isHovering, setIsHovering] = useState(false); */
