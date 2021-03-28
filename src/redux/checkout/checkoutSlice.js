/* LIBRARIES */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // TODO: Add product to cart, using state and action payload.
        },
        removeProduct: (state, action) => {
            // TODO: Remove product from cart, using state and action payload.
        }
    }
});

export const { addProduct, removeProduct } = checkoutSlice.actions;

export const selectNumberOfProducts = state => state.checkout.products.length;

export default checkoutSlice.reducer;
