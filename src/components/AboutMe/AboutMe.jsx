import styles from "./AboutMe.module.scss";
import portrait from "../../assets/img/portrait.jpg";
import MaskText from "../MaskText/MaskText";
import { motion } from "framer-motion";

/* const phrasesHeadline = ["Hi, I’m a passionate front-end developer,"];
const phrasesHeadlineBis = [
  "dedicated to crafting engaging and user-friendly websites.",
]; */
const phrasesHeadline = ["HI, I’M A PASSIONATE FRONT-END DEVELOPER,"];
const phrasesHeadlineBis = [
  "DEDICATED TO CRAFTING ENGAGING AND USER-FRIENDLY WEBSITES.",
];

/* const phraseBuildSomething = ["Let’s create something together."]; */
const phraseBuildSomething = ["LET’S CREATE SOMETHING TOGETHER."];

/* const phrases2 = [
  "I specialize in blending clean, modern design with seamless functionality",
  " to deliver solutions that are not only visually appealing but also highly effective.",
];
const phrases3 = [
  "Whether it’s building responsive layouts, creating intuitive user interfaces,",
  "optimizing websites for performance and SEO, my focus on delivering",
  "measurable value to my clients. I take pride in solving problems and",
  "turning ideas into reality with precision and creativity.",
];
const phrases4 = [
  "I’m committed to staying at the forefront of web development",
  "practices and helping clients achieve their vision with impactful,",
  "efficient, and scalable web solutions.",
]; */
/* const spreadPhrase5 = phrases5.flatMap((phrase) => phrase.split(" ")); */

const phrases1 = [
  "I specialize in blending clean, modern design with seamless functionality",
];
const phrases2 = [
  "to deliver solutions that are not only visually appealing but also highly effective.",
];

const phrases3 = [
  "Whether it’s building responsive layouts, creating intuitive user interfaces,",
];
const phrases4 = [
  "or optimizing websites for performance and SEO, my focus is on delivering",
];

const phrases5 = [
  "measurable value to my clients. I take pride in solving problems and turning",
];
const phrases6 = ["ideas into reality with precision and creativity."];

const phrases7 = [
  "I’m committed to staying at the forefront of web development practices,",
];
const phrases8 = [
  "helping clients achieve their vision with impactful, efficient, scalable solutions.",
];

const AboutMe = () => {
  return (
    <div className={`section ${styles.aboutMe}`} id="about-me">
      <div className={styles["aboutMe__container"]}>
        <div className={styles["aboutMe__container__headLine"]}>
          <MaskText phrases={phrasesHeadline} variant="primary" align="left" />
          <MaskText
            phrases={phrasesHeadlineBis}
            variant="primary"
            align="right"
          />
        </div>

        <motion.h3
          className={styles["aboutMe__container__title"]}
          initial={{ y: "-5rem" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
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

        <div className={styles["aboutMe__container__content"]}>
          <motion.div
            className={styles["aboutMe__container__content__portraitContainer"]}
            initial={{ y: "5rem" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              className={
                styles[
                  "aboutMe__container__content__portraitContainer__portraitImg"
                ]
              }
              src={portrait}
              alt="selfPortrait"
            />
          </motion.div>
          <div className={styles["aboutMe__container__content__description"]}>
            <div
              className={
                styles[
                  "aboutMe__container__content__description__maskTextWrapper"
                ]
              }
            >
              <MaskText phrases={phrases1} variant="secondary" align="left" />
              <MaskText phrases={phrases2} variant="secondary" align="left" />
              <MaskText phrases={phrases3} variant="secondary" align="left" />
              <MaskText phrases={phrases4} variant="secondary" align="left" />
              <MaskText phrases={phrases5} variant="secondary" align="left" />
              <MaskText phrases={phrases6} variant="secondary" align="left" />
              <MaskText phrases={phrases7} variant="secondary" align="left" />
              <MaskText phrases={phrases8} variant="secondary" align="left" />
            </div>
            <div
              className={
                styles["aboutMe__container__content__description__subLine"]
              }
            >
              <MaskText
                phrases={phraseBuildSomething}
                variant="tertiary"
                align="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
