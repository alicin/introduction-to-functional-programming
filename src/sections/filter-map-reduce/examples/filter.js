const names = ['Adam', 'Rick', 'Allison', 'Bob', 'Kaite', 'Veronica', 'Alexandria'];

const namesStartingWithA = names
  .filter(name => /^(a|A)/.test(name));

console.log(names); // => ['Adam', 'Rick', 'Allison', 'Bob', 'Kaite', 'Veronica', 'Alexandria']
console.log(namesStartingWithA); // => ['Adam', 'Allison', 'Alexandria']
