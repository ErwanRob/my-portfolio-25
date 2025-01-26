import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles["contact__container"]}>
        <div className={styles["contact__container__content"]}>
          <div className={styles["contact__container__content__LBlock"]}>
            <h3>Get in touch</h3>
            <h3>Send your Feedbacks</h3>
            <h3>Ask me any questions</h3>
          </div>
          <div className={styles["contact__container__content__RBlock"]}>
            <ContactForm />
          </div>
        </div>
      </div>

      <p></p>
    </div>
  );
};

export default Contact;
