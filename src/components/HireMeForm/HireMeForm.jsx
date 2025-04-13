import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import PropTypes from "prop-types";
import useResponsiveRows from "../Hooks/useResponsiveRows";
import styles from "./HireMeForm.module.scss";
import Button from "../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const HireMeForm = ({ onClose }) => {
  const { t } = useTranslation();
  const { minRows, maxRows } = useResponsiveRows();
  const [state, handleSubmit] = useForm("mpwpqvad"); // formSpree hook with its id

  // fields whose errors should be hidden until next submit
  const [hideErrors, setHideErrors] = useState({});
  // marks field which gets focused so that its error stays hidden until next submit
  const onFieldFocus = (fieldName) => {
    setHideErrors((prev) => ({ ...prev, [fieldName]: true }));
  };
  // Wrap the handleSubmit to reset hideErrors so errors show up again on submission and not before
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await handleSubmit(e);
    if (res?.ok) {
      console.log("Submission succeeded!"); //gets unmounted on submission suceeds so doesnt really matter
    } else {
      console.log("Submission error!");
    }
    // Clear the hideErrors state only after the submission completes
    setHideErrors({});
  };

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
            initial="initial"
            animate="active"
            variants={formVariants}
            exit="inactive"
            transition={formTrans}
            onSubmit={onSubmitHandler}
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
                  {t("hireMeForm.headline.ready")}
                </motion.span>
                {t("hireMeForm.headline.collaborate")}
              </p>
              <p className={styles["hireMeForm__form__headline__txt"]}>
                <motion.span
                  className={styles["hireMeForm__form__headline__txt__purple"]}
                  initial={{ y: "-2rem", opacity: 0, rotate: -15 }}
                  whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: "backOut", delay: 0.75 }}
                  viewport={{ once: true }}
                >
                  {t("hireMeForm.headline.share")}
                </motion.span>
                {t("hireMeForm.headline.details")}
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
                {t("hireMeForm.labels.label_name")}
              </label>
              <input
                id="name"
                className={styles["hireMeForm__form__userInfos__name"]}
                type="text"
                name="Name"
                placeholder={t("hireMeForm.placeholder.placeholder_name")}
                autoComplete="name"
                onFocus={() => onFieldFocus("name")}
                required
              />
              <ValidationError
                className={styles.customError}
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email" className={styles.srOnly}>
                {t("hireMeForm.labels.label_email")}
              </label>
              <input
                id="email"
                className={styles["hireMeForm__form__userInfos__email"]}
                type="email"
                name="Email"
                placeholder={t("hireMeForm.placeholder.placeholder_email")}
                autoComplete="email"
                onFocus={() => onFieldFocus("email")}
                required
              />
              {/* Conditionally render the error only if it hasn't been hidden */}
              {!hideErrors.email && (
                <ValidationError
                  className={styles.customError}
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              )}
              <label htmlFor="phone" className={styles.srOnly}>
                {t("hireMeForm.labels.label_phone")}
              </label>
              <input
                id="phone"
                className={styles["hireMeForm__form__userInfos__phone"]}
                type="phone"
                name="phone"
                placeholder={t("hireMeForm.placeholder.placeholder_phone")}
                autoComplete="phone"
                onFocus={() => onFieldFocus("phone")}
              />
              <ValidationError
                className={styles.customError}
                prefix="phone"
                field="phone"
                errors={state.errors}
              />
              <label htmlFor="organization" className={styles.srOnly}>
                {t("hireMeForm.labels.label_organization")}
              </label>
              <input
                id="organization"
                className={styles["hireMeForm__form__userInfos__organization"]}
                type="text"
                name="organization"
                placeholder={t(
                  "hireMeForm.placeholder.placeholder_organization"
                )}
                autoComplete="organization"
                onFocus={() => onFieldFocus("organization")}
              />
              <ValidationError
                className={styles.customError}
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
                  {t("hireMeForm.labels.label_object")}
                </label>
                <input
                  id="object"
                  className={
                    styles["hireMeForm__form__txtContent__txtProjInfo__object"]
                  }
                  type="text"
                  name="object"
                  placeholder={t("hireMeForm.placeholder.placeholder_object")}
                  autoComplete="object"
                  onFocus={() => onFieldFocus("object")}
                  required
                />
                <ValidationError
                  className={styles.customError}
                  prefix="Object"
                  field="object"
                  errors={state.errors}
                />
                <label htmlFor="deadline" className={styles.srOnly}>
                  {t("hireMeForm.labels.label_deadline")}
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
                  placeholder={t("hireMeForm.placeholder.placeholder_deadline")}
                  autoComplete="deadline"
                  onFocus={() => onFieldFocus("deadline")}
                />
                <ValidationError
                  className={styles.customError}
                  prefix="Deadline"
                  field="deadline"
                  errors={state.errors}
                />
              </div>
              <label htmlFor="message" className={styles.srOnly}>
                {t("hireMeForm.labels.label_message")}
              </label>
              <TextareaAutosize
                /* data-lenis-prevent */
                id="message"
                className={styles["hireMeForm__form__txtContent__message"]}
                name="Message"
                placeholder={t("hireMeForm.placeholder.placeholder_message")}
                minRows={minRows}
                maxRows={maxRows}
                onFocus={() => onFieldFocus("message")}
                required
              />
              <ValidationError
                className={styles.customError}
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>
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
                text={t("hireMeForm.button.cancel")}
                onClick={onClose}
                variant="secondaryShort"
                disabled={state.submitting}
              />
              <Button
                text={
                  state.submitting
                    ? t("hireMeForm.button.sending")
                    : t("hireMeForm.button.send")
                }
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
                  {t("hireMeForm.confirmation.message_sent")}
                </p>
                <p className={styles["confirmation__content__txt__subLine"]}>
                  {t("hireMeForm.confirmation.talkSoon")}
                </p>
                <p className={styles["confirmation__content__txt__thanks"]}>
                  {t("hireMeForm.confirmation.thanks")}
                </p>
              </div>
            </div>
            <Button
              text={t("hireMeForm.button.close")}
              variant="secondaryShort"
              onClick={onClose}
            />
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
