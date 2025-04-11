import styles from "./Hero.module.scss";
import HeadLine from "./HeadLine/HeadLine";
import SubLine from "./SubLine/SubLine";
import Button from "../Button/Button";
import ParticlesComponent from "../common/ParticlesComponent";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import FeedBackModal from "../Modals/FeedBackModal";
import HireMeModal from "../Modals/HireMeModal";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useLenis } from "lenis/react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
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

  const particlesWrapperRef = useRef(null);
  const particlesInView = useInView(particlesWrapperRef);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [isHireMeModalOpen, setHireMeModalOpen] = useState(false);
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);

  const handleHireMeClick = () => {
    if (isSmall || isXSmallHeightThreshold) {
      handleScroll("#contact");
    } else {
      setHireMeModalOpen(true);
    }
  };
  const handleFeedbackClick = () => {
    setFeedbackModalOpen(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRenderParticles(true); // Start rendering particles after PreLoader animation
    }, 2700); // Timeout to match Preloader animation end. And not impact load time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className={styles.hero} id="hero">
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
          {shouldRenderParticles && particlesInView && !isSmall && (
            <ParticlesComponent
              id="tsparticlesHero"
              direction="none"
              speed={0.75}
              pushQuantity={1}
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
                text={t("hero.button.github")}
                variant="primary"
                shadowOn={true}
              ></Button>
              <Button
                href={"/cv.pdf"}
                download={"CV_ErwanRobin_27-3-2025.pdf"}
                icon={faDownload}
                text={t("hero.button.download")}
                variant="secondary"
                shadowOn={true}
              ></Button>
              <Button
                icon={faThumbsUp}
                text={t("hero.button.feedback")}
                variant="secondary"
                shadowOn={true}
                onClick={handleFeedbackClick}
              ></Button>
              <Button
                icon={faHandshakeSimple}
                text={t("hero.button.hire_me")}
                variant="tertiary"
                shadowOn={true}
                onClick={handleHireMeClick}
              ></Button>
            </motion.div>
          </div>
        </div>
      </section>
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
