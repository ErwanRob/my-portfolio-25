import styles from "./ProjectsDisplay.module.scss";

const ProjectsDisplay = () => {
  return (
    <div className={styles.projectsDisplay}>
      <div className={styles["projectsDisplay__container"]}>
        <div className={styles["projectsDisplay__container__grid"]}>
          <div className={styles["projectsDisplay__container__grid__item"]}>
            1
          </div>
          <div className={styles["projectsDisplay__container__grid__item"]}>
            2
          </div>
          <div className={styles["projectsDisplay__container__grid__item"]}>
            3
          </div>
          <div className={styles["projectsDisplay__container__grid__item"]}>
            4
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default ProjectsDisplay;
