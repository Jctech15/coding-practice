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
/* function spinWords(string) {
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
 */

//kyu 7 Get the Middle Character
/* function getMiddle(s) {
  // if (s.length % 2 === 0) {
  //   return s.substring(
  //     Math.floor(s.length / 2 - 1),
  //     Math.ceil(s.length / 2 + 1)
  //   );
  // } else {
  //   return s.charAt(Math.floor(s.length / 2));
  // }
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddle("midoo"));
 */

//kyu 7 you're a squre
/* let isSquare = function (n) {
  let root = Math.sqrt(n);
  // if (n === root * root) {
  //   return true;
  // } else {
  //   return false;

  return Number.isInteger(root);
};

console.log(isSquare(5));
 */

//kyu 7 Isograms

/* function isIsogram(str) {
  str = str.toLowerCase();
  return (
    str.split("").filter((e, i) => str.indexOf(e) == i).length == str.length
  );
} */

//kyu 7 List Filtering

/* function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}
 */

// kyu 6 Multiples of 3 or 5

/* function solution(number) {
  let multiples = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    } else if (i % 3 === 0) {
      multiples.push(i);
    } else if (i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples.reduce((result, current) => {
    return result + current;
  }, 0);
}

solution(10); */
/* 
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

solution(10);
 */

//kyu 6 sum of digits/digital root
/* function digital_root(n) {
  let strN = n.toString();
  let sum = 0;
  while (strN.length > 1) {
    for (let i = 0; i < strN.length; i++) {
      console.log(Number(strN[i]));
      sum += Number(strN[i]);
    }
    strN = sum.toString();
    sum = 0;
  }

  return Number(strN);
}

digital_root(456); */

//kyu 6 Who Likes it?
/* function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

likes(["Jacob", "Aaron", "Aarongy"]);
 */

//kyu 6 Counting Duplicates
/* function duplicateCount(text) {
  let counting = {};
  text = text.toLowerCase();
  for (let i = 0; i <= text.length - 1; i++) {
    counting[text[i]] ? counting[text[i]]++ : (counting[text[i]] = 1);
  }

  console.log(Object.values(counting).filter((item) => item > 1).length);
}

duplicateCount("aabBcde11");
 */

// kyu 6 Duplicate Encoder
// function duplicateEncode(word) {
//   let counts = {};
//   let newWord = "";
//   word = word.toLowerCase();
//   for (let i = 0; i <= word.length - 1; i++) {
//     counts[word[i]] ? counts[word[i]]++ : (counts[word[i]] = 1);
//   }
//   for (let i = 0; i <= word.length - 1; i++) {
//     counts[word[i]] > 1 ? (newWord += ")") : (newWord += "(");
//   }
//   console.log(newWord);
// }

/* function duplicateEncode(word) {
  console.log(
    word
      .toLowerCase()
      .split("")
      .map(function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
      })
      .join("")
  );
}
duplicateEncode("aaron");
 */

//kyu 6 Persistent Bugger
/* function persistence(num) {
  let multiple = num;
  let counter = 0;

  if (num.toString().length < 1) {
    return 0;
  }

  while (multiple.toString().length > 1) {
    let test = 1;

    for (let i = 0; i <= multiple.toString().length - 1; i++) {
      test *= Number(multiple.toString()[i]);
    }
    counter++;
    console.log(counter, test);
    multiple = test;
  }

  console.log(counter);
}
 */

//kyu 6 Find The Parity Outlier
/* function findOutlier(integers) {
  // let evenArr = [];
  // let oddArr = [];
  // integers.forEach((num) => {
  //   num % 2 === 0 ? evenArr.push(num) : oddArr.push(num);
  // });
  // console.log(evenArr.length === 1 ? evenArr[0] : oddArr[0]);

  const evenArr = integers.filter((num) => num % 2 === 0);
  return evenArr.length === 1
    ? evenArr[0]
    : integers.filter((num) => num % 2 !== 0)[0];
}
findOutlier([2, 6, 8, 10, 3]); */

