import { ACTIONS } from "../App";

export default function EqualButton({ dispatch }) {
  return (
    <button
      type="button"
      className="Button equal"
      onClick={() => {
        dispatch({ type: ACTIONS.EVALUATE });
      }}
    >
      =
    </button>
  );
}
