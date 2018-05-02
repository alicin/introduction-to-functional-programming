const adder = new Adder();

adder.setX(1);
adder.setY(2);
adder.add();

moduleA.run(adder);
moduleB.run(adder);
moduleC.run(adder);

const sum = adder.getSum();
console.log(sum);