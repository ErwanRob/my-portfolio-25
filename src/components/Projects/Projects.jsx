import styles from "./Projects.module.scss";
import ProjectBgCircleLoader from "../ProjectBGCircleLoader/ProjectBgCircleLoader";

const Projects = () => {
  return (
    <div className={`section ${styles.projects}`} id="projects">
      <div className={styles["projects__container"]}>
        <ProjectBgCircleLoader />
        <div className={styles["projects__container__content"]}>
          <h3 className={styles["projects__container__content__title"]}>
            Projects
          </h3>
          {/* <p className={styles["projects__container__content__sub"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui,
            quas fugit optio repellendus placeat, debitis dolore est laboriosam
            aliquid autem odio ullam perferendis ipsum? Enim ullam voluptatem
            esse quo.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
