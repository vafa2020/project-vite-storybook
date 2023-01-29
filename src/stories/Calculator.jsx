import { useState } from "react";
import { Modal } from "./Modal";
import PropTypes from "prop-types";
import "./Calculator.css";

export const Calculator = ({ color, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [calcValue, setCalcValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <input
        defaultValue={result}
        onFocus={() => {
          setShowModal(true);
        }}
      />
      {showModal && (
        <Modal
          title={title}
          setShowModal={setShowModal}
          setCalcValue={setCalcValue}
          calcValue={calcValue}
          setResult={setResult}
          result={result}
          color={color}
        />
      )}
    </div>
  );
};
Calculator.propTypes = {
  color: PropTypes.string.isRequired,
};

Calculator.defaultProps = {
  color: null,
};