/* //kyu 6 Take a Ten Min Walk
function isValidWalk(walk) {
  const dirObj = {};
  if (walk.length !== 10) {
    return false;
  }

  walk.forEach((direction) => {
    dirObj[direction] ? dirObj[direction]++ : (dirObj[direction] = 1);
  });

  if (dirObj["n"] === dirObj["s"] && dirObj["e"] === dirObj["w"]) {
    return true;
  }
}
 */

/* //kyu 6 Replace With Alphabet Position
function alphabetPosition(text) {
  text = text.toLowerCase().replace(/[^a-z]/gi, "");
  let result = [];
  const alphNum = {};
  for (let i = 1; i <= 26; i++) {
    const char = String.fromCharCode(97 + (i - 1));
    alphNum[char] = i;
  }

  for (let i = 0; i <= text.length - 1; i++) {
    result.push(alphNum[text[i]]);
  }
  return result.join(" ");
}
 */
/* 
//7 kyu Exes and Ohs
function XO(str) {
  // array.filter()

  str = str.toLowerCase().split("");
  const xCount = str.filter((character) => character === "x");
  const oCount = str.filter((character) => character === "o");

  if (xCount.length === 0 && oCount.length === 0) {
    console.log(true);
  }

  console.log(xCount.length === oCount.length ? true : false);

  //array.reduce()
  /*   
  str = str.toLowerCase().split("");
  let countCharacter = str.reduce((allCharacter, character) => {
    character in allCharacter
      ? allCharacter[character]++
      : (allCharacter[character] = 1);
    return allCharacter;
  }, {});

  if (!countCharacter["x"] && !countCharacter["o"]) {
    return true;
  }

  return countCharacter["x"] === countCharacter["o"] ? true : false; */

//loop and object
/*   let countCharacter = {};
  str = str.toLowerCase();
  for (let i = 0; i <= str.length - 1; i++) {
    countCharacter[str[i]]
      ? countCharacter[str[i]]++
      : (countCharacter[str[i]] = 1);
  }
  if (!countCharacter["x"] && !countCharacter["o"]) {
    return true;
  }

  //return countCharacter["x"] === countCharacter["o"] ? true : false;
}
 */

/* //kyu 6 Unique In Order
function uniqueInOrder(iterable) {
  //your code here - remember iterable can be a string or an array
  let unique = [];
  for (let i = 0; i <= iterable.length - 1; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      unique.push(iterable[i]);
    }
  }
  console.log(unique);
}

uniqueInOrder("ABBCcAD");
 */
/* //kyu 7 Shortest Word

function findShort(s) {
  return s
    .split(" ")
    .map((word) => word.length)
    .sort((a, b) => a - b)[0];
} */

//kyu 7 Complmentary DNA
/* function DNAStrand(dna) {
  dna = dna.split("");
  return dna
    .map((e) => {
      switch (e) {
        case "A":
          return "T";
          break;
        case "T":
          return "A";
          break;
        case "G":
          return "C";
          break;
        case "C":
          return "G";
          break;
        default:
          break;
      }
    })
    .join("");
} */

/* //kyu 7 Credit Card Mask
// return masked string
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  let lastDigits = cc.slice(cc.length - 4, cc.length);
  return cc
    .split("")
    .slice(0, cc.length - 4)
    .map((e) => (e = "#"))
    .join("")
    .concat(lastDigits);
}
 */
/* function getSum(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }

  console.log(sum);
}

getSum(0, 3);
 */

/* function digPow(n, p) {
  let newNum = n
    .toString()
    .split("")
    .reduce((result, current) => (result += Math.pow(current, p++)), 0);
  if (Math.pow(n, p) === n && n % newNum !== 0) {
    return 1;
  }
  if (newNum % n === 0) {
    return newNum / n;
  } else {
    return -1;
  }
}

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 */

/* //kyu 7
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);
 */

//kyu 6 Equal Sides of An Array
/* function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((s, n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
} */

/* //kyu 8 Opposite Number
function opposite(number) {
  return -number;
} */

//kyu 8 Remove String Spaces
/* function noSpace(x) {
  // let newX = "";
  // x = x.split(" ");
  // x.forEach((e) => {
  //   if (e !== " ") {
  //     newX += e;
  //   }
  // });
  // return newX;
  console.log(x.split(" ").join(""));
}

noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"); */

