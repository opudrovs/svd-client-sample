/**
 * String utility functions
 */

export const convertDataStringToHtml =  (inputString, tag) => {
    return `<p>${inputString
        .replace(/\\n\\n/gm, `</${tag}><${tag}>`)}</p>`
        .replace(/\\n/gm, '<br>');
};
