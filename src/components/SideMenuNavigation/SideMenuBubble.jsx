import { motion } from "motion/react";
import PropTypes from "prop-types";
import styles from "./SideMenuNavigation.module.scss";

const SideMenuBubble = ({ position }) => {
  return (
    <motion.li
      className={styles["nav__list__bubble"]}
      animate={{ ...position, x: "-1rem" }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    />
  );
};

export default SideMenuBubble;

SideMenuBubble.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,
};
