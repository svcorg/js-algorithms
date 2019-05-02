/*
    when we call a “delayed” function,
    it guarantees that it is called after closest ms milliseconds.
 */

export function sum(...sumArgs) {
    let sum = 0;
    const tempFun = function (...args) {
        for(let index = 0; index < args.length; index += 1) {
            sum = sum + +args[index];
        }
        return tempFun;
    };
    tempFun.toString = () => sum;
    return tempFun(sumArgs);
}

console.log(sum(1)(2)(3,4));