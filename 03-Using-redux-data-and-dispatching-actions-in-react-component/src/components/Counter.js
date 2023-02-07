import classes from './Counter.module.css';
/* store hook is a custom made by react-redux hook, gives direct access to store
   useSelector allow is to automatically select a part of state management by store
   useDispatch allow to dispatch action
 */
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  // get access to data managed in store
  // we pass a function managed by react which determines which piece of data need to be extracted from store
  // using this selector react-redux will automatically set up a subscription to redux store for Counter component
  // hence compoeent will be updated and will receive latest counter automatically whenever data changes in redux store
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>COUNTER: {counter}</div>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
