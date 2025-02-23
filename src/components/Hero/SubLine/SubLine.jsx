import { backOut } from "motion";
import styles from "./SubLine.module.scss";
import { motion } from "motion/react";

const Subline = () => {
  return (
    <motion.div
      className={styles.subLine}
      initial={{
        display: "none",
        height: 0,
        opacity: 0,
      }}
      animate={{
        display: "flex",
        height: "5rem",
        opacity: 1,
      }}
      transition={{
        delay: 2.7, // blinkingCursorDelay (slashleft) + 0.2sec
        duration: 0.15,
        ease: backOut,
      }}
    >
      {/*   <p className={styles["subLine__iam"]}>I`m</p> */}
      <h2 className={styles["subLine__name"]}>Erwan Robin</h2>
      <h2 className={styles["subLine__hobbie"]}>Front-End developper</h2>
    </motion.div>
  );
};

export default Subline;
