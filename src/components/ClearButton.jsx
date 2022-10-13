import { ACTIONS } from "../App";

export default function ClearButton({ dispatch }) {
  return (
    <button
      type="button"
      className="Button clear-btn"
      onClick={() => {
        dispatch({ type: ACTIONS.CLEAR });
      }}
    >
      C
    </button>
  );
}
