import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increase, toggleVisibility } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const visible = useSelector(state => state.counter.visible)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(toggleVisibility())
  };


  console.log()
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{visible && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
