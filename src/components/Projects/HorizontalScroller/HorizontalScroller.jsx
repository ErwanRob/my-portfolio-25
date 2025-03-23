import useMediaQuery from "../../Hooks/useMediaQuery";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./HorizontalScroller.module.scss";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import imgProject1 from "../../../assets/img/projects/projectTMPO.png";

const cards = [
  {
    url: imgProject1,
    title: "TMPO",
    id: 1,
    description: "Pet sitting Website, to be released soon",
  },
  {
    /*   url: placeHolderProjectImg, */
    title: "Project 2 T.B.D",
    id: 2,
    description: "No description yet",
  },
  {
    /*   url: placeHolderProjectImg, */
    title: "Project 3 T.B.D",
    id: 3,
    description: "No description yet",
  },
  {
    /* url: placeHolderProjectImg, */
    title: "Project 4 T.B.D",
    id: 4,
    description: "No description yet",
  },
  {
    /* url: placeHolderProjectImg, */
    title: "Project 5 T.B.D",
    id: 5,
    description: "No description yet",
  },
  {
    /*   url: placeHolderProjectImg, */
    title: "Project 6 T.B.D",
    id: 6,
    description: "No description yet",
  },
  {
    /* url: placeHolderProjectImg, */
    title: "Project 7 T.B.D",
    id: 7,
    description: "No description yet",
  },
];

const HorizontalScroller = ({ bgTransform }) => {
  const isMedium = useMediaQuery("(max-width: 1024px)");
  const targetRef = useRef(null);
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
          {isMedium
            ? cards
                .slice(0, 4)
                .map((card) => <ProjectsCard card={card} key={card.id} />)
            : cards.slice(0, 4).map((card) => {
                return <ProjectsCard card={card} key={card.id} />;
              })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HorizontalScroller;

HorizontalScroller.propTypes = {
  bgTransform: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
