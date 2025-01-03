/**
 * System utility functions
 */

/**
 * Detects if the browser (window) is available.
 * @return {bool} The app is running in the browser
 */
export const isBrowser = () => {
  return typeof window !== 'undefined';
};
