/*
  Currying is a way of constructing functions that allows partial application of a function’s arguments.
  What this means is that you can pass all of the arguments a function is expecting and get the result,
  or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments.
 */

export const currying = (func, ...args) => {
  const funcArguments = [];
  const funcLength = func.length;
  const tempFun = (funcArgs) => {
    funcArguments.splice(funcArguments.length, 0, funcArgs);
    if (funcLength > funcArguments.length) {
      return tempFun;
    }
    return func.apply(this, funcArguments);
  };
  return tempFun(args);
};


const sum = (a, b, c, d) => {
  return +a + b + c + d;
};

const curriedSum = currying(sum);

console.log(curriedSum(1)(2,3)(4));
