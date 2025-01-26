import { useRef } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const textAreaRef = useRef(null);

  const handleInput = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
      if (
        textarea.scrollHeight > parseInt(getComputedStyle(textarea).maxHeight)
      ) {
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "auto";
      }
    }
  };

  return (
    <div className={styles.contactForm}>
      <form className={styles["contactForm__form"]} action="#" method="POST">
        <input
          className={styles["contactForm__form__name"]}
          type="text"
          name="name"
          placeholder="Name"
          /* defaultValue="Pomme Granite" */
        />
        <input
          className={styles["contactForm__form__email"]}
          type="email"
          name="email"
          placeholder="Email"
          /*   defaultValue="pommegranite@gmail.com" */
        />
        <textarea
          ref={textAreaRef}
          className={styles["contactForm__form__message"]}
          name="message"
          placeholder="Message"
          onInput={handleInput}
        ></textarea>
        <button
          className={styles["contactForm__form__sendButton"]}
          disabled="disabled"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
