import styles from "./HeadLine.module.scss";
import PreLoader from "../../PreLoader/PreLoader";
import { motion } from "motion/react";
import { backIn, easeInOut, spring } from "motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HeadLine = () => {
  const { t } = useTranslation();

  const [isPreLoading, setIsPreLoading] = useState(true);
  const [shouldRenderPreLoader, setShouldRenderPreLoader] = useState(true);
  const handlePreLoaderExit = () => {
    //callback to handle the Finished PreLoader
    setIsPreLoading(false);
    setTimeout(() => setShouldRenderPreLoader(false), preLoaderExit); //Timeout to match Preloader animation end.
  };
  const words = [
    " ",
    "Hello",
    "Hola",
    "こんにちは",
    "Guten Tag",
    "Bonjour",
    "안녕하세요",
    "Namaste",
    "Ciao",
  ];
  const wordDisplayTime = 25; // Time for each word in ms
  const wordAnimeDuration = 0.2; // Time for anim swap in SECONDS
  const endDelay = 50; // Time to pause before exiting wods panel anim in rms
  const welcomeDelay = 0.25;
  const blinkingCursorDelay = 2.5;
  const totalTime =
    words.length * (wordDisplayTime / 1000 + wordAnimeDuration) +
    endDelay / 1000; //in sec, Total time of the PreLoader Animation
  const preLoaderExit = 3000; // Delay before Preloader exit after anim end

  return (
    <motion.div
      className={styles.headLine}
      initial={{ y: "-2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: easeInOut,
      }}
    >
      <motion.h1
        className={styles["headLine__title"]} //Welcome animation
        initial={{
          x: "var(--initial-pL-x)",
          opacity: "var(--initial-pL-opacity)",
        }}
        animate={{
          x: "var(--animate-pL-x)",
          opacity: "var(--animate-pL-opacity)",
        }}
        transition={{
          duration: 0.3,
          delay: isPreLoading ? totalTime + welcomeDelay : 0,
          ease: easeInOut,
          type: spring,
        }}
      >
        {t("hero.welcome_message")}
      </motion.h1>
      <motion.span
        className={styles["headLine__blinkingCursor"]}
        initial={{ x: "var(--initial-bC-x)" }}
        animate={{ x: "var(--animate-bC-x)" }}
        transition={{
          delay: blinkingCursorDelay,
          duration: 0.2,
          ease: backIn,
        }}
      >
        |
      </motion.span>
      {shouldRenderPreLoader && ( //Allow me to unmount PreLoader
        <PreLoader
          onFinish={() => handlePreLoaderExit(false)}
          words={words}
          wordDisplayTime={wordDisplayTime}
          wordAnimeDuration={wordAnimeDuration}
          endDelay={endDelay}
          totalTime={totalTime}
        />
      )}
    </motion.div>
  );
};

export default HeadLine;
