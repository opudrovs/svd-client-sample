/**
 * Array utility functions
 */

export const partitionArray = (inputArray, callback) => inputArray.reduce(
    (result, element) => {
        result[callback(element) ? 0 : 1].push(element);
        return result;
    },
    [[], []]
);
