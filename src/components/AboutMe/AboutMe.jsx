import styles from "./AboutMe.module.scss";
import portrait from "../../assets/img/portrait.jpg";
import MaskText from "../MaskText/MaskText";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
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
  const canvasRef = useRef(null);
  const prevPosition = useRef(null);

  useEffect(() => {
    if (isXSmall) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const initializeCanvas = () => {
      ctx.fillStyle = "#29292931";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      //Text drawing
      ctx.font = "100 24px Inter";
      ctx.fillStyle = "#A287f3fc"; //text color
      ctx.letterSpacing = "3px";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Paint", canvasWidth / 2, canvasHeight / 1.05);
      ctx.globalCompositeOperation = "destination-out";
    };

    // Linear interpolation function for smoothing
    const lerp = (start, end, t) => start * (1 - t) + end * t;
    //Function to erase with circle brush
    const drawCircle = (x, y, radius) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (prevPosition.current) {
        const { x: prevX, y: prevY } = prevPosition.current;
        const distance = Math.hypot(x - prevX, y - prevY);
        const numSteps = Math.ceil(distance / 5); // Adjust 5 for brush density

        for (let i = 0; i < numSteps; i++) {
          const t = i / numSteps;
          const interpolatedX = lerp(prevX, x, t);
          const interpolatedY = lerp(prevY, y, t);
          drawCircle(interpolatedX, interpolatedY, 60); // Adjust radius for brush size
        }
      }
      prevPosition.current = { x, y };
    };

    const handleMouseUp = () => {
      prevPosition.current = null; // Reset on mouse up
    };

    // Initialize canvas on first load
    initializeCanvas();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isXSmall]);

  return (
    <div className={styles.aboutMe} id="about-me">
      <div className={styles["aboutMe__container"]}>
        <div className={styles["aboutMe__container__headLine"]}>
          {isXSmall ? (
            <p>{allHeadPhrases}</p>
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

        <div className={styles["aboutMe__container__content"]}>
          <motion.div
            className={styles["aboutMe__container__content__portraitContainer"]}
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <div
              className={
                styles[
                  "aboutMe__container__content__portraitContainer__imgWrapper"
                ]
              }
            >
              <img
                className={
                  styles[
                    "aboutMe__container__content__portraitContainer__imgWrapper__img"
                  ]
                }
                src={portrait}
                alt="selfPortrait"
              />
              <canvas
                ref={canvasRef}
                className={
                  styles[
                    "aboutMe__container__content__portraitContainer__imgWrapper__canvas"
                  ]
                }
              />
            </div>
          </motion.div>
          <div className={styles["aboutMe__container__content__description"]}>
            <div
              className={
                styles[
                  "aboutMe__container__content__description__maskTextWrapper"
                ]
              }
            >
              {isXSmall ? (
                <p>{allPhrases}</p>
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
