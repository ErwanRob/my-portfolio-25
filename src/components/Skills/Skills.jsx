import styles from "./Skills.module.scss";
import { SkillsList } from "./SkillsList";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { backOut } from "motion";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import { BREAKPOINTS } from "../../config/breakpoints";

const Skills = () => {
  const { t } = useTranslation();
  //MediaQuery
  const isMedium = useMediaQuery(BREAKPOINTS.medium);

  //custom trigger for animation
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "1800px 0px 400px 0px",
    triggerOnce: isMedium,
  });

  const animation = {
    initial: { y: "150%", opacity: 0 },
    enter: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: backOut,
        delay: 0.01 + i * 0.01,
      },
    }),
  };

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles["skills__container"]}>
        <h3 className={styles["skills__container__title"]}>
          {t("skills.sectionTitle")}
        </h3>
        <div className={styles["skills__container__grid"]} role="list">
          {SkillsList.map((skill, index) => (
            <motion.div
              className={styles["skills__container__grid__item"]}
              key={index}
              custom={index}
              variants={animation}
              initial={{ y: "150%", opacity: 0 }}
              animate={inView ? "enter" : "initial"}
              role="listitem"
              aria-label={`Skill: ${skill.name}`}
            >
              <div className={styles["skills__container__grid__item__logo"]}>
                {skill.svgContent}
              </div>

              <p className={styles["skills__container__grid__item__name"]}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

{
  /*   {isXSmall ? (
                <MagneticPull>
                  <div
                    className={styles["skills__container__grid__item__logo"]}
                  >
                    {skill.svgContent}
                  </div>
                </MagneticPull>
              ) : ( 
              
              
              
            )}*/
}
