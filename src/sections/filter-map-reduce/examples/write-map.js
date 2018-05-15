const map = (transform, array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const transformedValue = transform(array[i]);
    newArray.push(transformedValue);
  }
  return newArray;
};
