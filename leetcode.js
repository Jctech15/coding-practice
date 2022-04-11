//Palindrome Number
/* let isPalindrome = function (x) {
  let xArr = x.toString().split("");
  console.log(xArr.join("") === xArr.reverse().join(""));
};

isPalindrome(1001); */

//Roman to Integar
/* let romanToInt = function (s) {
  let sum = 0;
  const romanObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // console.log(Object.keys(romanObject), Object.values(romanObject));
  for (let i = 0; i <= s.length - 1; i++) {
    if (romanObject[s[i]]) {
      sum += Object.values(romanObject);
      console.log(sum);
    }
  }
  console.log(sum);
};

romanToInt("III"); */
