import { useLenis } from "lenis/react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { useRef } from "react";
import styles from "./SideMenuNavigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import useMediaQuery from "../Hooks/useMediaQuery";
import { BREAKPOINTS } from "../../config/breakpoints";

const SideMenuItem = ({ id, label, icon, setPosition, onClick, active }) => {
  /* const isXSmall = useMediaQuery(BREAKPOINTS.xSmall);
  const isSmall = useMediaQuery(BREAKPOINTS.small); */
  const isMedium = useMediaQuery(BREAKPOINTS.medium);

  const lenis = useLenis();
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

  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      top: ref.current.offsetTop,
      width,
      opacity: 1,
    });
  };

  return (
    <motion.li
      ref={ref}
      className={`${styles["nav__list__item"]} 
      ${active === id ? styles.active : ""}`}
      onClick={() => {
        handleScroll(`#${id}`);
        if (onClick && isMedium) {
          onClick();
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      initial={{ x: "0" }}
      whileHover={{ x: "-1rem" }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      aria-label={`Navigate to ${label} section`}
      tabIndex="0"
    >
      {label}

      <span className={styles["nav__list__item__icon"]}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </motion.li>
  );
};

export default SideMenuItem;

SideMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setPosition: PropTypes.func.isRequired,
  icon: PropTypes.shape(icon).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string,
};
