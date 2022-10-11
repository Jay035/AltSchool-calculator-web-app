import { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import backspaceIcon from '../backspace.png';

export default function BackspaceButton({ label }) {
  const { handleBackspaceButton } = useContext(NumberContext);

  return (
    <button type="button" className="Button" onClick={handleBackspaceButton}>
      <img src={backspaceIcon} alt="backspace icon" />
    </button>
  );
}
