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

const Hero = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
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
                onClick={handleClick}
                variant="primary"
              ></Button>
              <Button
                href={"/cv.pdf"}
                download={"ROBIN_Erwan_CV_18-07-2024"}
                icon={faDownload}
                text="C.V."
                onClick={handleClick}
                variant="secondary"
              ></Button>
              <Button
                text="Feedbacks"
                onClick={() => setFeedbackModalOpen(true)}
                variant="secondary"
              ></Button>
              <Button
                text="Hire me"
                onClick={handleClick}
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
    </>
  );
};

export default Hero;
