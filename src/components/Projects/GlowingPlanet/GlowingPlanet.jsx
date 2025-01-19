import { motion } from "motion/react";
import styles from "./GlowingPlanet.module.scss";
import { backOut } from "motion";
/* import { backInOut } from "motion"; */
/* import { useCycle } from "motion/react"; */

const GlowingPlanet = () => {
  /*TEST FOR ONTAP START*/
  /*  const [animate, cycle] = useCycle(
    {
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
    {
      scale: 13,
      rotate: 720,
      transition: {
        duration: 1,
        ease: backInOut,
      },
    }
  );
  useCycle; */
  /*TEST FOR ONTAP*/

  return (
    <div className={styles.glowingPlanet}>
      <motion.div
        className={styles["glowingPlanet__container"]}
        initial={{ y: "20rem", x: "20rem", opacity: 0, rotate: -960 }}
        whileInView={{ y: "0", x: "0", opacity: 1, rotate: 0 }}
        /*  animate={animate} */ /*TEST FOR ONTAP*/
        transition={{ duration: 1.5, ease: backOut }}
        whileHover={{
          scale: 1.2,
          rotate: 1080,
          transition: {
            duration: 0.75,
            ease: "easeInOut",
          },
        }} /*TEST FOR ONTAP*/
        /*  onTap={() => cycle()} */
      >
        <div className={styles["glowingPlanet__container__orb"]} />
      </motion.div>
    </div>
  );
};

export default GlowingPlanet;
