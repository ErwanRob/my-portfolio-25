import { useState } from "react";
import styles from "./FeedBackForm.module.scss";

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);

  const getEmoticon = (value) => {
    if (value < 2) {
      return <span>😢</span>;
    } else if (value < 4) {
      return <span>😞</span>;
    } else if (value < 6) {
      return <span>😐</span>;
    } else if (value < 8) {
      return <span>🙂</span>;
    } else {
      return <span>😀</span>;
    }
  };

  const handleChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <form
      className={styles.feedBackForm}
      action="https://formspree.io/f/yourFormID" // need to replace endpoint
      method="POST"
    >
      {" "}
      <div className={styles["feedBackForm__name"]}>
        <input type="text" name="name" placeholder="Your name" required />
      </div>
      <div className={styles["feedBackForm__rating"]}>
        <label htmlFor="rating">Your Rating:</label>
        <input
          type="range"
          id="rating"
          name="rating"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={handleChange}
        />
        <span>{getEmoticon(rating)}</span>
      </div>
      <div>
        <textarea
          name="feedback"
          placeholder="Add your feedback"
          rows="4"
          required
        />
      </div>
      {/*FormSpree anti-spam a ne pas oublier */}
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedBackForm;
