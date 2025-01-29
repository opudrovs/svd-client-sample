import storageModule from 'redux-persist/lib/storage/createWebStorage';

// Handle both ES Module and CommonJS exports. This workaround ensures compatibility
// with module resolution differences between Webpack and Turbopack.
const createWebStorage = storageModule.default || storageModule;

import { isBrowser } from 'utils/systemUtils';

/**
 * Dummy server-side storage.
 * Workaround for redux-persist SSR errors, based on the following suggestion:
 * https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
 */
const createNoopStorage = () => {
  return {
    getItem(_key) {
      void _key;
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      void _key;
      return Promise.resolve(value);
    },
    removeItem(_key) {
      void _key;
      return Promise.resolve();
    },
  };
};

const storage = isBrowser() ? createWebStorage('local') : createNoopStorage();

export default storage;
