import styles from "./Projects.module.scss";
import CircleLoader from "../CircleLoader/CircleLoader";
import Button from "../Button/Button";

const Projects = () => {
  return (
    <div className={`section ${styles.projects}`} id="projects">
      <div className={styles["projects__container"]}>
        <CircleLoader />
        <div className={styles["projects__container__content"]}>
          <h3 className={styles["projects__container__content__title"]}>
            Works.
          </h3>
          {/* <p className={styles["projects__container__content__sub"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui,
            quas fugit optio repellendus placeat, debitis dolore est laboriosam
            aliquid autem odio ullam perferendis ipsum? Enim ullam voluptatem
            esse quo.
          </p> */}
        </div>
        <Button text="More Projects |>" variant="primary"></Button>
      </div>
    </div>
  );
};

export default Projects;
