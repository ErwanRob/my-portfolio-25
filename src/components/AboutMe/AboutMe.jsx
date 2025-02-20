import styles from "./AboutMe.module.scss";
/* import portrait from "../../assets/img/portraitPROResi.jpg"; */
/* import portrait from "../../assets/img/portraitPROResi-nobgTEST.png"; */
import portrait from "../../assets/img/portrait4CroppedResi.png";

import MaskText from "../MaskText/MaskText";
import { motion } from "framer-motion";
import useMediaQuery from "../Hooks/useMediaQuery";

const phrasesHeadline = ["HI, I’M A PASSIONATE FRONT-END DEVELOPER,"];
const phrasesHeadlineBis = [
  "DEDICATED TO CRAFTING ENGAGING AND USER-FRIENDLY WEBSITES.",
];
const phraseBuildSomething = ["LET’S CREATE SOMETHING TOGETHER."];

const pPhrasesList = [
  {
    id: 1,
    phrase:
      "I specialize in blending clean, modern design with seamless functionality",
    variant: "secondary",
    align: "left",
  },
  {
    id: 2,
    phrase:
      "to deliver solutions that are not only visually appealing but also highly effective.",
    variant: "secondary",
    align: "left",
  },
  {
    id: 3,
    phrase:
      "Whether it’s building responsive layouts, creating intuitive user interfaces,",
    variant: "secondary",
    align: "left",
  },
  {
    id: 4,
    phrase:
      "or optimizing websites for performance and SEO, my focus is on delivering",
    variant: "secondary",
    align: "left",
  },
  {
    id: 5,
    phrase:
      "measurable value to my clients. I take pride in solving problems and turning",
    variant: "secondary",
    align: "left",
  },
  {
    id: 6,
    phrase: "ideas into reality with precision and creativity.",
    variant: "secondary",
    align: "left",
  },
  {
    id: 7,
    phrase:
      "I’m committed to staying at the forefront of web development practices,",
    variant: "secondary",
    align: "left",
  },
  {
    id: 8,
    phrase:
      "helping clients achieve their vision with impactful, efficient, scalable solutions.",
    variant: "secondary",
    align: "left",
  },
];

const allPhrases = [
  "  I specialize in blending clean, modern design with seamless functionality to deliver solutions that are not only visually appealing but also highly effective. Whether it’s building responsive layouts, creating intuitive user interfaces, or optimizing websites for performance and SEO, my focus is on delivering measurable value to my clients. I take pride in solving problems and turning ideas into reality with precision and creativity. I’m committed to staying at the forefront of web development practices, helping clients achieve their vision with impactful, efficient, scalable solutions.",
];

const allHeadPhrases = [
  "Hi, i'm a passionate front-end developer, dedicated to crafting engaging and user-friendly websites.",
];

const AboutMe = () => {
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  /* const isMedium = useMediaQuery("(max-width: 1024px)");
  const isLarge = useMediaQuery("(max-width: 1280px)"); */
  const isXLarge = useMediaQuery("(max-width: 1536px)");
  /*   const canvasRef = useRef(null); */

  return (
    <div className={styles.aboutMe} id="about-me">
      <div className={styles["aboutMe__container"]}>
        <div className={styles["aboutMe__container__headLine"]}>
          {isXSmall || isSmall ? (
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
          viewport={{ once: true }}
        >
          <ul className={styles["aboutMe__container__title__lList"]}>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              A
            </li>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              B
            </li>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              O
            </li>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              U
            </li>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              T
            </li>
            <li
              className={
                styles["aboutMe__container__title__lList__letter__notV"]
              }
            >
              .
            </li>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              M
            </li>
            <li className={styles["aboutMe__container__title__lList__letter"]}>
              E
            </li>
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
              y: "var(--initial-imgP-y)",
            }}
            whileInView={{
              opacity: "var(--whileInView-imgP-opacity)",
              y: "var(--whileInView-imgP-y)",
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <img
              className={
                styles["aboutMe__container__portrait__imgWrapper__img"]
              }
              src={portrait}
              alt="selfPortrait"
            />
            {/*   <canvas
              ref={canvasRef}
              className={
                styles["aboutMe__container__portrait__imgWrapper__canvas"]
              }
            /> */}
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
                {pPhrasesList.map((phrase) => (
                  <MaskText
                    key={phrase.id}
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
