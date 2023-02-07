import { createStore } from 'redux';

const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    return state;
};

// redux store
const store = redux.createStore(counterReducer);

export default store;
