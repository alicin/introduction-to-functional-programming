const add = (a, b) => a + b;

const curry2 = (func) => (a) => (b) => func(a,b);

const curriedAdd = curry2(add); // returns a => b => a + b

console.log(curriedAdd(10)(2)); // => 12
