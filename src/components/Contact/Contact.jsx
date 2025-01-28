import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles["contact__container"]}>
        <div className={styles["contact__container__content"]}>
          <div className={styles["contact__container__content__LBlock"]}>
            <ContactInfo />
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
