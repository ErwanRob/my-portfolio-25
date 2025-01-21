import styles from "./ProjectsDisplay.module.scss";

const ProjectsDisplay = () => {
  return (
    <div className={styles.projectsDisplay}>
      <div className={styles["projectsDisplay__container"]}>
        <div className={styles["projectsDisplay__container__list"]}>
          <div
            className={styles["projectsDisplay__container__list__item"]}
          ></div>
          <div
            className={styles["projectsDisplay__container__list__item"]}
          ></div>
          <div
            className={styles["projectsDisplay__container__list__item"]}
          ></div>
          <div
            className={styles["projectsDisplay__container__list__item"]}
          ></div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default ProjectsDisplay;
