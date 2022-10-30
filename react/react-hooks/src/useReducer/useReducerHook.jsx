import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  const increment = () => dispatch({ type: ACTIONS.INCREMENT });

  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return (
    <>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 15px" }}>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default UseReducerHook;
