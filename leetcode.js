//Palindrome Number
let isPalindrome = function (x) {
  let xArr = x.toString().split("");
  console.log(xArr.join("") === xArr.reverse().join(""));
};

isPalindrome(1001);
