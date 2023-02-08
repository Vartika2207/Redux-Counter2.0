import classes from './Counter.module.css';
/* store hook is a custom made by react-redux hook, gives direct access to store
   useSelector allow is to automatically select a part of state management by store
   useDispatch allow to dispatch action

   connect: helps connect class-based components to redux (can be used with fbc)
 */
import { useSelector, useDispatch } from 'react-redux';
import { counterActions   } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch();

  // get access to data managed in store
  // we pass a function managed by react which determines which piece of data need to be extracted from store
  // using this selector react-redux will automatically set up a subscription to redux store for Counter component
  // hence compoeent will be updated and will receive latest counter automatically whenever data changes in redux store
  const counter = useSelector(state => state.counter.counter);

  // retreive diff piece of data from state
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };


  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toogleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>COUNTER: {counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
class Counter extends Component {
  incrementHandler() {
    console.log('increment called');
    this.props.increment();
  };

  decrementHandler() {
    console.log('decrement called');
    this.props.decrement();
  };

  toggleCounterHandler() {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>COUNTER : {this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>+</button>
          <button onClick={this.decrementHandler.bind(this)}>-</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
};

// maps redux state to props received in Counter-component
const mapStateToProps = state => {
  return ({
    // binding lhs key counter prop with rhs counter from redux state
    counter: state.counter,
  });
}

// store dispatch functions in props
const mapDispatchToProps = dispatch => {
  return ({
    // keys are prop name, inside dispatch we have action
    increment: () => dispatch({ type: 'increment '}),
    decrement: () => dispatch({ type: 'decrement '})
  });
}

// connect() executes and return new function and again newfunction(Counter) return new function
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

*/