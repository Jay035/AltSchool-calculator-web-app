import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

export default function NegativeButton() {
  const { handleToggleNegative } = useContext(NumberContext);

  return (
    <button type="button" className="Button" onClick={handleToggleNegative}>
      +/-
    </button>
  );
}
