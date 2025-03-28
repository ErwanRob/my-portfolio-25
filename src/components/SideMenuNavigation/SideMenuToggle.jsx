import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styles from "./SideMenuToggle.module.scss";
import { motion } from "motion/react";

const SideMenuToggle = ({ isSideMenuVisible, toggleSideMenu }) => {
  return (
    <div className={styles.sMNToggle}>
      <motion.button
        className={styles["sMNToggle__btn"]}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.15, ease: "backOut" }}
        onClick={toggleSideMenu}
        aria-label="Toggle side menu"
      >
        {isSideMenuVisible ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </motion.button>
    </div>
  );
};

export default SideMenuToggle;

SideMenuToggle.propTypes = {
  isSideMenuVisible: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};
