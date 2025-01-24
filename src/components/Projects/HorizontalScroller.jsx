import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./HorizontalScroller.module.scss";
import ProjectsCard from "./ProjectsCard";
import imgSpot from "../../assets/img/test2.jpg";
import PropTypes from "prop-types";

const cards = [
  {
    url: imgSpot,
    title: "Title 1",
    id: 1,
  },
  {
    url: imgSpot,
    title: "Title 2",
    id: 2,
  },
  {
    url: imgSpot,
    title: "Title 3",
    id: 3,
  },
  {
    url: imgSpot,
    title: "Title 4",
    id: 4,
  },
  {
    url: imgSpot,
    title: "Title 5",
    id: 5,
  },
  {
    url: imgSpot,
    title: "Title 6",
    id: 6,
  },
  {
    url: imgSpot,
    title: "Title 7",
    id: 7,
  },
];

const HorizontalScroller = ({ bgTransform }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-45%"]);

  return (
    <motion.div
      ref={targetRef}
      className={styles.horizontalScroller}
      style={{ backgroundColor: bgTransform }}
    >
      <div className={styles["horizontalScroller__stickyContainer"]}>
        <motion.div
          style={{ x }}
          className={styles["horizontalScroller__stickyContainer__content"]}
        >
          {cards.map((card) => {
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
