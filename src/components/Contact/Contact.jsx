import styles from "./Contact.module.scss";
import ContactFormWrapper from "./contactFormWrapper";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles["contact__container"]}>
        <div className={styles["contact__container__content"]}>
          <div className={styles["contact__container__content__LBlock"]}>
            <ContactInfo />
          </div>
          <div className={styles["contact__container__content__RBlock"]}>
            <ContactFormWrapper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
