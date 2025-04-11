import styles from "./Projects.module.scss";
import GlowingPlanet from "./GlowingPlanet/GlowingPlanet";
import HorizontalScroller from "./HorizontalScroller/HorizontalScroller";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { backOut } from "motion";
import ParticlesComponent from "../common/ParticlesComponent";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const targetRef = useRef(null);
  const { t } = useTranslation();

  //MediaQuery
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["30vh start", "end end"],
  });

  // Map scroll progress to Y-axis movement (in vh units)
  // Pin - SectionHeight
  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.074, 1],
    ["0vh", "60vh", "400vh"]
  );
  const scaleTransform = useTransform(
    scrollYProgress,
    [0, 0.08, 0.25, 0.3, 0.5],
    [1, 1, 12, 12, 1]
  );
  const opacityTransformBlackHole = useTransform(
    scrollYProgress,
    [0, 0.08, 0.25, 0.29],
    [1, 1, 1, 0]
  );
  const bgTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ["rgba(133, 44, 112, 0)", "rgba(133, 44, 112, 0)", "rgb(139, 92, 246)"]
  );
  const bgTransformBlackHole = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(26, 26, 26,0)", "rgba(26, 26, 26,1)"]
  );

  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);

  // Delay mounting of ParticlesComponent by 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRenderParticles(true);
    }, 3000); // Timeout avoid mount on ScrollTo animation

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  const particlesWrapperRef = useRef(null);
  const particlesInView = useInView(particlesWrapperRef);

  return (
    <div ref={targetRef} className={styles.projects} id="projects">
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
          {shouldRenderParticles &&
            particlesInView &&
            !isXSmall &&
            !isSmall && (
              <ParticlesComponent
                id="tsparticlesProjects"
                direction="top"
                speed={1.75}
                pushQuantity={1}
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
            >
              {t("projects.sectionTitle.right")}
            </motion.h3>
          </div>
        </div>
      </div>
      <HorizontalScroller bgTransform={isSmall ? null : bgTransform} />
    </div>
  );
};

export default Projects;

/* 
//FOR 7 PROJECTS

const yTransform = useTransform(
  scrollYProgress,
  [0, 0.074, 1],
  ["0vh", "100vh", "700vh"]
);
const scaleTransform = useTransform(
  scrollYProgress,
  [0, 0.05, 0.14, 0.3, 0.4],
  [1, 1, 20, 20, 1]
);
const bgTransform = useTransform(
  scrollYProgress,
  [0, 0.1, 0.2],
  ["rgba(133, 44, 112, 0)", "rgba(133, 44, 112, 0)", "rgb(139, 92, 246)"]
);
const bgTransformBlackHole = useTransform(
  scrollYProgress,
  [0, 0.1],
  ["rgba(26, 26, 26,0)", "rgba(26, 26, 26,1)"]
); */

//scrollYProgress console.log
/*   useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll progress:", latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]); */
