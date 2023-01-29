import PropTypes from "prop-types";
import "./ButtonCalc.css";
export const ButtonCalc = ({
  primary,
  backgroundColor,
  color,
  width,
  size,
  content,
  ...props
}) => {
  const mode = primary ? "button-calc--primary" : "button-calc--secondary";
  return (
    <button
      type="button"
      className={["button-calc", `button-calc--${size}`, mode].join(" ")}
      style={{backgroundColor:`${backgroundColor}`,color:`${color}`,width:`${width}`}}
      {...props}
    >
      {content}
    </button>
  );
};

ButtonCalc.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  content: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

ButtonCalc.defaultProps = {
  primary: false,
  backgroundColor: null,
  size: "medium",
  onclick: undefined,
};
