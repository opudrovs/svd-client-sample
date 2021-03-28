/* LIBRARIES */

import { configureStore } from '@reduxjs/toolkit';

/* REDUX */

import checkoutReducer from './checkout/checkoutSlice';

export const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
    }
});