/* function findEvenIndex(arr) {
  let arrSum = arr.reduce((sum, current) => {
    return (sum += current);
  }, 0);
  let compareSum = 0;
  arr.forEach((e, i) => {
    compareSum += e;
    if (compareSum === arrSum) {
      console.log(i);
    }
    arrSum -= e;
  });
  return -1;
}
 */

//kyu 6 Consecutive Strings
/* function longestConsec(strarr, k) {
  if (k <= 0 || strarr.length <= 0 || k > strarr.length) {
    return "";
  }

  let dict = {};
  let highest = 0;
  for (let i = 0; i <= strarr.length - 1; i++) {
    const latter = i + k > strarr.length ? strarr.length : i + k; //2
    let currentStr = strarr.slice(i, latter).join(""); //wlwsasphmxxowiaxujylentrklctozmymu
    let strLength = currentStr.length;

    if (strLength > highest) {
      highest = strLength;
    }
    dict[currentStr] = strLength;
  }
  for (let key in dict) {
    if (dict[key] === highest) {
      console.log(key);
    }
  }
}

longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2); */

/* //kyu 7 friend or foe?
function friend(friends) {
  //   let newFriend = []
  //   friends.forEach ( e => {
  //     if (e.length === 4) {
  //       newFriend.push(e)
  //     }
  //   })
  //   return newFriend

  return friends.filter((e) => e.length === 4);
} */

// //kyu 7 Two to One
// function longest(s1, s2) {
//   // let newStr = s1 + s2;
//   // let uniqueStr = [];
//   // for (let i = 0; i <= newStr.length - 1; i++) {
//   //   if (!uniqueStr.includes(newStr[i])) uniqueStr.push(newStr[i]);
//   // }

//   // console.log(uniqueStr.sort((a, b) => a.localeCompare(b)).join(""));
//   const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
//   return longest;
// }

// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");

//kyu 7 Categorize New Member
// function openOrSenior(data) {
//   let category = [];
//   data.forEach((member) => {
//     member[0] >= 55 && member[1] > 7
//       ? category.push("Senior")
//       : category.push("Open");
//   });
//   console.log(category);
/* // }
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}
input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
openOrSenior(input);
 */

//kyu 7 Don't Give Me Five
/* function dontGiveMeFive(start, end) {
  let list = [];
  for (let num = start; num <= end; num++) {
    if (!num.toString().includes("5")) {
      list.push(num);
    }
  }

  console.log(list.length);
}
dontGiveMeFive(4, 17); */

// //kyu 7 String Ends with?
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

/* //kyu 7 number of people in the bus
function litres(time) {
  return Math.floor(time * 0.5);
}
 */

/* //kyu 7 Number of People in the Bus
function totalPassenger(busStops) {
  let passengerOn = 0;
  let passengerOff = 0;
  for (let i = 0; i <= busStops.length - 1; i++) {
    passengerOn += busStops[i][0];
    passengerOff += busStops[i][1];
  }
  console.log(
    passengerOn > passengerOff
      ? passengerOn - passengerOff
      : passengerOff - passengerOn
  );
}

totalPassenger([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]);
 */

// //kyu 7 Reverse Word
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

/* // reverseWords("The quick brown fox jumps over the lazy dog.");
function findNeedle(haystack) {
  haystack.forEach((word, i) => {
    if (word === "needle") {
      console.log(`found the needle at position ${i}`);
    }
  });
}
findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
 */

/* //kyu 7 factorial
function factorial(n) {
  let product = 1;
  if (n === 0) {
    return 1;
  }
  if (n < 0 || n > 12) {
    throw RangeError();
  }
  for (let i = n; i >= 1; i--) {
    console.log((product *= i));
  }
}

factorial(3);
 */

/* //kyu 7 Small enough?
function smallEnough(a, limit) {
  // a = a.sort((a, b) => a - b);
  // min = Math.min(...a);
  // max = Math.max(...a);
  // console.log(a, min, max, limit);
  // console.log(limit >= min && max <= limit);
  return Math.max(...a) <= limit;
}

smallEnough([2, 7, 1, 1, 6, 1, 6, 5, 6, 0, 2, 6, 1, 2], 3);
 */

