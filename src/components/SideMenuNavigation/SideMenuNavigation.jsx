import styles from "./SideMenuNavigation.module.scss";
import { motion, backOut } from "motion/react";
import { useState } from "react";
import SideMenuBubble from "./SideMenuBubble";
import SideMenuItem from "./SideMenuItem";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "../Hooks/useMediaQuery";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

const navList = [
  { id: "hero", labelKey: "navigation.home", icon: faHouse },
  {
    id: "about-me",
    labelKey: "navigation.about",
    icon: faAddressBook,
  },
  {
    id: "projects",
    labelKey: "navigation.projects",
    icon: faBriefcase,
  },
  {
    id: "skills",
    labelKey: "navigation.skills",
    icon: faScrewdriverWrench,
  },
  {
    id: "contact",
    labelKey: "navigation.contact",
    icon: faEnvelope,
  },
];

const SideMenuNavigation = ({ display, toggleSideMenu }) => {
  const { t } = useTranslation();

  //MediaQuery
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");

  //states
  const [position, setPosition] = useState({
    top: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div
      className={`${styles.sideMenuNavigationWrapper} ${
        display ? styles.visible : ""
      }`}
    >
      <motion.nav
        className={`${styles.nav} ${display ? styles.fadein : styles.fadeout}`}
        initial={{
          y: "3rem",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 3.2,
          ease: backOut,
        }}
      >
        <motion.ul className={styles["nav__list"]}>
          {navList.map((item) => (
            <SideMenuItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              label={t(item.labelKey)}
              setPosition={setPosition}
              onClick={toggleSideMenu}
            ></SideMenuItem>
          ))}

          {isXSmall || isSmall || isMedium ? null : (
            <SideMenuBubble position={position} />
          )}
        </motion.ul>
        {isMedium && <LanguageSwitcher />}
      </motion.nav>
    </div>
  );
};

export default SideMenuNavigation;

SideMenuNavigation.propTypes = {
  display: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};
