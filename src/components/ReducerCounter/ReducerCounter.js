import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Subtract
      </button>
      <p>Count: {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Add
      </button>
    </>
  );
}

export default ReducerCounter;
