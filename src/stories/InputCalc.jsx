import { IoIosBackspace } from "react-icons/io";
import PropTypes from "prop-types";
import "./InputCalc.css";
export const InputCalc = ({ arz, color, size }) => {
  return (
    <div className="wrapper-input-calc">
      <span>{arz ? arz : "ریال"}</span>
      <input className="input-calc" type="text" style={{ color: `${color}` }} />
      <IoIosBackspace className="backSpace" size={size ? size : "25"} />
    </div>
  );
};

InputCalc.propTypes = {
  arz: PropTypes.string,
  color: PropTypes.string,
};

InputCalc.defaultProps = {
  arz: null,
  color: null,
  size: null,
};
