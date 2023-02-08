import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    // configure store will merge all reducers into one big reducer
    reducer: { counter: counterReducer, auth: authReducer}
});

export default store;
