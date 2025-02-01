import styles from "./Projects.module.scss";
import GlowingPlanet from "./GlowingPlanet/GlowingPlanet";
import HorizontalScroller from "./HorizontalScroller";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { backOut } from "motion";
import ParticlesComponent from "../ParticlesComponent";
import useMediaQuery from "../Hooks/useMediaQuery";

const Projects = () => {
  const targetRef = useRef(null);

  const isXSmall = useMediaQuery("(max-width: 480px)");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["30vh start", "end end"],
  });

  // Map scroll progress to Y-axis movement (in vh units)
  // Pin - SectionHeight
  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.074, 1],
    ["0vh", "100vh", "700vh"]
  );
  const scaleTransform = useTransform(
    scrollYProgress,
    [0, 0.05, 0.14, 0.3, 0.4],
    [1, 1, 15, 15, 1]
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
  );

  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);

  // Delay mounting of ParticlesComponent by 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRenderParticles(true);
      console.log("Projects Particles rendered");
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
          {shouldRenderParticles && particlesInView && (
            <ParticlesComponent
              id="tsparticlesProjects"
              direction="top"
              speed={1.75}
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
              P.R
            </motion.h3>
            <GlowingPlanet
              yTransform={isXSmall ? null : yTransform}
              scaleTransform={isXSmall ? null : scaleTransform}
              bgTransformBlackHole={isXSmall ? null : bgTransformBlackHole}
            />
            {/* Actual Trigger */}
            <motion.h3
              className={styles["projects__container__content__trigger__JECTS"]}
              initial={{ x: "15rem", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ duration: 1, ease: backOut }}
            >
              J.E.C.T.S_
            </motion.h3>
          </div>
        </div>
      </div>
      <HorizontalScroller bgTransform={isXSmall ? null : bgTransform} />
    </div>
  );
};

export default Projects;

// Smooth the scroll progress using a spring
/*   const ySmooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  }); */

// Log scrollYProgress in real-time
/*   useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) => {
      console.log("ScrollYProgress:", latestValue);
    });
*/
