import styles from "./MaskText.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const MaskText = ({ phrases, variant = "primary", align = "left" }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-100px 0px -100px 0px",
    /* triggerOnce: true, */
  });
  //Base class and variants modifiers to keep control of base styles anyways.
  const alignmentClass = styles[`maskText--${align}`];
  const maskVariantClass = styles[`maskText--${variant}`];
  const baseLineMaskClass = styles.maskText__lineMask;
  const lineMaskVariantClass = styles[`maskText__lineMask--${variant}`];
  const basePClass = styles.maskText__lineMask__p;
  const pVariantClass = styles[`maskText__lineMask__p--${variant}`];

  const animation = {
    initial: { y: "150%", opacity: 0 },
    enter: (i) => ({
      y: "0%",
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
  prevPhrases: PropTypes.arrayOf(PropTypes.string),
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "danger"]),
  align: PropTypes.oneOf(["center", "left", "right"]),
};

/*
props
prevPhrases = [""], 

animation value:
 delay: 0.05 + (prevPhrases.length - 1) * 0.075  + i * 0.075,
 
 */

/* 
  console.log(" Check in View " + inView);
  console.log("Threshold:", 0.75); */

/* import { useEffect, useState, useRef } from "react";

const ManualInView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection ratio:", entry.intersectionRatio);
        setIsVisible(entry.intersectionRatio >= 0.75); // Use threshold of 0.75
      },
      { threshold: 0.75 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ height: "300px", background: "lightblue" }}>
        Observe Me
      </div>
      <p>{`Is visible: ${isVisible}`}</p>
    </div>
  );
};

export default ManualInView;
 */

/* 
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect());
    }
  }, [inView, ref,]);
 */

/*     
    const ref = useRef(null);
    const inView = useInView(ref, {
    threshold: 0.75,
  }); 
  */
