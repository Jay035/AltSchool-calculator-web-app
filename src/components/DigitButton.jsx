import { ACTIONS } from "../App"

export default function DigitButton({ digit, dispatch }) {
  return (
    <button
      type="button"
      name={digit}
      className="digit"
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})
      }}
    >
      {digit}
    </button>
  )
}
