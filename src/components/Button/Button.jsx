import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  href,
  download,
  type,
  icon,
  svg,
  text,
  onClick,
  variant = "primary",
  iconSide = "left",
  shadowOn = false,
  disabled = false,
}) => {
  const renderIcon = () => {
    if (svg) {
      if (typeof svg === "string") {
        return <img className={styles.svgContainer} src={svg} alt="icon" />;
      }
      return svg;
    } else if (icon) {
      return <FontAwesomeIcon icon={icon} />;
    }
    return null;
  };

  const buttonClass = `${styles.button} ${styles[variant]} ${
    shadowOn ? styles.shadow : null
  }`;

  if (href) {
    return (
      //Render a tag if href
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        {iconSide === "left" && renderIcon()}
        {text}
        {iconSide === "right" && renderIcon()}
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
      {iconSide === "left" && renderIcon()}
      {text}
      {iconSide === "right" && renderIcon()}
    </button>
  );
};

// Prop Types Validation
Button.propTypes = {
  href: PropTypes.string,
  download: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object, // Icon is optional but should be a FontAwesomeIcon
  svg: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // onClick is optional but should be a function if provided
  variant: PropTypes.oneOf([
    "primary",
    "primaryShort",
    "secondary",
    "secondaryShort",
    "tertiary",
    "quatro",
    "danger",
  ]), // Only specific values are allowed
  iconSide: PropTypes.oneOf(["left", "right"]), // Only specific values are allowed
  shadowOn: PropTypes.bool,
  disabled: PropTypes.bool, // Disabled is optional and should be a boolean
};

export default Button;
