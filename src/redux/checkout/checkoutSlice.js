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
            let existingProduct = state.products.find(element => element.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(element => element.id !== action.payload);
        }
    }
});

export const { addProduct, removeProduct } = checkoutSlice.actions;

export const selectProducts = state => state.checkout.products;

export default checkoutSlice.reducer;
