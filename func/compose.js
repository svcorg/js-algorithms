/*
  Composing multiple functions to create more complex ones is a common utility in any programming language.
  ex: a(b(c(x)))
 */

const compose = (...funcs) => {
  return (...params) => {
    let value;
    for (let index = funcs.length - 1; index >= 0 ; index -= 1) {
      const param = value ? [value] : params;
      value = funcs[index].apply(this, param);
    }
    return value;
  };
};


const sum = (a ,b) => +a + b;
const sqr = a => a ** 2;
const decr = a => a - 1;

const decr_sqr_sum = compose(decr, sqr, sum);

console.log(decr_sqr_sum(2,3));
