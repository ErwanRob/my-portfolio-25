import { useEffect, useState } from "react";
import styles from "./PreLoader.module.scss";
import { motion, AnimatePresence } from "motion/react";
import { backIn } from "motion";

const words = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Hallo",
];

const PreLoader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
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
        delay: 5,
        ease: backIn,
      }}
      className={styles.preLoader}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentWordIndex} // Reinitialize animation when word changes
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className={styles["preLoader__txt"]}
        >
          {words[currentWordIndex]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default PreLoader;
