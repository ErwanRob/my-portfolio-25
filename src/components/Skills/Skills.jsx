import styles from "./Skills.module.scss";
import { SkillsList } from "./SkillsList";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { backOut } from "motion";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  //MediaQuery
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");

  //custom trigger for animation
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "300px 0px 300px 0px",
    triggerOnce: isXSmall || isSmall || isMedium,
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
    <div className={styles.skills} id="skills">
      <div className={styles["skills__container"]}>
        <h3 className={styles["skills__container__title"]}>
          {t("skills.sectionTitle")}
        </h3>
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
    </div>
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
