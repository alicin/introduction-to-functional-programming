const filter = (test, array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const addValue = test(value);
    if(addValue) {
      newArray.push(value);
    }
  }
  return newArray;
}
