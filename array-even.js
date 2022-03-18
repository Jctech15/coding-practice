//create a function that takes in an array of numbers. reutrn a new array containing every even number from the original array (do not use map or filter)

function evenNumbers(array) {
  let newArray = [];
  array.forEach((element) => {
    if (element % 2 === 0) {
      newArray.push(element);
    }
  });
  console.log(newArray);
  return newArray;

  console.log(array.filter((nums) => nums % 2 === 0));
}
evenNumbers([1, 2, 3, 4, 5]);
