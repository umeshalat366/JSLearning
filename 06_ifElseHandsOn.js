function checkEvenOrOdd(number) {
  if (typeof number !== "number") {
    return "Invalid input. Please provide a number.";
  }

  if (number % 2 === 0) {
    return `Given no ${number} is Even`;
  } else {
    return `Given no ${number} is Odd`;
  }
}
console.log(checkEvenOrOdd(45));
console.log(checkEvenOrOdd(70));
console.log(checkEvenOrOdd(67));
console.log(checkEvenOrOdd(98));

console.log(`------------------------`);
var myString = "Javascript-ES6";

if (myString.length > 10) {
  console.log(`The string ${myString} contains more than 10 characters.`);
} else {
  console.log(`The string not ${mystring} contains more than 10 characters.`);
}

var myString = " language CSS";
var searchString = "CSS";

if (myString.startsWith(searchString)) {
  console.log(`The string ${myString} starts with 'CSS'.`);
} else {
  console.log(`The string ${myString} not start with 'CSS'.`);
}
console.log(`------------------------`);
