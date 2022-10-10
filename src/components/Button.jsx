import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

export default function Button({ label, className }) {
  const { handleDisplayValue } = useContext(NumberContext);

  return (
    <button
      type="button"
      name={label}
      className={className}
      onClick={() => handleDisplayValue(label)}
    >
      {label}
    </button>
  );
}
