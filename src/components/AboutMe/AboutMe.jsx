import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={`section ${styles.aboutMe}`} id="about-me">
      <h3>About Me</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui, quas
        fugit optio repellendus placeat, debitis dolore est laboriosam aliquid
        autem odio ullam perferendis ipsum? Enim ullam voluptatem esse quo.
      </p>
    </div>
  );
};

export default AboutMe;
