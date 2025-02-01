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

const NavigationBar = () => {
  const isXSmall = useMediaQuery("(max-width: 480px)");

  const [position, setPosition] = useState({
    top: 0,
    width: 0,
    opacity: 0,
  });
  const navList = [
    { id: "hero", label: "Home", icon: faHouse },
    { id: "about-me", label: "About Me", icon: faAddressBook },
    { id: "projects", label: "Projects", icon: faBriefcase },
    { id: "skills", label: "Skills", icon: faScrewdriverWrench },
    { id: "contact", label: "Contact", icon: faEnvelope },
  ];

  return (
    <motion.nav
      className={styles.nav}
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
      <ul className={styles["nav__list"]}>
        {navList.map((item) => (
          <SideMenuItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            setPosition={setPosition}
          ></SideMenuItem>
        ))}

        {isXSmall ? null : <SideMenuBubble position={position} />}
      </ul>
    </motion.nav>
  );
};

export default NavigationBar;
