import styles from "./Skills.module.scss";
import { SkillsList } from "./SkillsList";
import MagneticPull from "../MagneticPull";

const MagnetComponentClassName = styles["skills__container__grid__item__logo"];

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
              <MagneticPull className={MagnetComponentClassName}>
                {skill.svgContent}
              </MagneticPull>
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
