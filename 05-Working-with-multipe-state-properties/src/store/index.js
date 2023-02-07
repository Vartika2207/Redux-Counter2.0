import { createStore } from 'redux';

const redux = require('redux');

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    // redux exchange existing state with new once, it doesn't merge states
    if(action.type === 'increment') {
        console.log('counter incremented in index.js');
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if(action.type === 'decrement') {
        console.log('counter decremented in index.js');
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if(action.type === 'toggle') {
        console.log('counter toggled in index.js');
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
};

// redux store
const store = redux.createStore(counterReducer);

export default store;
