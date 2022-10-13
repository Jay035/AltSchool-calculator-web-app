import backspaceIcon from '../backspace.png';
import { ACTIONS } from "../App";

export default function BackspaceButton({ dispatch }) {
  return (
    <button 
      type="button" 
      className="Button" 
      onClick={() => {
        dispatch({ type: ACTIONS.DELETE_DIGIT})
      }}
    >
      <img src={backspaceIcon} alt="backspace icon" />
    </button>
  );
}
