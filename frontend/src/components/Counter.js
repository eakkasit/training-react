import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment())
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 20 });
    dispatch(counterActions.increase(20))
  };

//   const increaseHandler5 = () => {
//     dispatch({ type: 'increase5' });
//   };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 20</button>
        {/* <button onClick={increaseHandler5}>Increase by 5</button> */}
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
