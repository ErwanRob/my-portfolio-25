import styles from "./AboutMe.module.scss";
import portrait from "../../assets/img/profilp/img5.jpg";

const AboutMe = () => {
  return (
    <div className={`section ${styles.aboutMe}`} id="about-me">
      <div className={styles["aboutMe__txtContent"]}>
        <h3 className={styles["aboutMe__txtContent__title"]}>About Me</h3>
        <div className={styles["aboutMe__txtContent__paraWrapper"]}>
          <p className={styles["aboutMe__txtContent__paraWrapper__paraOne"]}>
            <span
              className={
                styles["aboutMe__txtContent__paraWrapper__paraOne__hLine"]
              }
            >
              Hi, I’m a passionate front-end developer <br />
              dedicated to crafting engaging and <br />
              user-friendly websites.
            </span>
            <br />I specialize in blending clean, modern design with seamless
            functionality to deliver solutions that are not only visually
            appealing but also highly effective.
          </p>
          <p className={styles["aboutMe__txtContent__paraWrapper__paraTwo"]}>
            Whether it’s building responsive layouts, creating intuitive user
            interfaces, or optimizing websites for performance and SEO, my focus
            is on delivering measurable value to my clients.
            <br />I take pride in solving problems and turning ideas into
            reality with precision and creativity.
          </p>
          <p className={styles["aboutMe__txtContent__paraWrapper__paraThree"]}>
            I’m committed to staying at the forefront of web development
            practices and helping clients achieve their vision with impactful,
            efficient, and scalable web solutions.
            <span
              className={
                styles["aboutMe__txtContent__paraWrapper__paraThree__hLine"]
              }
            >
              Let’s create something amazing together.
            </span>
          </p>
        </div>
      </div>
      <div className={styles["aboutMe__imageWrapper"]}>
        <div className={styles["aboutMe__imageWrapper__imgContainer"]}>
          <img
            className={styles["aboutMe__imageWrapper__imgContainer__img"]}
            src={portrait}
            alt="selfPortrait"
          />
        </div>
        <div>Let’s create something amazing together.</div>
      </div>
    </div>
  );
};

export default AboutMe;
