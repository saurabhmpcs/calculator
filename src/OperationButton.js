import { ACTIONS } from "./src/App";
export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
