import styles from "./Skills.module.scss";
import { SkillsList } from "./SkillsList";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div className={`section ${styles.skills}`} id="skills">
      <div className={styles["skills__container"]}>
        <h3 className={styles["skills__container__title"]}>Skills & Tools</h3>
        <div className={styles["skills__container__grid"]}>
          {SkillsList.map((skill, index) => (
            <div
              key={index}
              className={styles["skills__container__grid__item"]}
            >
              <motion.div
                className={styles["skills__container__grid__item__logo"]}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                {skill.svgContent}
              </motion.div>
              <p className={styles["skills__container__grid__item__name"]}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
