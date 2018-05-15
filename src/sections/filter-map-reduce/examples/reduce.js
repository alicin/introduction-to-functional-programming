const values = [4, 5, 10, 1 , 4, 9];

const sumOfValues = values
  .reduce((total, nextValue) => { return total + nextValue}, 0);

console.log(values); // => [4, 5, 10, 1 , 4, 9]
console.log(sumOfValues); // => 35
