import { ACTIONS } from "../App";

export default function OperationButton({ operation, dispatch }) {

  return (
    <button
      type="button"
      name={operation}
      className="operation"
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
}
