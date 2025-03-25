import { backOut } from "motion";
import styles from "./SubLine.module.scss";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Subline = () => {
  const { t } = useTranslation();

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
      <h2 className={styles["subLine__name"]}>{t("hero.name")}</h2>
      <h2 className={styles["subLine__hobbie"]}>{t("hero.job")}</h2>
    </motion.div>
  );
};

export default Subline;
