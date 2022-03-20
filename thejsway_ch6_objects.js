const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  describe() {
    return `${this.name} has ${this.health} points, ${this.strength} as strength and ${this.xp} XP points`;
  },
};

aurora.health -= 20;

aurora.strength += 10;

aurora.xp += 15;

// console.log(aurora.describe());

const dog = {
  name: "Jelly",
  species: "Maltis",
  size: "mini",
  bark() {
    return "Grrr! Grrr!";
  },
};

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// const r = Number(prompt("Enter the circle radius:"));
const r = 5;
// TODO: create the circle object here
const circle = {
  circumference() {
    return 2 * Math.PI * r;
  },
  area() {
    return Math.PI * r ** 2;
  },
};

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

const account = {
  name: "Alex",
  balance: 0,
  credit(num) {
    return (this.balance += num);
  },
  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  },
};

console.log(account.credit(1));
console.log(account.describe());
