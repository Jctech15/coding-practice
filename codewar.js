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

//kyu 6 Take a Ten Min Walk
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
