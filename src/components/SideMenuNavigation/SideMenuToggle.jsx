import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styles from "./SideMenuToggle.module.scss";

const SideMenuToggle = ({ isSideMenuVisible, toggleSideMenu }) => {
  return (
    <div className={styles.sMNToggle}>
      <button
        className={styles["sMNToggle__btn"]}
        onClick={toggleSideMenu}
        aria-label="Toggle side menu"
      >
        {isSideMenuVisible ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </div>
  );
};

export default SideMenuToggle;

SideMenuToggle.propTypes = {
  isSideMenuVisible: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};
