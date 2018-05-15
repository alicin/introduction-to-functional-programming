const pets = [
  { type: 'rock', age: 10000, name: 'Sylvester' },
  { type: 'dog', age: 10, name: 'Duke' },
  { type: 'cat', age: 4, name: 'Eggnog' },
  { type: 'dog', age: 2, name: 'Buddy' },
  { type: 'dog', age: 6, name: 'Optimus' },
  { type: 'rat', age: 2, name: 'Scabbers' },
];

const totalAgeInDogYears = pets
  .filter(pet => pet.type === 'dog') // get dogs
  .map(dog => dog.age * 7) // get ages in dog years
  .reduce((totalDogYears, nextAge) => {
    return totalDogYears + nextAge;
  }, 0); // total dog years

console.log(totalAgeInDogYears) // 126
