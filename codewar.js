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
/* function createPhoneNumber(numbers) {
     let first = numbers.slice(0, 3);
     let second = numbers.slice(3, 6);
     let third = numbers.slice(-4);

     return `(${first.join("")}) ${second.join("")}-${third.join("")}`;
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
//"(123) 456-7890" */

//kyu 6 find the odd int
/* function findOdd(A) {
  let counter = {};
  A.forEach((num) => {
    // if (!counter[num]) {
    //   counter[num] = 1;
    // } else {
    //   counter[num]++;
    // }
    counter[num] ?  counter[num]++ : (counter[num] = 1);
  });
  console.log(counter);

  for (const key in counter) {
    if (counter[key] % 2 === 1) {
      console.log(Number(key));
    }
  }
}

let a = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
findOdd(a); */ //4

//kyu 7 Highest and Lowest
/* function highAndLow(numbers) {

  numbers = numbers.split(" ");
  console.log(`${Math.max(...numbers)} ${Math.min(...numbers)}`);
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); */

//kyu 7 descending orer

/* function descendingOrder(n) {
  return Number(n.toString().split("").reverse().join(""));
}
descendingOrder(42145); */

//kyu 6 Stop gninnipS My sdroW!
function spinWords(string) {
  string = string.split(" ");
  let newString = [];
  string.forEach((str) => {
    if (str.length < 5) {
      newString.push(str);
    } else {
      newString.push(str.split("").reverse().join(""));
    }
  });
  console.log(newString.join(" "));
}

spinWords("Hey fellow Warriors");
