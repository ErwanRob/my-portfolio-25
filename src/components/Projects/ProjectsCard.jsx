import styles from "./ProjectsCard.module.scss";
import PropTypes from "prop-types";
import { motion } from "motion/react";

const ProjectsCard = ({ card }) => {
  return (
    <motion.div
      key={card.id}
      className={styles.projectsCard}
      initial={{ y: "5rem", opacity: 0 }}
      whileInView={{
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut",
        },
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      <div
        className={styles["projectsCard__img"]}
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      />

      <div className={styles["projectsCard__title"]}>{card.title}</div>
    </motion.div>
  );
};

export default ProjectsCard;

ProjectsCard.propTypes = {
  card: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
