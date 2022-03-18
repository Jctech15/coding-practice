// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.
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

let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  let alphaArr = arr.slice().sort((a, b) => a.localeCompare(b));
  console.log(alphaArr, arr);
}
copySorted(arr);
