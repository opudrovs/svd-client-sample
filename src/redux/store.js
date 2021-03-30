/* LIBRARIES */

import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer
} from 'redux-persist';

/* REDUX */

import checkoutReducer from './checkout/checkoutSlice';
import storage from './storage';


/**
 * Redux store with support for persisting Redux data.
 */

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    checkout: checkoutReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
        }
    })
});

export default store;
