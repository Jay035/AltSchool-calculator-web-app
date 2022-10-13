import BackspaceButton from "./BackspaceButton";
import ClearButton from "./ClearButton";
import EqualButton from "./EqualButton";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import NegativeButton from "./NegativeButton";

export default function Keypad({dispatch}) {
  return (
    <div className="keypad">
      <div className="col">
        <BackspaceButton dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <NegativeButton dispatch={dispatch} />
      </div>
      <div className="col">
        <ClearButton dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
      </div>
      <div className="col">
        <OperationButton operation="%" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
      </div>
      <div className="col">
        <OperationButton operation="/" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <EqualButton dispatch={dispatch} />
      </div>
    </div>
  );
}
