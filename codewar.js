//kyu7 Square Every Digit
/* function squareDigits(num) {
  let numArr = num.toString().split("");
  let squareArr = [];
  console.log(numArr);
  numArr.forEach((element) => {
    squareArr.push(Math.pow(element, 2));
  });
  console.log(Number(squareArr.join("")));
}

squareDigits(3212); */ //9414

/* // kyu 7 Disemvowel Trolls
function disemvowel(str) {
  let newStr = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= str.length - 1; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(disemvowel("This website is for losers LOL!"));
 */

//kyu 6 Create Phone Number
function createPhoneNumber(numbers) {
  //   let first = numbers.slice(0, 3);
  //   let second = numbers.slice(3, 6);
  //   let third = numbers.slice(-4);

  //   return `(${first.join("")}) ${second.join("")}-${third.join("")}`;
  let result = "";
  numbers.forEach((number, index) => {
    switch (index) {
      case 0:
        result += "(";
        break;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      default:
        break;
    }
    result += number.toString();
  });
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//"(123) 456-7890"
