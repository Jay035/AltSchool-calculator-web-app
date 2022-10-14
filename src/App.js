import { useReducer } from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  NEGATE: "negate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    // when you add digits
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }

      
      if (payload.digit === "." && state.operation !== null && state.previousOperand !== null && state.currentOperand == null) {
        return {
          ...state,
          currentOperand: `0${payload.digit}`
        }
      }
      
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    // when you click on an operation command 
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    // when you click on the equal-to button 
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.previousOperand == null ||
        state.currentOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    // when you click on the +/- button to negate
    case ACTIONS.NEGATE:
      if (
        state.currentOperand != null &&
        state.currentOperand !== 0 &&
        !state.currentOperand.includes("-")
      ) {
        console.log("negate");
        return {
          ...state,
          currentOperand: `-${state.currentOperand}`,
        };
      else if(state.currentOperand === null && 
       state.previousOperand === null && 
       state.operation === null){
         return state
      }

      } else {
        return {
          ...state,
          currentOperand: state.currentOperand.slice(1),
        };
      }

    // when the delete/backspace button is clicked
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) {
        return state;
      }

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    // when the clear / C button is clicked
    case ACTIONS.CLEAR:
      return {};

    default:
  }
}

// perform mathematical calculations
const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";

  let computation = "";

  // check for the operation command entered by the user
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "%":
      computation = prev % current;
      break;
    default:
  }

  return computation.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0
})

function formatOperand(operand){
  if(operand == null) return
  const [integer, decimal] = operand.split('.');
  if(decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
      {/* <ContextProvider> */}
      <section className="calculator">
        <h1>Calculator</h1>
        <div className="container">
          <Display
            currentOperand={currentOperand}
            previousOperand={previousOperand}
            operation={operation}
            formatOperand={formatOperand}
          />
          {/* keypad */}
          <Keypad dispatch={dispatch} />
        </div>
        <div className="attribution" style={{ textAlign: "center" }}>
          Challenge by
          <a href="https://twitter.com/AltSchoolAfrica"> AltSchool</a>. Coded by
          <a href="https://twitter.com/Chibuike035"> CodexJay</a>.
        </div>
      </section>
      {/* </ContextProvider> */}
    </div>
  );
}

export default App;
