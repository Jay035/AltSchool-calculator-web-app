import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

export default function BackspaceButton({ label }) {
  const { handleBackspaceButton } = useContext(NumberContext);

  return (
    <button type="button" className="Button" onClick={handleBackspaceButton}>
      {label}
    </button>
  );
}
