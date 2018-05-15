const createBear = () => {
  let name = 'Pooh';

  return {
    getName: () => name,
    setName: (newName) => name = newName,
  }
};

const newBear = createBear();

console.log(newBear.getName()); // => Pooh
newBear.setName('Yogi');
console.log(newBear.getName()); // => Yogi
