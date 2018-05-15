const getRandomNumber = new Promise(
  (resolve) =>
    setTimeout(() => resolve(Math.ceil(Math.random() * 100))),
    500,
  )

getRandomNumber()
  .then(number => {
    console.log('Original number: ', number);
    return number;
  })
  .then(number => number + 2) // plus 2
  .then(number => number * 10) // times 10
  .then(number => console.log('New number: ', number));
