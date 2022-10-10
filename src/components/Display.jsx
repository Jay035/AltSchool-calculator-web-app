import { useContext } from "react";
import { NumberContext } from "./NumberProvider";

export default function Display() {
  const { result } = useContext(NumberContext);

  return (
    <div className="display">
      {!result.length ? '0' : result }
    </div>
  );
}