/* //kyu 7 odd or even
function oddOrEven(array) {
  return array.reduce((total, current) => (total += current), 0) % 2 === 0
    ? "even"
    : "odd";
}
 */

/* //kyu 8 Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  return bool === true ? yes : no;
}

 */

/* //kyu 8 removing elements
function removeEveryOther(arr) {
  console.log(arr.filter((e, i) => i % 2 === 0));
}

removeEveryOther([1, 2]);
 */

/* //kyu 8 Name Shuffler
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
 */

/* //leet code 169. Majority Element
function majority(nums) {
  let count = {};
  let max = 0;
  nums.forEach((num) => {
    count[num] ? count[num]++ : (count[num] = 1);
  });



  for (const key in count) {
    if (count[key] > max) {
      max = count[key];
    }
  }
}

majority([1, 2, 3, 3]);
 */

/* //kyu 7 Find the Middle Element
function gimme(triplet) {
  let sort = [...triplet].sort((a, b) => a - b);
  console.log(triplet, sort, sort[1], triplet.indexOf(sort[1]));
}

gimme([2, 3, 1]); */

/* //kyu 7 Maximum Product
function adjacentElementsProduct(array) {
  let productArray = [];
  for (let i = 0; i <= array.length - 2; i++) {
    productArray.push(array[i] * array[i + 1]);
  }

  console.log(Math.max(...productArray));
}

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]);
 */

/* //kyu 7 Sum of a sequence
const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let num = begin; num <= end; num += step) {
    sum += num;
  }
  console.log(sum);
};

sequenceSum(2, 6, 2);
 */

/* //kyu 8 Reverse List Order
function reverseList(list) {
  let newList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    newList.push(list[i]);
  }
  console.log(newList);
}

reverseList([1, 2, 3, 4]);
 */

/* //kyu 8 Counting Sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}

let sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
countSheeps(sheep); */

/* //kyu 8 You only need one- Beginner
function check(a, x) {
  return a.includes(x);
}

check([66, 101], 66); */

/* 
// kyu 7 Compelte the Pattern #1
function pattern(n) {
  let output = "";
  if (n < 1) {
    return "";
  }
  if (n >= 1) {
    for (let i = 1; i <= n; i++) {
      if (i === n) {
        output += `${i.toString().repeat(i)}`;
      } else {
        output += `${i.toString().repeat(i)}\n`;
      }
    }
  }
  console.log(output);
}
pattern(11);
 */

/* //kyu 7 switcheroo

function switcheroo(x) {
  // let array = x.split("");
  // array.forEach((letter, i) => {
  //   if (letter === "a") {
  //     array[i] = "b";
  //   }
  //   if (letter === "b") {
  //     array[i] = "a";
  //   }
  // });

  // return array.join("");

  let mapArray = x
    .split("")
    .map((element) => (element === "a" ? "b" : element === "b" ? "a" : "c"))
    .join("");
  console.log(mapArray);
}

switcheroo("abc"); //bac */

/* 
//kyu 7 LIeks vs Dislikes

function likeOrDislike(buttons) {
  let state = "Nothing";

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = "Nothing";
    } else {
      state = buttons[i];
    }
  }

  return state;
}

/* function likeOrDislike(buttons) {
  return buttons.reduce(
    (state, button) => (button === state ? Nothing : button),
    Nothing
  );
} 

likeOrDislike(["Like", "Dislike"]);

 */

/* //kyu 7 Building a square

function generateShape(integer) {
  let shape = `${"+".repeat(integer)}`;
  for (let count = 2; count <= integer; count++) {
    shape += `\n${"+".repeat(integer)}`;
  }
  console.log(shape);
}

generateShape(8); */
/* 
//kyu 7 Maximum Multiple
function maxMultiple(divisor, bound) {
  // return divisor * Math.floor(bound / divisor);

  return bound - (bound % divisor);
}

maxMultiple(37, 200);

//maxMultiple (37,200) ==> return (185)
//maxMultiple(2,6) ==> 6
 */

/* function shuffleIt(arr, ...nums) {
  for (let subArr of nums) {
    if (subArr[0] === 
  }

}
// The function accepts two or more parameters.
//The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays.
//Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds).
//For every such array, swap the elements.
// shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
// shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
// shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]); */

