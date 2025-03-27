import useMediaQuery from "../../Hooks/useMediaQuery";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./HorizontalScroller.module.scss";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import imgProject1 from "../../../assets/img/projects/projectTMPO.png";
import imgProject2 from "../../../assets/img/projects/projectMyPocketCV.png";
import imgProject3 from "../../../assets/img/projects/projectNeverForget.png";
import { useTranslation } from "react-i18next";

const cards = [
  {
    id: 1,
    url: imgProject1,
    titleKey: "projects.projectsCard.project1.title",
    descriptionKey: "projects.projectsCard.project1.description",
  },
  {
    id: 2,
    url: imgProject2,
    titleKey: "projects.projectsCard.project2.title",
    descriptionKey: "projects.projectsCard.project2.description",
  },
  {
    id: 3,
    url: imgProject3,
    titleKey: "projects.projectsCard.project3.title",
    descriptionKey: "projects.projectsCard.project3.description",
  },
  {
    id: 4,
    url: "",
    titleKey: "projects.projectsCard.project4.title",
    descriptionKey: "projects.projectsCard.project4.description",
  },
];

const HorizontalScroller = ({ bgTransform }) => {
  const { t } = useTranslation();

  // MediaQuery
  const isMedium = useMediaQuery("(max-width: 1024px)");
  const targetRef = useRef(null);
  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  /* const x = useTransform(scrollYProgress, [0, 1], ["60%", "-45%"]); */ // for 7 projects
  const x = useTransform(scrollYProgress, [0, 1], ["70%", "-41%"]);

  return (
    <motion.div
      ref={targetRef}
      className={styles.horizontalScroller}
      style={isMedium ? null : { backgroundColor: bgTransform }}
    >
      <div className={styles["horizontalScroller__stickyContainer"]}>
        <motion.div
          style={isMedium ? null : { x }}
          className={styles["horizontalScroller__stickyContainer__content"]}
        >
          {cards.map((card) => (
            <ProjectsCard
              key={card.id}
              card={{
                ...card,
                title: t(card.titleKey),
                description: t(card.descriptionKey),
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HorizontalScroller;

HorizontalScroller.propTypes = {
  bgTransform: PropTypes.object,
};

/* {isMedium
  ? cards.map((card) => <ProjectsCard card={card} key={card.id} />)
  : cards.slice(0, 4).map((card) => {
      return <ProjectsCard card={card} key={card.id} />;
    })} */
