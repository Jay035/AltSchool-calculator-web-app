import { ACTIONS } from "../App";

export default function NegativeButton({dispatch}) {
  return (
    <button 
      type="button" 
      className="Button" 
      onClick={() => {
        dispatch({ type: ACTIONS.NEGATE})
      }}
      >
      +/-
    </button>
  );
}