// //kyu 8 Thinkful - Logic Drills: Traffic light
// function updateLight(current) {
//   // if (current === "green") {
//   //   return "yellow";
//   // } else if (current === "yellow") {
//   //   return "red";
//   // } else {
//   //   return "green";
//   // }

//   switch (current) {
//     case "green":
//       return "yellow";
//       break;
//     case "yellow":
//       return "red";
//       break;
//     case "red":
//       return "green";
//       break;
//     default:
//       throw "Error: wrong input";
//       break;
//   }
// }

// updateLight("green");
// //You're writing code to control your town's traffic lights.
// //You need a function to handle each change from green, to yellow, to red, and then to green again.

// //kyu 8 Get the mean of an array
// function getAverage(marks) {
//   //TODO : calculate the downward rounded average of the marks array
//   let sum = 0;
//   marks.forEach((i) => {
//     sum += i;
//   });
//   console.log(Math.floor(sum / marks.length));
// }

// getAverage([1, 1, 1, 1, 1, 1, 1, 2]);

// //kyu 6 Sort theh odd
// function sortArray(array) {
//   let oddArray = array
//     .filter((num) => Math.abs(num) % 2 === 1)
//     .sort((a, b) => a - b);

//   let sortedArray = [];
//   array.forEach((num) => {
//     if (Math.abs(num) % 2 === 1) {
//       sortedArray.push(oddArray.shift());
//     } else {
//       sortedArray.push(num);
//     }
//   });
//   console.log(sortedArray);
// }

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   //[3,5]
//   return array.map((x) => (x % 2 ? odd.shift() : x));
//   //[5, 8, 6, 3, 4];
// }

// //[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// //kyu 8 Convert number to reversed array of digits
// function digitize(n) {
//   console.log(n.toString().split("").map(Number).reverse());
// }

// digitize(35231);

// //kyu 7 Find Count of the Most Frequent Item in an Array

// function mostFrequentItemCount(collection) {
//   let counter = {};

//   if (!collection.length) {
//     return 0;
//   }

//   collection.forEach((num) =>
//     counter[num] ? counter[num]++ : (counter[num] = 1)
//   );
//   console.log(Math.max(...Object.values(counter)));
// }

// mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]);

/* //kyu 7 How many arguments
// Create a function called args_count that returns the number of arguments provided
function args_count(...args) {
  console.log(args.length);
}

args_count(1, 2, 3);
 */

/* //kyu 7 cats and shelves
//Find the minimum number of jumps to go from start to finish
function solution(start, finish) {
  let jumps = 0;
  // if (start === finish) {
  //   return 0;
  // }

  // while (start < finish) {
  //   jumps += 1;
  //   if (finish >= start + 3) {
  //     start += 3;
  //   } else {
  //     start += 1;
  //   }
  // }
  // return jumps;

  console.log(Math.floor((finish - start) / 3) + ((finish - start) % 3));
}

solution(387, 815); //144
 */

/* //kyu 8 reversed string
function solution(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);

  // str = str.split("");
  // let newStr = "";
  // str.forEach((letter) => (newStr = letter + newStr));

  // console.log(newStr);

  // console.log(str.split("").reverse().join(""));
}

solution("world");
 */

//kyu 7 Is this a triangle?
//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  // if (a <= 0 || b <= 0 || c <= 0) {
  //   return false;
  // }

  return a + b > c && a + c > b && c + b > a ? true : false;

  // if (c + b > a && a + c > b && c + b > a) {
  //   return true;
  // } else {
  //   return false;
  // }

  // console.log(c + b > a);
  // switch (true) {
  //   case a + b > c:
  //     return true;
  //     break;
  //   case a + c > b:
  //     return true;
  //     break;
  //   case c + b > a:
  //     return true;
  //     break;
  //   default:
  //     return false;
  // }
}

isTriangle(7, 2, 2); //true (7,2,2) false

/* //kyu 6 Detect Pangram

//A pangram is a sentence that contains every single letter of the alphabe`t at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //...
}

isPangram("The quick brown fox jumps over the lazy dog");
//"The quick brown fox jumps over the lazy dog."; return true
//"This is not a pangram." return false


 */
