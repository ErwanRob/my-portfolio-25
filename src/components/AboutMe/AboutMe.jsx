import styles from "./AboutMe.module.scss";
import portrait from "../../assets/img/portrait.jpg";
import MaskText from "../MaskText/MaskText";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const phrasesHeadline = ["HI, I’M A PASSIONATE FRONT-END DEVELOPER,"];
const phrasesHeadlineBis = [
  "DEDICATED TO CRAFTING ENGAGING AND USER-FRIENDLY WEBSITES.",
];
const phraseBuildSomething = ["LET’S CREATE SOMETHING TOGETHER."];
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
  const canvasRef = useRef(null);
  const prevPosition = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const initializeCanvas = () => {
      //Canvas drawing
      /*  ctx.fillStyle = "#1a1a1afc"; */
      /* ctx.fillStyle = "#A287f3fc"; */
      ctx.fillStyle = "#292929e1";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      //Text drawing
      ctx.font = "200 30px Inter";
      ctx.fillStyle = "#A287f3fc"; //text color
      ctx.letterSpacing = "3px";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Paint Board", canvasWidth / 2, canvasHeight / 2);
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
          drawCircle(interpolatedX, interpolatedY, 40); // Adjust radius for brush size
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
  }, []);

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
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
            }}
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
            <canvas
              ref={canvasRef}
              className={
                styles[
                  "aboutMe__container__content__portraitContainer__portraitCanvas"
                ]
              }
            >
              <p>Click</p>
            </canvas>
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

/*   
    hardcoded draw for debug
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    ctx.fill(); */
