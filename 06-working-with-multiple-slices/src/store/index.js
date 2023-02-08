// import { createStore } from 'redux';
// configureStore like createStore creates a store but it makes merging multiple reducers
import { createSlice, configureStore } from '@reduxjs/toolkit';

const redux = require('redux');

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    // preparing slice of a global state
    name: 'counter',
    initialState: initialState,
    reducers: {
        // methods
        increment(state) {
            // allowed to mutate state
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// cS.reducer we can get access to reducers set up in slice and this can cause problrm in bigger application hence configure store used
// const store = createStore(counterSlice.reducer);
const store = configureStore({
    // configure store will merge all reducers into one big reducer
    reducer: { counter: counterSlice.reducer, }
});

/*NOT NEEDED
const counterReducer = (state = initialState, action) => {
    // redux exchange existing state with brand new state, it doesn't merge states
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
const store = createStore(counterReducer);
*/

export default store;
