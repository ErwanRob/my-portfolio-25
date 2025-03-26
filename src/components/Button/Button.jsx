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
  shadowOn = false,
  disabled = false,
}) => {
  //Render a tag if href

  const buttonClass = `${styles.button} ${styles[variant]} ${
    shadowOn ? styles.shadow : null
  }`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        {iconSide === "left" && icon && <FontAwesomeIcon icon={icon} />}
        {text}
        {iconSide === "right" && icon && <FontAwesomeIcon icon={icon} />}
      </a>
    );
  }

  //otherwise, button
  return (
    <button
      className={buttonClass}
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
  text: PropTypes.string.isRequired,
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
  shadowOn: PropTypes.bool,
  disabled: PropTypes.bool, // Disabled is optional and should be a boolean
};

export default Button;
