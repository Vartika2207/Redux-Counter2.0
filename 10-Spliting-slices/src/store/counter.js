import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    // preparing slice of a global state
    name: 'counter',
    initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;


// not importing entire slice, just reducer part
export default counterSlice.reducer;
