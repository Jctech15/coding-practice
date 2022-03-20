// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

// Solution
function camelize(str) {
  let newStr = str.split("-");
  let camel = "";

  newStr.forEach((element, i) => {
    console.log(newStr, "split");
    // console.log(element, element[0]);
    if (i === 0) {
      camel = element;
    } else {
      let upper = element[0].toUpperCase() + element.slice(1);
      camel += upper;
    }
  });
  console.log(camel);
}
// camelize("-webkit-transition");
// camelize("background-color");

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified) */

//Solution
function filterRange(arr, a, b) {
  let newArr = [];
  arr.forEach((element) => {
    if (element >= a && element <= b) {
      newArr.push(element);
    }
  });
  console.log(newArr);
}
// filterRange([5, 3, 8, 1], 1, 4);

/* Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:


filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1] */

//Solution
function filterRangerInPlace(arr, a, b) {
  arr.forEach((element, i) => {
    if (!(element >= a && element <= b)) {
      console.log(element[i]);
      arr.splice(i, 1);
    }
  });
  console.log(arr);
}
// let arr = [5, 3, 8, 1];
// filterRangerInPlace(arr, 1, 4);

// arr.sort( (a, b) => a - b );
// ... your code to sort it in decreasing order
// 8, 5, 2, 1, -10

// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort((a, b) => b - a));

/* Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.


let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes) */

//Solution
// let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  let alphaArr = arr.slice().sort((a, b) => a.localeCompare(b));
  console.log(alphaArr, arr);
}
// copySorted(arr);

// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

//Solution
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
let names = users.map((item) => item.name);
console.log(names);  */

// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

//Solution

/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];
console.log(users);

let usersMapped = users.map(({ name, surname, id }) => {
  return { fullname: name + " " + surname, id: id };
});
console.log(usersMapped); */

// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

//Solution
// let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}]

// let shuffled = unshuffled
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)
/* function shuffle(arr) {
  let shuffled = arr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
  console.log(shuffled);
}
let arr = [1, 2, 3];
shuffle(arr); */

// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

//Solution
/* 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
  // arr.reduce((sum, current) => sum + current, 0);
}
console.log(getAverageAge(arr));
// (25 + 30 + 29) / 3 = 28 */

// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

//Solution
/* 
function unique(arr) {
  // return [...new Set(arr)];
  let uniqueArr = [];
  arr.forEach((str) => {
    if (!uniqueArr.includes(str)) {
      uniqueArr.push(str);
    }
  });
  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); */

// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// Such function is really handy when working with server data.
// In this task we assume that id is unique. There may be no two array items with the same id.
// Please use array .reduce method in the solution.

//Solution

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
  //   let initialValue = 0
  // let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
  //     (previousValue, currentValue) => previousValue + currentValue.x
  //     , initialValue
  // )
  return users.reduce((usersById, currentUser) => {
    usersById[currentUser.id] = currentUser;
    return usersById;
  }, {});
}
let usersById = groupById(users);
console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
// */
