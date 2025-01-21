import { backOut } from "motion";
import styles from "./Projects.module.scss";
import { motion } from "motion/react";
import GlowingPlanet from "./GlowingPlanet/GlowingPlanet";
/* import ProjectsDisplay from "./ProjectsDisplay"; */

const Projects = () => {
  return (
    <div className={`section ${styles.projects}`} id="projects">
      <div className={styles["projects__container"]}>
        <motion.div
          className={styles["projects__container__content"]}
          initial={{ x: "10rem" }}
          whileInView={{ x: "0" }}
          transition={{ duration: 1.5, ease: backOut }}
        >
          <div className={styles["projects__container__content__trigger"]}>
            <h3 className={styles["projects__container__content__trigger__PR"]}>
              P.R
            </h3>
            <GlowingPlanet /> {/* Actual Trigger */}
            <h3
              className={styles["projects__container__content__trigger__JECTS"]}
            >
              J.E.C.T.S_
            </h3>
          </div>
        </motion.div>
        {/* <div className={styles["projects__altContainer"]}>
          <ProjectsDisplay />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
