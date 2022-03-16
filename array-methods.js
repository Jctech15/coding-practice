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
camelize("-webkit-transition");
camelize("background-color");
