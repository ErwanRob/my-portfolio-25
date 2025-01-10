import styles from "./HeadLine.module.scss";
import PreLoader from "../PreLoader/PreLoader";
import { motion } from "motion/react";
import { easeInOut, spring } from "motion";
/* import { useState } from "react"; */

const HeadLine = () => {
  return (
    <div className={styles.headLine}>
      <motion.h1
        initial={{
          x: "2rem",
          opacity: 0,
        }}
        animate={{
          x: "0rem",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1.3,
          ease: easeInOut,
          type: spring,
        }}
        className={styles["headLine__title"]}
      >
        Welcome.
      </motion.h1>
      <span className={styles["headLine__blinkingCursor"]}>|</span>
      <PreLoader />
    </div>
  );
};

export default HeadLine;
