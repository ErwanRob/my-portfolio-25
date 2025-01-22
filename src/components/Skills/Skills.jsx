import styles from "./Skills.module.scss";
import { SkillsList } from "./SkillsList";
import MagneticPull from "../MagneticPull";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { backOut } from "motion";

/* const MagnetComponentClassName = styles["skills__container__grid__item__logo"]; */

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "150px 0px 100px 0px",
    /* triggerOnce: true, */
  });

  const animation = {
    initial: { y: "150%", opacity: 0 },
    enter: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: backOut,
        delay: 0.01 + i * 0.025,
      },
    }),
  };

  return (
    <div className={styles.skills} id="skills">
      <div className={styles["skills__container"]}>
        <h3 className={styles["skills__container__title"]}>Skills & Tools</h3>
        <div className={styles["skills__container__grid"]}>
          {SkillsList.map((skill, index) => (
            <motion.div
              className={styles["skills__container__grid__item"]}
              ref={ref}
              key={index}
              custom={index}
              variants={animation}
              initial={{ y: "150%", opacity: 0 }}
              animate={inView ? "enter" : "initial"}
            >
              <MagneticPull>
                <div className={styles["skills__container__grid__item__logo"]}>
                  {skill.svgContent}
                </div>
              </MagneticPull>
              <p className={styles["skills__container__grid__item__name"]}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
