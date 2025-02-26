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

const FeedBackForm = () => {
  const [rating, setRating] = useState(5);

  const [state, handleSubmit] = useForm("mnnjkyzq"); // formSpree hook with its id

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
        action="https://formspree.io/f/mnnjkyzq"
        method="POST"
        onSubmit={handleSubmit}
        initial={{ opacity: 1, x: "0" }}
        animate={state.succeeded && { opacity: 0, x: "-110%" }}
        transition={{ duration: 0.4, ease: "backIn" }}
      >
        <div className={styles["feedBackForm__name"]}>
          <input
            className={styles["feedBackForm__name__input"]}
            type="text"
            name="Name"
            placeholder="Full Name"
            required
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <div className={styles["feedBackForm__rating"]}>
          <label
            className={styles["feedBackForm__rating__label"]}
            htmlFor="rating"
          >
            Your Rating :
          </label>
          <ReactSlider
            className={styles["feedBackForm__rating__slider"]}
            //using renderThumb to customize each thumb
            renderThumb={(props, state) => (
              <div {...props} className={styles["feedBackForm__rating__thumb"]}>
                {state.valueNow}
              </div>
            )}
            // Using renderTrackto customize each track segment
            renderTrack={(props, state) => {
              const trackClass =
                state.index === 0
                  ? styles["feedBackForm__rating__track-left"]
                  : styles["feedBackForm__rating__track-right"];
              return <div {...props} className={trackClass} />;
            }}
            value={rating}
            onChange={(val) => setRating(val)}
            min={0}
            max={10}
            step={1}
          />
          {/* Hidden input to submit the value */}
          <div className={styles["feedBackForm__rating__emoji"]}>
            {getEmoticon(rating)}
          </div>
          <input type="hidden" name="Rating" value={rating} />
        </div>
        <div className={styles["feedBackForm__message"]}>
          <label
            htmlFor="message"
            className={styles["feedBackForm__message__sr-only"]}
          >
            Message
          </label>
          <TextareaAutosize
            data-lenis-prevent
            id="Feedback"
            className={styles["feedBackForm__message__textarea"]}
            name="Feedback"
            placeholder="Found a bug ? Have a suggestion ? Feedback is welcome and greatly appreciated! 😊"
            minRows={4}
            maxRows={4}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />
        <Button
          type="submit"
          text="Send Feedback"
          variants="primary"
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
          Thank you for your feedback!
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
