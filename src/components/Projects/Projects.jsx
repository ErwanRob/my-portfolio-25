import styles from "./Projects.module.scss";
import GlowingPlanet from "./GlowingPlanet/GlowingPlanet";
import HorizontalScroller from "./HorizontalScroller/HorizontalScroller";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { backOut } from "motion";
import ParticlesComponent from "../common/ParticlesComponent";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import { BREAKPOINTS } from "../../config/breakpoints";
import { PROJECTS_TRANSFORM_CONFIG } from "../../config/xTransformConfig";

const Projects = () => {
  const targetRef = useRef(null);
  const { t } = useTranslation();

  //MediaQuery
  const isXSmall = useMediaQuery(BREAKPOINTS.xSmall);
  const isSmall = useMediaQuery(BREAKPOINTS.small);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["30vh start", "end end"],
  });

  const yTransform = useTransform(
    scrollYProgress,
    PROJECTS_TRANSFORM_CONFIG.yTransform.progress,
    PROJECTS_TRANSFORM_CONFIG.yTransform.values
  );
  const scaleTransform = useTransform(
    scrollYProgress,
    PROJECTS_TRANSFORM_CONFIG.scaleTransform.progress,
    PROJECTS_TRANSFORM_CONFIG.scaleTransform.values
  );
  const opacityTransformBlackHole = useTransform(
    scrollYProgress,
    PROJECTS_TRANSFORM_CONFIG.opacityTransformBlackHole.progress,
    PROJECTS_TRANSFORM_CONFIG.opacityTransformBlackHole.values
  );
  const bgTransform = useTransform(
    scrollYProgress,
    PROJECTS_TRANSFORM_CONFIG.bgTransform.progress,
    PROJECTS_TRANSFORM_CONFIG.bgTransform.values
  );
  const bgTransformBlackHole = useTransform(
    scrollYProgress,
    PROJECTS_TRANSFORM_CONFIG.bgTransformBlackHole.progress,
    PROJECTS_TRANSFORM_CONFIG.bgTransformBlackHole.values
  );

  // Delay mounting of ParticlesComponent by 3 seconds

  const particlesWrapperRef = useRef(null);
  const particlesInView = useInView(particlesWrapperRef);

  return (
    <section ref={targetRef} className={styles.projects} id="projects">
      <div className={styles["projects__container"]}>
        <motion.div
          className="particles-wrapper"
          ref={particlesWrapperRef}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
            delay: 1,
            type: "linear",
          }}
        >
          {particlesInView && !isXSmall && !isSmall && (
            <ParticlesComponent
              id="tsparticlesProjects"
              direction="top"
              speed={1.75}
              pushQuantity={1}
              aria-hidden="true"
            />
          )}
        </motion.div>
        <div className={styles["projects__container__content"]}>
          <div className={styles["projects__container__content__trigger"]}>
            <motion.h3
              className={styles["projects__container__content__trigger__PR"]}
              initial={{
                x: "var(--initial-pR-x)",
                opacity: "var(--initial-pR-opacity)",
              }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ duration: 1, ease: backOut }}
              aria-label="Projects section title left part"
            >
              {t("projects.sectionTitle.left")}
            </motion.h3>
            <GlowingPlanet
              yTransform={isXSmall ? null : yTransform}
              scaleTransform={isXSmall ? null : scaleTransform}
              bgTransformBlackHole={isXSmall ? null : bgTransformBlackHole}
              opacityTransformBlackHole={
                isXSmall ? null : opacityTransformBlackHole
              }
            />
            {/* Actual Trigger */}
            <motion.h3
              className={styles["projects__container__content__trigger__JECTS"]}
              initial={{
                x: "var(--initial-ject-x)",
                opacity: "var(--initial-ject-opacity)",
              }}
              whileInView={{
                x: "var(--whileInView-ject-x)",
                opacity: "var(--whileInView-ject-opacity)",
              }}
              transition={{ duration: 1, ease: backOut }}
              aria-label="Projects section title right part"
            >
              {t("projects.sectionTitle.right")}
            </motion.h3>
          </div>
        </div>
      </div>
      <HorizontalScroller bgTransform={isSmall ? null : bgTransform} />
    </section>
  );
};

export default Projects;

//scrollYProgress console.log
/*   useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll progress:", latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]); */
