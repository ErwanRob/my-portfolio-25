import styles from "./HeadLine.module.scss";
import PreLoader from "../../PreLoader/PreLoader";
import { motion } from "motion/react";
import { backIn, easeInOut, spring } from "motion";
import { useState } from "react";

const HeadLine = () => {
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
    <div className={styles.headLine}>
      <motion.h1
        className={styles["headLine__title"]} //Welcome animation
        initial={{
          x: "2rem",
          opacity: 0,
        }}
        animate={{
          x: "-10.25rem",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: isPreLoading ? totalTime + welcomeDelay : 0,
          ease: easeInOut,
          type: spring,
        }}
      >
        Welcome.
      </motion.h1>
      <motion.span
        className={styles["headLine__blinkingCursor"]}
        initial={{ x: 0 }}
        animate={{ x: "-14.5rem" }}
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
    </div>
  );
};

export default HeadLine;
