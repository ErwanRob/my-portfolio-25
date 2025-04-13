import styles from "./MaskText.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import useMediaQuery from "../Hooks/useMediaQuery";

const MaskText = ({ phrases, variant = "primary", align = "left" }) => {
  const isSmall = useMediaQuery("(max-width: 768px)");

  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "100px 0px 0px 0px",
    triggerOnce: isSmall,
  });
  //Base class and variants modifiers to keep control of base styles anyways.
  const alignmentClass = styles[`maskText--${align}`];
  const maskVariantClass = styles[`maskText--${variant}`];
  const baseLineMaskClass = styles.maskText__lineMask;
  const lineMaskVariantClass = styles[`maskText__lineMask--${variant}`];
  const basePClass = styles.maskText__lineMask__p;
  const pVariantClass = styles[`maskText__lineMask__p--${variant}`];

  const animation = {
    initial: { y: "-150%", x: "10%", opacity: 0 },
    enter: (i) => ({
      y: "0%",
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.05 + i * 0.075,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className={`${styles.maskText} ${alignmentClass} ${maskVariantClass}`}
    >
      {phrases.map((phrase, i) => (
        <div key={i} className={`${baseLineMaskClass} ${lineMaskVariantClass}`}>
          <motion.p
            className={`${basePClass} ${pVariantClass}`}
            custom={i}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : "initial"}
            aria-label="Animated description text"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default MaskText;

MaskText.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "danger"]),
  align: PropTypes.oneOf(["center", "left", "right"]),
};
