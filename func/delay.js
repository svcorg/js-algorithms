/*
    when we call a “delayed” function,
    it guarantees that it is called after closest ms milliseconds.
 */

export const delay = (func, milliseconds) => {
    return function (...args) {
        setTimeout(() => func.apply(this, args), milliseconds);
    };
};

const log = delay(console.log, 5000);

log('alpha'); // logs alpha after 5 sec
