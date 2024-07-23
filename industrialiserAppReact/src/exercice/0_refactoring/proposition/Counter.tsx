import { useReducer } from "react";
const initialState = 0;

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatchCount] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatchCount({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatchCount({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatchCount({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;