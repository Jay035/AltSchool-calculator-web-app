import { createContext, useState } from "react";

export const NumberContext = createContext();

export default function NumberProvider({ children }) {
  const [result, setResult] = useState("");

  // display value function
  const handleDisplayValue = (num) => {
    if ((!result.includes(".") || num !== ".") && result.length < 20) {
      setResult(result.concat(num));
    }
  };

  // clear value function
  const handleClearValue = () => {
    setResult("");
  };

  // backspace function
  const handleBackspaceButton = () => {
    if (result !== "") {
      const deletedNumber = result.slice(0, result.length - 1);
      setResult(deletedNumber);
    }
  };

  const handleCalcFunction = (e) => {
    setResult(eval(result).toString());
  };

  const handleToggleNegative = () => {
    if (result && result > 0) {
      setResult(`-${result}`);
    } else {
      const positiveNumber = result.slice(1);
      setResult(positiveNumber);
    }
  };

  //   const doMath = () => {
  //     if (result && storedResult) {
  //       switch (functionType) {
  //         case "+":
  //           setStoredResult(
  //               `${
  //                 Math.round(
  //                   `${(parseFloat(storedResult) + parseFloat(result)) * 100}`
  //                 ) / 100
  //               }`
  //           );
  //           break;
  //         case "-":
  //           setStoredResult(
  //             `${
  //               Math.round(
  //                 `${(parseFloat(storedResult) - parseFloat(result)) * 1000}`
  //               ) / 1000
  //             }`
  //           );
  //           break;
  //         case "/":
  //           setStoredResult(
  //             `${
  //               Math.round(
  //                 `${(parseFloat(storedResult) / parseFloat(result)) * 1000}`
  //               ) / 1000
  //             }`
  //           );
  //           break;
  //         case "*":
  //           setStoredResult(
  //             `${
  //               Math.round(
  //                 `${parseFloat(storedResult) * parseFloat(result) * 1000}`
  //               ) / 1000
  //             }`
  //           );
  //           break;
  //         case "%":
  //           setStoredResult(
  //             `${
  //               Math.round(
  //                 `${(parseFloat(storedResult) % parseFloat(result)) * 1000}`
  //               ) / 1000
  //             }`
  //           );
  //           break;
  //         default:
  //           break;
  //       }
  //       setResult("");
  //     }
  //   };

  return (
    <NumberContext.Provider
      value={{
        result,
        setResult,
        handleDisplayValue,
        // doMath,
        handleBackspaceButton,
        handleCalcFunction,
        handleClearValue,
        handleToggleNegative,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}
