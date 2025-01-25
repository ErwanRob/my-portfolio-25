import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./HorizontalScroller.module.scss";
import ProjectsCard from "./ProjectsCard";
import imgProject1 from "../../assets/img/projects/project1.jpg";
import placeHolderProjectImg from "../../assets/img/projects/projectPlaceholder1.jpg";
import PropTypes from "prop-types";

const cards = [
  {
    url: imgProject1,
    title: "TMPO",
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
  },
  {
    url: placeHolderProjectImg,
    title: "Project 2 T.B.D",
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
  },
  {
    url: placeHolderProjectImg,
    title: "Project 3 T.B.D",
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
  },
  {
    url: placeHolderProjectImg,
    title: "Project 4 T.B.D",
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
  },
  {
    url: placeHolderProjectImg,
    title: "Project 5 T.B.D",
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
  },
  {
    url: placeHolderProjectImg,
    title: "Project 6 T.B.D",
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
  },
  {
    url: placeHolderProjectImg,
    title: "Project 7 T.B.D",
    id: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat ratione eaque optio quam at architecto deserunt laborum assumenda, perferendis totam! Eum libero maiores voluptas fugiat impedit ipsam similique modi! ",
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
