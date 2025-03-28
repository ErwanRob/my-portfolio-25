import styles from "./AboutMe.module.scss";
import portrait from "../../assets/img/portrait/portrait.png";

import MaskText from "../MaskText/MaskText";
import { motion } from "framer-motion";
import useMediaQuery from "../Hooks/useMediaQuery";

import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  //MediaQuery
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isXLarge = useMediaQuery("(max-width: 1536px)");

  //Side Title
  const sectionTitle = t("aboutMe.sectionTitle", { returnObjects: true });
  //All phrases in array
  const phrasesHeadline = t("aboutMe.phrasesHeadline", { returnObjects: true });
  const phrasesHeadlineBis = t("aboutMe.phrasesHeadlineBis", {
    returnObjects: true,
  });
  const phraseBuildSomething = t("aboutMe.phraseBuildSomething", {
    returnObjects: true,
  });
  const pPhrasesList = t("aboutMe.pPhrasesList", { returnObjects: true });
  const allPhrases = t("aboutMe.allPhrases", { returnObjects: true });
  const allHeadPhrases = t("aboutMe.allHeadPhrases", { returnObjects: true });

  return (
    <div className={styles.aboutMe} id="about-me">
      <div className={styles["aboutMe__container"]}>
        <div className={styles["aboutMe__container__headLine"]}>
          {isSmall ? (
            <MaskText phrases={allHeadPhrases} variant="primary" align="left" />
          ) : (
            <>
              <MaskText
                phrases={phrasesHeadline}
                variant="primary"
                align="left"
              />
              <MaskText
                phrases={phrasesHeadlineBis}
                variant="primary"
                align="right"
              />
            </>
          )}
        </div>
        <motion.h3
          className={styles["aboutMe__container__title"]}
          initial={{ y: "-5rem" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          key={isSmall ? "sm" : "default"}
          viewport={{ once: isSmall }}
        >
          <ul className={styles["aboutMe__container__title__lList"]}>
            {sectionTitle.map((letter, index) => (
              <li
                key={index}
                className={
                  letter === "."
                    ? styles["aboutMe__container__title__lList__letter__notV"]
                    : styles["aboutMe__container__title__lList__letter"]
                }
              >
                {letter}
              </li>
            ))}
          </ul>
        </motion.h3>
        <div className={styles["aboutMe__container__portrait"]}>
          {isXLarge && !isSmall && !isXSmall ? (
            <div className={styles["aboutMe__container__portrait__subLine"]}>
              <MaskText
                phrases={phraseBuildSomething}
                variant="tertiary"
                align="right"
              />
            </div>
          ) : null}
          <motion.div
            className={styles["aboutMe__container__portrait__imgWrapper"]}
            initial={{
              opacity: "var(--initial-imgP-opacity)",
              x: "var(--initial-imgP-y)",
            }}
            whileInView={{
              opacity: "var(--whileInView-imgP-opacity)",
              x: "var(--whileInView-imgP-y)",
            }}
            transition={{
              duration: 0.5,
            }}
            key={isSmall ? "sm" : "default"}
            viewport={{ once: isSmall }}
          >
            <img
              className={
                styles["aboutMe__container__portrait__imgWrapper__img"]
              }
              src={portrait}
              alt="selfPortrait"
            />
          </motion.div>
        </div>
        <div className={styles["aboutMe__container__description"]}>
          <div
            className={
              styles["aboutMe__container__description__maskTextWrapper"]
            }
          >
            {isXLarge ? (
              <MaskText phrases={allPhrases} variant="secondary" align="left" />
            ) : (
              <>
                {pPhrasesList.map((phrase, i) => (
                  <MaskText
                    key={i}
                    phrases={[phrase.phrase]}
                    variant={phrase.variant}
                    align={phrase.align}
                  />
                ))}
              </>
            )}
          </div>
          {isXLarge && !isSmall && !isXSmall ? null : (
            <div className={styles["aboutMe__container__description__subLine"]}>
              <MaskText
                phrases={phraseBuildSomething}
                variant="tertiary"
                align="right"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
