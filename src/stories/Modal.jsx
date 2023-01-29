import { useEffect, useRef, useState } from "react";
import { IoIosBackspace } from "react-icons/io";
import "./Calculator.css";

export const Modal = ({
  setShowModal,
  setCalcValue,
  calcValue,
  setResult,
  title,
  color,
}) => {
  const inputRef = useRef(null);
  const [operation, setOperation] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  });
  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i--) {
      const element = (
        <button key={i} onClick={(e) => updateCalc(i.toString())}>
          {i}
        </button>
      );
      digits.push(element);
    }
    return digits;
  };
  const ops = ["/", "*", "+", "-"];
  const updateCalc = (value) => {
    let result;
    if (
      (value === "0" && calcValue === "") ||
      (value === "00" && calcValue === "") ||
      (value === "000" && calcValue === "") ||
      (ops.includes(value) && calcValue === "") ||
      (ops.includes(value) && ops.includes(calcValue.slice(-1)))
    ) {
      setOperation("");
      return;
    }

    setCalcValue(calcValue + value);
    // if (!ops.includes(value)) {
    //   result = eval(calcValue + value).toString();
    //   setResult(result);
    // }
    return result;
  };
  const removeHandler = () => {
    setOperation("");
    setCalcValue("");
    setResult("");
  };
  const operationFunc = (event) => {
    setOperation(event.target.textContent);
    updateCalc(event.target.textContent);
  };
  const calculator = () => {
    setResult(eval(calcValue));
  };
  const backspaceFun = () => {
    setCalcValue(calcValue.slice(0, -1));
  };
  const keyboardFun = (value) => {
    console.log(value);

    if (value === "Enter") {
      calculator();
    } else if (value === "Backspace") {
      backspaceFun();
    } else if (value === "c") {
      removeHandler();
    } else if (ops.includes(value)) {
      setOperation(value);
      updateCalc(value);
    } else if (
      value === "9" ||
      value === "8" ||
      value === "7" ||
      value === "6" ||
      value === "5" ||
      value === "4" ||
      value === "3" ||
      value === "2" ||
      value === "1" ||
      value === "0"
    ) {
      updateCalc(value);
    } else {
      return;
    }
  };
  return (
    <div className="container">
      <div className="header">
        <p className="title-header" style={{ color: `${color}` }}>
          {title}
        </p>
        <div className="header-top">
          <span
            className="clear"
            onClick={removeHandler}
            onKeyUp={removeHandler}
          >
            C
          </span>
          <span className="operation-header">{operation}</span>
        </div>
        <div className="header-body">
          <IoIosBackspace
            className="backSpace"
            size={30}
            onClick={backspaceFun}
          />
          <input
            className="input-calc"
            defaultValue={calcValue}
            ref={inputRef}
            onKeyUp={(e) => {
              keyboardFun(e.key);
            }}
          />
          <span>ریال</span>
        </div>
      </div>
      <div className="body-calc">
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("000")}>000</button>
          <button onClick={() => updateCalc("00")}>00</button>
          <button onClick={() => updateCalc("0")}>0</button>
        </div>
        <div className="operators" style={{ backgroundColor: `${color}` }}>
          <button onClick={operationFunc}>/</button>
          <button onClick={operationFunc}>*</button>
          <button onClick={operationFunc}>+</button>
          <button onClick={operationFunc}>-</button>
        </div>
      </div>
      <div className="controller">
        <button
          className="button-laghve"
          style={{ color: `${color}` }}
          onClick={() => setShowModal(false)}
        >
          لغو
        </button>
        <button
          style={{ backgroundColor: `${color}` }}
          className="button-taeed"
          onClick={calculator}
        >
          تایید
        </button>
      </div>
    </div>
  );
};
