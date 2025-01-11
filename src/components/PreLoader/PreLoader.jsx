import PropTypes from "prop-types";
import styles from "./PreLoader.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { backIn, spring } from "motion";

const PreLoader = ({
  onFinish,
  words,
  wordDisplayTime,
  wordAnimeDuration,
  endDelay,
  totalTime,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFirstWordVisible, setIsFirstWordVisible] = useState(true);
  const oneWordTrueTime = wordDisplayTime + wordAnimeDuration * 1000; // Total time per word (in ms)

  useEffect(() => {
    const removeFirstWord = setTimeout(() => {
      setIsFirstWordVisible(false); // Hide the fake first word when animation starts
    }, 200); // Delay in ms before the animation kicks in.
    return () => clearTimeout(removeFirstWord);
  }, []);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, oneWordTrueTime);
      return () => clearTimeout(timeout);
    } else {
      // Trigger parent onFinish after a final delay
      const finalTimeout = setTimeout(() => {
        if (onFinish) onFinish();
      }, endDelay);
      return () => clearTimeout(finalTimeout);
    }
  }, [currentWordIndex, oneWordTrueTime, endDelay, onFinish, words.length]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div // PreLoader closing animation
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
          delay: totalTime,
          ease: backIn,
        }}
        className={styles.preLoader}
      >
        <div className={styles["preLoader__puce"]}>#</div>
        <AnimatePresence mode="popLayout">
          {isFirstWordVisible ? (
            <motion.div // Words display Animation
              key={"initial-word"} //FirstWord PlaceHolder
              initial={{ y: "0" }}
              animate={{ y: "0" }}
              exit={{ y: "-200%" }}
              transition={{
                duration: wordDisplayTime,
                type: spring,
                stiffness: 1300,
                damping: 90,
                mass: 3,
              }}
              className={styles["preLoader__txtpHolder"]}
            >
              {"Hi"}
            </motion.div>
          ) : (
            <motion.div // Words display Animation
              key={currentWordIndex} // Reinitialize animation when word changes
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-200%" }}
              transition={{
                duration: wordAnimeDuration,
                type: spring,
                stiffness: 1300,
                damping: 90,
                mass: 3,
              }}
              className={styles["preLoader__txt"]}
            >
              {words[currentWordIndex]}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

PreLoader.propTypes = {
  onFinish: PropTypes.func.isRequired,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  wordDisplayTime: PropTypes.number.isRequired,
  wordAnimeDuration: PropTypes.number.isRequired,
  endDelay: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
};

export default PreLoader;
