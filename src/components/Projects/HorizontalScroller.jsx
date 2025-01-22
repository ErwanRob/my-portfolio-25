import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./HorizontalScroller.module.scss";
import ProjectsCard from "./ProjectsCard";
import imgSpot from "../../assets/img/test2.jpg";

const HorizontalScroller = () => {
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

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["150%", "-120%"]);

  return (
    <div className={styles.horizontalScroller} id="gallery">
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
    </div>
  );
};

export default HorizontalScroller;

{
  /* <div className={styles["horizontalScroller__container__grid__item"]}>
            <img
              className={
                styles["horizontalScroller__container__grid__item__img"]
              }
              src={imgTest}
              alt="imgTestSpot"
            />
          </div>
          <div className={styles["horizontalScroller__container__grid__item"]}>
            <img
              className={
                styles["horizontalScroller__container__grid__item__img"]
              }
              src={imgTest}
              alt="imgTestSpot"
            />
          </div>
          <div className={styles["horizontalScroller__container__grid__item"]}>
            <img
              className={
                styles["horizontalScroller__container__grid__item__img"]
              }
              src={imgTest}
              alt="imgTestSpot"
            />
          </div>
          <div className={styles["horizontalScroller__container__grid__item"]}>
            <img
              className={
                styles["horizontalScroller__container__grid__item__img"]
              }
              src={imgTest}
              alt="imgTestSpot"
            />
          </div> */
}
