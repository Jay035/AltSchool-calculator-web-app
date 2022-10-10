import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

export default function ClearButton() {
  const { handleClearValue } = useContext(NumberContext);

  return (
    <button type="button" className="Button clear-btn" onClick={ handleClearValue}>
      C
    </button>
  );
}
