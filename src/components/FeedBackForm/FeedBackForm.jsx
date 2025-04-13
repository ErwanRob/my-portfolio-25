import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./FeedBackForm.module.scss";
import validationStyles from "./FeedBackValidation.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import ReactSlider from "react-slider";
import { motion } from "motion/react";
import Button from "../Button/Button";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const FeedBackForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mnnjkyzq"); // formSpree hook with its id
  const [rating, setRating] = useState(5);

  const AnimatedEmoji = ({ children }) => (
    <motion.span
      initial={{
        rotate: -15,
      }}
      animate={{ rotate: 0 }}
    >
      {children}
    </motion.span>
  );

  AnimatedEmoji.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const getEmoticon = (value) => {
    if (value < 2) {
      return <AnimatedEmoji>😢</AnimatedEmoji>;
    } else if (value < 4) {
      return <AnimatedEmoji>😞</AnimatedEmoji>;
    } else if (value < 6) {
      return <AnimatedEmoji>😐</AnimatedEmoji>;
    } else if (value < 8) {
      return <AnimatedEmoji>🙂</AnimatedEmoji>;
    } else {
      return <AnimatedEmoji>😀</AnimatedEmoji>;
    }
  };

  return (
    <>
      <motion.form
        className={styles.feedBackForm}
        onSubmit={handleSubmit}
        initial={{ opacity: 1, x: "0" }}
        animate={state.succeeded && { opacity: 0, x: "-110%" }}
        transition={{ duration: 0.4, ease: "backIn" }}
      >
        <div className={styles["feedBackForm__name"]}>
          <label
            htmlFor="name"
            className={styles["feedBackForm__name__sr-only"]}
          >
            {t("feedbackForm.labels.label_name")}
          </label>
          <input
            className={styles["feedBackForm__name__input"]}
            id="name"
            name="name"
            type="text"
            placeholder={t("feedbackForm.placeholder.placeholder_name")}
            required
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <div className={styles["feedBackForm__rating"]}>
          <label
            className={styles["feedBackForm__rating__label"]}
            htmlFor="rating"
          >
            {t("feedbackForm.labels.label_rating")}
          </label>
          <ReactSlider
            className={styles["feedBackForm__rating__slider"]}
            //using renderThumb to customize each thumb
            renderThumb={(props, state) => {
              // eslint-disable-next-line react/prop-types
              const { key, ...restProps } = props;
              return (
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ scale: 1.125 }}
                  whileTap={{ scale: 1.125, rotate: 360 }}
                  key={key}
                  {...restProps}
                  className={styles["feedBackForm__rating__thumb"]}
                >
                  {state.valueNow}
                </motion.div>
              );
            }}
            // Using renderTrackto customize each track segment
            renderTrack={(props, state) => {
              // eslint-disable-next-line react/prop-types
              const { key, ...restProps } = props;
              const trackClass =
                state.index === 0
                  ? styles["feedBackForm__rating__track-left"]
                  : styles["feedBackForm__rating__track-right"];
              return <div key={key} {...restProps} className={trackClass} />;
            }}
            value={rating}
            onChange={(val) => setRating(val)}
            min={0}
            max={10}
            step={0.5}
          />
          {/* Hidden input to submit the value */}
          <div className={styles["feedBackForm__rating__emoji"]}>
            {getEmoticon(rating)}
          </div>
          <input type="hidden" name="rating" value={rating} />
        </div>
        <div className={styles["feedBackForm__message"]}>
          <label
            htmlFor="message"
            className={styles["feedBackForm__message__sr-only"]}
          >
            {t("feedbackForm.labels.label_message")}
          </label>
          <TextareaAutosize
            data-lenis-prevent
            id="message"
            className={styles["feedBackForm__message__textarea"]}
            name="message"
            placeholder={t("feedbackForm.placeholder.placeholder_message")}
            minRows={4}
            maxRows={4}
            required
          />
          <ValidationError
            prefix="message"
            field="message"
            errors={state.errors}
          />
        </div>
        <input
          type="text"
          name="_gotcha"
          className={styles.hiddenInput}
          tabIndex="-1"
          autoComplete="off"
        />
        <Button
          type="submit"
          text={t("feedbackForm.submit")}
          variant="primary"
          disabled={state.submitting}
        />
      </motion.form>
      <motion.div
        className={validationStyles.feedBackValidation}
        initial={{ x: "100%" }}
        animate={state.succeeded && { x: "0%" }}
        transition={{
          duration: 0.5,
          type: "spring",
          bounce: 0.4,
        }}
      >
        <motion.p
          className={validationStyles["feedBackValidation__txt"]}
          initial={{ opacity: 0, x: "2%" }}
          animate={state.succeeded && { opacity: 1, x: "0%" }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          {t("feedbackForm.thanks")}
        </motion.p>
        <motion.div
          className={validationStyles["feedBackValidation__checkMark"]}
          initial={{ opacity: 0, rotate: 45 }}
          animate={state.succeeded && { opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.4,
            delay: 0.6,
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FeedBackForm;
