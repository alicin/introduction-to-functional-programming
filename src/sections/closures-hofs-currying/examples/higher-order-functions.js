const multiplyBy = (multiplier) =>
  (number) => multiplier * number;

const double = multiplyBy(2);

console.log(double(10)) // => 20

const triple = multiplyBy(3);

console.log(triple(10)) // => 30
