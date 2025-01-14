import styles from "./AboutMe.module.scss";
import portrait from "../../assets/img/profilp/img5.jpg";
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
        <motion.div
          className={styles["aboutMe__container__midWrapper"]}
          initial={{ x: "-2rem" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className={styles["aboutMe__container__midWrapper__cardTitle"]}
            initial={{ y: "-1rem" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ABOUT ME
          </motion.h3>
          <div className={styles["aboutMe__container__midWrapper__profil"]}>
            <div
              className={
                styles["aboutMe__container__midWrapper__profil__imgContainer"]
              }
            >
              <img
                className={
                  styles[
                    "aboutMe__container__midWrapper__profil__imgContainer__img"
                  ]
                }
                src={portrait}
                alt="selfPortrait"
              />
            </div>
          </div>
          <div className={styles["aboutMe__container__midWrapper__info"]}>
            <div
              className={
                styles["aboutMe__container__midWrapper__info__titleTogether"]
              }
            >
              <MaskText
                phrases={phraseBuildSomething}
                variant="tertiary"
                align="right"
              />
            </div>
            <div
              className={
                styles["aboutMe__container__midWrapper__info__masksWrapper"]
              }
            >
              {/*  <MaskText phrases={phrases2} variant="secondary" align="left" />
              <MaskText phrases={phrases3} variant="secondary" align="left" />
              <MaskText phrases={phrases4} variant="secondary" align="left" /> */}
              <MaskText phrases={phrases1} variant="secondary" align="left" />
              <MaskText phrases={phrases2} variant="secondary" align="left" />
              <MaskText phrases={phrases3} variant="secondary" align="left" />
              <MaskText phrases={phrases4} variant="secondary" align="left" />
              <MaskText phrases={phrases5} variant="secondary" align="left" />
              <MaskText phrases={phrases6} variant="secondary" align="left" />
              <MaskText phrases={phrases7} variant="secondary" align="left" />
              <MaskText phrases={phrases8} variant="secondary" align="left" />
            </div>
          </div>
        </motion.div>
        <div className={styles["aboutMe__container__bottomLine"]}></div>
      </div>
    </div>
  );
};

export default AboutMe;

{
  /* <p className={styles["aboutMe__info__masksWrapper__paraOne"]}>
            <span
              className={
                styles["aboutMe__info__masksWrapper__paraOne__hLine"]
              }
            >
              Hi, I’m a passionate front-end developer <br />
              dedicated to crafting engaging and <br />
              user-friendly websites.
            </span>
            <br />I specialize in blending clean, modern design with seamless
            functionality to deliver solutions that are not only visually
            appealing but also highly effective.
          </p>
          <p className={styles["aboutMe__info__masksWrapper__paraTwo"]}>
            Whether it’s building responsive layouts, creating intuitive user
            interfaces, or optimizing websites for performance and SEO, my focus
            is on delivering measurable value to my clients.
            <br />I take pride in solving problems and turning ideas into
            reality with precision and creativity.
          </p>
          <p className={styles["aboutMe__info__masksWrapper__paraThree"]}>
            I’m committed to staying at the forefront of web development
            practices and helping clients achieve their vision with impactful,
            efficient, and scalable web solutions.
            <span
              className={
                styles["aboutMe__info__masksWrapper__paraThree__hLine"]
              }
            >
              Let’s create something amazing together.
            </span>
          </p> */
}
