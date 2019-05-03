/*
    when we call a “debounced” function,
    it guarantees that all other future in the closest ms milliseconds will be ignored.
 */

export const  debounce = (func, milliseconds) => {
    let validCall = true;
    return function (...args) {
        if(validCall === false) return;
        validCall = false;
        func.apply(this, args);
        setTimeout(() => validCall = true, milliseconds);
    }
};

const log = debounce(console.log, 5000);

log('alpha'); // alpha
setTimeout(() => log('alpha2000'), 2000); // ignored
setTimeout(() => log('alpha5000'), 5000); // alpha5000
setTimeout(() => log('alpha7000'), 7000); // ignored
setTimeout(() => log('alpha8000'), 8000); // ignored
setTimeout(() => log('alpha11000'), 11000); // alpha11000
