import { useReducer } from "react";

const initialState = 0;
const Reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("unexpected action");
  }
};

 const UseReducer = () => {
   const [ count, dispatch ] = useReducer(Reducer, initialState);

   return <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch("add")}>Add</button>
    <button onClick={() => dispatch("subtract")}>Subtract</button>
    <button onClick={() => dispatch("reset")}>Reset</button>
   </div>
 }

 export default UseReducer;