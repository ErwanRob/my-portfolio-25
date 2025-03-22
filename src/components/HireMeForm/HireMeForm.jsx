import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./HireMeForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";
import useResponsiveRows from "../Hooks/UseResponsiveRows";

const HireMeForm = ({ onClose }) => {
  const { minRows, maxRows } = useResponsiveRows();
  const [state, handleSubmit] = useForm("mpwpqvad"); // formSpree hook with its id

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
    <motion.div
      className={styles.hireMeForm}
      initial={{ opacity: 0, y: "-20%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      <AnimatePresence mode="popLayout">
        {!state.succeeded && (
          <motion.form
            className={styles["hireMeForm__form"]}
            key="form"
            action="https://formspree.io/f/mpwpqvad" //formSpree endpoint
            method="POST"
            initial="initial"
            animate="active"
            variants={formVariants}
            exit="inactive"
            transition={formTrans}
            onSubmit={handleSubmit}
          >
            <div className={styles["hireMeForm__form__headline"]}>
              <p className={styles["hireMeForm__form__headline__txt"]}>
                <motion.span
                  className={styles["hireMeForm__form__headline__txt__purple"]}
                  initial={{ x: "-2rem", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backOut", delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ready
                </motion.span>
                to Collaborate ?
              </p>
              <p className={styles["hireMeForm__form__headline__txt"]}>
                <motion.span
                  className={styles["hireMeForm__form__headline__txt__purple"]}
                  initial={{ y: "-2rem", opacity: 0, rotate: -15 }}
                  whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: "backOut", delay: 0.75 }}
                  viewport={{ once: true }}
                >
                  Share
                </motion.span>
                Your Project Details Below.
              </p>
            </div>
            <motion.div
              className={styles["hireMeForm__form__userInfos"]}
              initial={{ x: "2rem", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut", delay: 1 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className={styles.srOnly}>
                Name
              </label>
              <input
                id="name"
                className={styles["hireMeForm__form__userInfos__name"]}
                type="text"
                name="Name"
                placeholder="Name*"
                autoComplete="name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email" className={styles.srOnly}>
                Email
              </label>
              <input
                id="email"
                className={styles["hireMeForm__form__userInfos__email"]}
                type="email"
                name="Email"
                placeholder="Email*"
                autoComplete="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="phone" className={styles.srOnly}>
                Phone number (optional)
              </label>
              <input
                id="phone"
                className={styles["hireMeForm__form__userInfos__phone"]}
                type="phone"
                name="phone"
                placeholder="Phone number"
                autoComplete="phone"
              />
              <ValidationError
                prefix="phone"
                field="phone"
                errors={state.errors}
              />
              <label htmlFor="organization" className={styles.srOnly}>
                Organization / Company (optional)
              </label>
              <input
                id="organization"
                className={styles["hireMeForm__form__userInfos__organization"]}
                type="text"
                name="organization"
                placeholder="Organization / Company"
                autoComplete="organization"
              />
              <ValidationError
                prefix="organization"
                field="organization"
                errors={state.errors}
              />
            </motion.div>
            <motion.div
              className={styles["hireMeForm__form__txtContent"]}
              initial={{ x: "-2rem", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut", delay: 1 }}
              viewport={{ once: true }}
            >
              <div
                className={styles["hireMeForm__form__txtContent__txtProjInfo"]}
              >
                <label htmlFor="object" className={styles.srOnly}>
                  Object
                </label>
                <input
                  id="object"
                  className={
                    styles["hireMeForm__form__txtContent__txtProjInfo__object"]
                  }
                  type="text"
                  name="object"
                  placeholder="Object / Project name*"
                  autoComplete="object"
                  required
                />
                <ValidationError
                  prefix="Object"
                  field="object"
                  errors={state.errors}
                />
                <label htmlFor="deadline" className={styles.srOnly}>
                  Deadline
                </label>
                <input
                  id="deadline"
                  className={
                    styles[
                      "hireMeForm__form__txtContent__txtProjInfo__deadline"
                    ]
                  }
                  type="text"
                  name="deadline"
                  placeholder="Any Deadline?"
                  autoComplete="deadline"
                  required
                />
                <ValidationError
                  prefix="Deadline"
                  field="deadline"
                  errors={state.errors}
                />
              </div>
              <label htmlFor="message" className={styles.srOnly}>
                Message
              </label>
              <TextareaAutosize
                /* data-lenis-prevent */
                id="message"
                className={styles["hireMeForm__form__txtContent__message"]}
                name="Message"
                placeholder="Tell me about your project *"
                minRows={minRows}
                maxRows={maxRows}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>
            {/* Honeypot field to deter spam bots */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
            <motion.div
              className={styles["hireMeForm__form__buttonWrapper"]}
              initial={{ y: "2rem", opacity: 0, rotate: -5 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 1 }}
              viewport={{ once: true }}
            >
              <Button
                text="Cancel"
                onClick={onClose}
                variant="secondaryShort"
                disabled={state.submitting}
              />
              <Button
                text="Send"
                type="submit"
                variant="primaryShort"
                disabled={state.submitting}
              />
            </motion.div>
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
                  Message sent.
                </p>
                <p className={styles["confirmation__content__txt__subLine"]}>
                  I will get back to you soon.
                </p>
                <p className={styles["confirmation__content__txt__thanks"]}>
                  Thank you!
                </p>
              </div>
            </div>
            {/*   <Button text="Close" variant="secondaryShort" /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HireMeForm;

HireMeForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
