// Musketeers
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ["Athos", "Porthos", "Aramis"];
// Shows each array element using a for loop.
for (let i = 0; i <= musketeers.length - 1; i++) {
  //   console.log(musketeers[i]);
}
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
// Shows each array element using the forEach() method.
musketeers.forEach((element) => {
  //   console.table(element);
});
// Remove poor Aramis.
musketeers.splice(2, 1);
// Shows each array element using a for-of loop.
for (const element of musketeers) {
  //   console.log(element);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (let i = 0; i <= values.length - 1; i++) {
  sum += values[i];
}
// console.log(sum);

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const numbers = [3, 11, 7, 2, 9, 10];
let maximum = numbers[0];

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] > maximum) {
    maximum = numbers[i];
  }
}
console.log(maximum);

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
const words = [];

let userInput;
while (userInput !== "stop") {
  userInput = prompt("Enter a word");
  if (userInput === "stop") {
    break;
  }
  words.push(userInput);
}
console.log(words);
