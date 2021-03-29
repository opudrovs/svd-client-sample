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
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export default store;
