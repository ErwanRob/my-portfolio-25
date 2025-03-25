import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  href,
  download,
  type,
  icon,
  text,
  onClick,
  variant = "primary",
  iconSide = "left",
  disabled = false,
}) => {
  //Render a tag if href
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles[variant]}`}
      >
        {iconSide === "left" && icon && <FontAwesomeIcon icon={icon} />}
        {text}
        {iconSide === "right" && icon && <FontAwesomeIcon icon={icon} />}
      </a>
    );
  }
  /*       {icon && <FontAwesomeIcon icon={icon} />} {text}
      </a>
    );
  } */

  //otherwise, button
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconSide === "left" && icon && <FontAwesomeIcon icon={icon} />} {text}
      {iconSide === "right" && icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

// Prop Types Validation
Button.propTypes = {
  href: PropTypes.string,
  download: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object, // Icon is optional but should be a FontAwesomeIcon
  text: PropTypes.string.isRequired, // Text is required and should be a string
  onClick: PropTypes.func, // onClick is optional but should be a function if provided
  variant: PropTypes.oneOf([
    "primary",
    "primaryShort",
    "secondary",
    "secondaryShort",
    "tertiary",
    "danger",
  ]), // Only specific values are allowed
  iconSide: PropTypes.oneOf(["left", "right"]), // Only specific values are allowed
  disabled: PropTypes.bool, // Disabled is optional and should be a boolean
};

export default Button;
