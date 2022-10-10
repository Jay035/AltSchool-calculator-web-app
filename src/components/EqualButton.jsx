import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

export default function EqualButton() {
  const { handleCalcFunction } = useContext(NumberContext);

  return (
    <button type="button" className="Button equal" onClick={handleCalcFunction}>
      =
    </button>
  );
}
