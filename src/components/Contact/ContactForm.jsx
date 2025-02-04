import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ContactForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";

const ContactForm = ({ onReset }) => {
  const [state, handleSubmit] = useForm("xnnjvyye"); // formSpree hook with its id

  const formVariants = {
    initial: { opacity: 0 },
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };

  const validationVariants = {
    initial: { y: "51.5rem", opacity: 0 },
    active: { y: "0rem", opacity: 1 },
    inactive: { y: "51.5rem", opacity: 0 },
  };

  const formTrans = {
    duration: 0.1,
    ease: "easeIn",
  };

  const validationTrans = {
    opacity: { duration: 0.1, ease: "easeOut" },
    y: { duration: 0.1, type: "spring", stiffness: 150, damping: 19 },
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
        {!state.succeeded && (
          <motion.form
            className={styles["contactForm__form"]}
            key="form"
            action="https://formspree.io/f/xnnjvyye" //formSpree endpoint
            method="POST"
            initial="initial"
            animate="active"
            variants={formVariants}
            exit="inactive"
            transition={formTrans}
            onSubmit={handleSubmit}
          >
            <div className={styles["contactForm__form__infos"]}>
              <p className={styles["contactForm__form__infos__txt"]}>
                Got feedback, questions, or a detailed inquiry? <br /> Use the
                form below for a quick message, or contact me by email for
                comprehensive information.
              </p>
            </div>

            <label
              htmlFor="name"
              className={styles["contactForm__form__sr-only"]}
            >
              Name
            </label>
            <input
              id="name"
              className={styles["contactForm__form__name"]}
              type="text"
              name="Name"
              placeholder="Name"
              autoComplete="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label
              htmlFor="email"
              className={styles["contactForm__form__sr-only"]}
            >
              Email
            </label>
            <input
              id="email"
              className={styles["contactForm__form__email"]}
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label
              htmlFor="message"
              className={styles["contactForm__form__sr-only"]}
            >
              Message
            </label>
            <TextareaAutosize
              data-lenis-prevent
              id="message"
              className={styles["contactForm__form__message"]}
              name="Message"
              placeholder="Message"
              minRows={3}
              maxRows={15}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            {/* Honeypot field to deter spam bots */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <Button
              text="Send"
              type="submit"
              variants="primary"
              disabled={state.submitting}
            />
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        {state.succeeded && (
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
                animate={{ rotate: 0 }}
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
            <Button text="Close" onClick={onReset} variant="secondary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onReset: PropTypes.func.isRequired,
};

/* if (
        textarea.scrollHeight > parseInt(getComputedStyle(textarea).maxHeight)
      ) {
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "auto";
      } */

/* const textAreaRef = useRef(null); */

/* const handleInput = () => {
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
  
  
  
  {/* <textarea
              ref={textAreaRef}
              className={styles["contactForm__form__message"]}
              name="message"
              placeholder="Message"
              onInput={handleInput}
              required
            ></textarea> */
