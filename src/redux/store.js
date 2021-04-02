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

import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';

/* REDUX */

import checkoutReducer from './checkout/checkoutSlice';
import storage from './storage';

/* UTILS */

import { isBrowser } from 'utils/SystemUtils';


/**
 * Redux store with support for persisting Redux store locally and syncing Redux store state across tabs.
 */

const rootReducer = combineReducers({
    checkout: checkoutReducer
});

const IGNORED_ACTIONS = [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE];

const IS_BROWSER = isBrowser();

const store = configureStore({
    reducer: persistReducer({
        key: 'root',
        storage,
    }, rootReducer),
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: IGNORED_ACTIONS
        }
    }).concat(IS_BROWSER ? createStateSyncMiddleware({ blacklist: IGNORED_ACTIONS }) : [])
});

if (IS_BROWSER) {
    initStateWithPrevTab(store);
}

export default store;
