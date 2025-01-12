import styles from "./ProgressBar.module.scss";
import { motion } from "motion/react";
const ProgressBar = (/* endDelay, totalTime */) => {
  return (
    <motion.div
      className={styles.progressBar}
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 10,
      }}
    >
      <motion.div
        className={styles["progressBar__fill"]}
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
          transformOrigin: "left",
        }}
        transition={{
          duration: 3,
          ease: [1, -0.03, 0.43, 0.97],
        }}
      ></motion.div>

      <motion.div
        className={styles["progressBar__dot"]}
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.5,
        }}
        transition={{
          duration: 3,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default ProgressBar;
