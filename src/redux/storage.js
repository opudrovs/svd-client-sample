/* REDUX */

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

/* UTILS */

import { isBrowser } from 'utils/SystemUtils';


/**
 * Dummy server-side storage.
 * Workaround for redux-persist SSR errors, based on the following suggestion:
 * https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
 */

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        }
    };
};

const storage = isBrowser() ? createWebStorage('local') : createNoopStorage();

export default storage;
