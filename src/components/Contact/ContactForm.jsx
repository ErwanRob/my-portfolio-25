import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ContactForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useLenis } from "lenis/react";
import useMediaQuery from "../Hooks/useMediaQuery";

const ContactForm = ({ onReset }) => {
  const { t } = useTranslation();

  const isSmall = useMediaQuery("(max-width: 768px)");
  const isXSmallHeight = useMediaQuery("(max-height: 600px)");

  const lenis = useLenis();
  const handleScroll = (target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5),
        offset: 0,
        lock: true,
      });
    }
  };
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
            initial="initial"
            animate="active"
            variants={formVariants}
            exit="inactive"
            transition={formTrans}
            onSubmit={handleSubmit}
          >
            <div className={styles["contactForm__form__infos"]}>
              <p className={styles["contactForm__form__infos__txt"]}>
                {t("contact.contactForm.instructions.gotFeedback")}
              </p>
              <p className={styles["contactForm__form__infos__txt"]}>
                {t("contact.contactForm.instructions.useForm")}
              </p>

              {!isSmall && !isXSmallHeight && (
                <>
                  <p className={styles["contactForm__form__infos__txt"]}>
                    {t("contact.contactForm.instructions.comprehensive")}
                  </p>
                  <p className={styles["contactForm__form__infos__txt"]}>
                    {t("contact.contactForm.instructions.prefer")}
                    <a
                      href="#hero"
                      className={styles["contactForm__form__infos__txt__link"]}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll("#hero");
                      }}
                    >
                      {t("contact.contactForm.instructions.hireMeLink")}
                    </a>
                    {t("contact.contactForm.instructions.byEmail")}
                  </p>
                </>
              )}
            </div>

            <label
              htmlFor="name"
              className={styles["contactForm__form__sr-only"]}
            >
              {t("contact.contactForm.labels.label_name")}
            </label>
            <input
              id="name"
              className={styles["contactForm__form__name"]}
              type="text"
              name="Name"
              placeholder={t(
                "contact.contactForm.placeholder.placeholder_name"
              )}
              autoComplete="name"
              required
              aria-describedby="name-error"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              aria-live="polite"
            />
            <label
              htmlFor="email"
              className={styles["contactForm__form__sr-only"]}
            >
              {t("contact.contactForm.labels.label_email")}
            </label>
            <input
              id="email"
              className={styles["contactForm__form__email"]}
              type="email"
              name="Email"
              placeholder={t(
                "contact.contactForm.placeholder.placeholder_email"
              )}
              autoComplete="email"
              required
              aria-describedby="email-error"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              aria-live="polite"
            />

            <label
              htmlFor="message"
              className={styles["contactForm__form__sr-only"]}
            >
              {t("contact.contactForm.labels.label_message")}
            </label>
            <TextareaAutosize
              data-lenis-prevent
              id="message"
              className={styles["contactForm__form__message"]}
              name="Message"
              placeholder={t(
                "contact.contactForm.placeholder.placeholder_message"
              )}
              minRows={3}
              maxRows={10}
              required
              aria-describedby="message-error"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              aria-live="polite"
            />
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <Button
              text={
                state.submitting
                  ? t("contact.contactForm.button.sending")
                  : t("contact.contactForm.button.send")
              }
              type="submit"
              variant="primary"
              disabled={state.submitting}
            />
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        {state.succeeded && (
          <motion.div
            className={styles.confirmation}
            key="validation"
            initial="initial"
            variants={validationVariants}
            animate="active"
            exit="inactive"
            transition={validationTrans}
          >
            <div className={styles["confirmation__content"]}>
              <motion.div
                className={styles["confirmation__content__icon"]}
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                transition={checkMarkTrans}
              >
                <FontAwesomeIcon icon={faCheck} />
              </motion.div>
              <div className={styles["confirmation__content__txt"]}>
                <p className={styles["confirmation__content__txt__headLine"]}>
                  {t("contact.contactForm.confirmation.message_sent")}
                </p>
                <p className={styles["confirmation__content__txt__subLine"]}>
                  {t("contact.contactForm.confirmation.thanks")}
                </p>
              </div>
            </div>
            <Button
              text={t("contact.contactForm.button.close")}
              onClick={onReset}
              variant="secondary"
            />
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
