const reduce = (reducer, initialValue, array) => {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i ++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}
