import styles from "./Hero.module.scss";
import HeadLine from "./HeadLine/HeadLine";
import SubLine from "./SubLine/SubLine";
import Button from "../Button/Button";
import ParticlesComponent from "../ParticlesComponent";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import FeedBackModal from "../Modals/FeedBackModal";
import HireMeModal from "../Modals/HireMeModal";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useLenis } from "lenis/react";

const Hero = () => {
  const lenis = useLenis();
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isXSmallHeightThreshold = useMediaQuery("(max-height: 600px)");

  const handleScroll = (target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5),
        offset: 0,
        lock: true,
      });
    }
  };

  const handleHireMeClick = () => {
    if (isSmall || isXSmallHeightThreshold) {
      handleScroll("#contact");
    } else {
      setHireMeModalOpen(true);
    }
  };

  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [isHireMeModalOpen, setHireMeModalOpen] = useState(false);
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);

  // Delay mounting of ParticlesComponent by 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRenderParticles(true);
    }, 2700); // Timeout to match Preloader animation end. and not impact load time

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  const particlesWrapperRef = useRef(null);
  const particlesInView = useInView(particlesWrapperRef);

  return (
    <>
      <div className={styles.hero} id="hero">
        <motion.div
          ref={particlesWrapperRef}
          className="particles-wrapper"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 2.7,
            type: "linear",
          }}
        >
          {shouldRenderParticles && particlesInView && (
            <ParticlesComponent
              id="tsparticlesHero"
              direction="none"
              speed={0.75}
              pushQuantity={0}
            />
          )}
        </motion.div>
        <div className={styles["hero__content"]}>
          <div className={styles["hero__content__container"]}>
            <HeadLine />
            <SubLine />
            <motion.div
              className={styles["hero__content__container__buttonWrapper"]}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 2.7,
                type: "linear",
              }}
            >
              <Button
                href={"https://github.com/ErwanRob"}
                icon={faGithub}
                text="GitHub"
                variant="primary"
              ></Button>
              <Button
                href={"/cv.pdf"}
                download={"ROBIN_Erwan_CV_18-07-2024"}
                icon={faDownload}
                text="C.V."
                variant="secondary"
              ></Button>
              <Button
                text="Feedbacks"
                onClick={() => setFeedbackModalOpen(true)}
                variant="secondary"
              ></Button>
              <Button
                text="Hire me"
                onClick={handleHireMeClick}
                variant="tertiary"
              ></Button>
            </motion.div>
          </div>
        </div>
      </div>
      <FeedBackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setFeedbackModalOpen(false)}
      />
      <HireMeModal
        isOpen={isHireMeModalOpen}
        onClose={() => setHireMeModalOpen(false)}
      />
    </>
  );
};

export default Hero;
