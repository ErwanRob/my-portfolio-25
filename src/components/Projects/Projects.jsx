import { backOut } from "motion";
import styles from "./Projects.module.scss";
/* import Button from "../Button/Button"; */
import { motion } from "motion/react";
import GlowingPlanet from "./GlowingPlanet/GlowingPlanet";

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
          {/*   <Button text="View more" variant="primary"></Button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <CircleLoader /> */
  /* */
  /*  ...........P.R........J.E.C.T.S_. */
}
