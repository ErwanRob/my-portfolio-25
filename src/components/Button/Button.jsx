import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ text, onClick, variant = "primary", disabled = false }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

// Prop Types Validation
Button.propTypes = {
  text: PropTypes.string.isRequired, // Text is required and should be a string
  onClick: PropTypes.func, // onClick is optional but should be a function if provided
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]), // Only specific values are allowed
  disabled: PropTypes.bool, // Disabled is optional and should be a boolean
};

export default Button;
