import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ContactForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const ContactForm = () => {
  const textAreaRef = useRef(null);
  const [status, setStatus] = useState("active");

  const handleInput = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;

      textarea.style.overflowY =
        textarea.scrollHeight > parseInt(getComputedStyle(textarea).maxHeight)
          ? "auto"
          : "hidden";
    }
  };

  const handleClick = () => {
    event.preventDefault();
    setStatus(status === "active" ? "inactive" : "active");
  };

  const formVariants = {
    initial: { opacity: 0 },
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };

  const validationVariants = {
    initial: { y: "51.5rem", opacity: 0 /* , scale: 0.95 */ },
    active: { y: "0rem", opacity: 1 /* , scale: 1 */ },
    inactive: { y: "51.5rem", opacity: 0 /* , scale: 0  */ },
  };

  const formTrans = {
    duration: 0.1,
    ease: "easeIn",
  };

  const validationTrans = {
    opacity: { duration: 0.1, ease: "easeOut" },
    y: { duration: 0.1, type: "spring", stiffness: 150, damping: 19 },
    /* ease: "backInOut", */
  };

  const checkMarkTrans = {
    duration: 0.4,
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 10,
  };

  return (
    <div className={styles.contactForm}>
      <AnimatePresence mode="popLayout">
        {status === "active" && (
          <motion.form
            className={styles["contactForm__form"]}
            key="form" // required for animatePresence
            action="#"
            method="POST"
            initial="initial"
            animate={status}
            variants={formVariants}
            exit="inactive"
            transition={formTrans}
          >
            <div className={styles["contactForm__form__infos"]}>
              <p className={styles["contactForm__form__infos__txt"]}>
                Send me a quick message or use my email adress for more detailed
                informations & inquieries.
              </p>
            </div>
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
            <Button text="Send" onClick={handleClick} variants="primary" />
          </motion.form>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {status === "inactive" && (
          <motion.div
            className={styles.divTest}
            key="validation"
            initial="initial"
            variants={validationVariants}
            animate="active"
            exit="inactive"
            transition={validationTrans}
          >
            <div className={styles["divTest__content"]}>
              <motion.div
                className={styles["divTest__content__icon"]}
                initial={{ rotate: 45 }}
                animate={{
                  rotate: 0,
                }}
                transition={checkMarkTrans}
              >
                <FontAwesomeIcon icon={faCheck} />
              </motion.div>
              <div className={styles["divTest__content__txt"]}>
                <p className={styles["divTest__content__txt__headLine"]}>
                  Message sent.
                </p>
                <p className={styles["divTest__content__txt__subLine"]}>
                  Thank you!
                </p>
              </div>
            </div>
            <Button text="Close" onClick={handleClick} variant="secondary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;

/* if (
        textarea.scrollHeight > parseInt(getComputedStyle(textarea).maxHeight)
      ) {
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "auto";
      } */
