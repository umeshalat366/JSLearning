console.log(`---------------step1----------------------`);

var greaterNumber = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`Greater no in 10 & -10:${result}`);
};
greaterNumber(10, -10);

var greaterNumber = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`Greater no in 800 & 899 is:${result}`);
};
greaterNumber(800, 899);
console.log(`---------------step2----------------------`);

var isEvenOrOdd = function (word) {
  var wordLength = word.length;
  return wordLength % 2 === 0 ? "Even" : "Odd";
};

var num = 29;
var result = num % 2 == 0 ? "Even" : "Odd";
console.log("Number 29 is", result);

var num = 44;
var result = num % 2 == 0 ? "Even" : "Odd";
console.log("Number 44 is", result);

var num = 0;
var result = num % 2 == 0 ? "Even" : "Odd";
console.log("Number 0 is", result);

var num = 101;
var result = num % 2 == 0 ? "Even" : "Odd";
console.log("Number 101 is", result);
console.log(`-------------step3-----------------`);

var isEvenOrOdd = function (word) {
  var wordLength = word.length;
  return wordLength % 2 === 0 ? "Even" : "Odd";
};

var inputWord = "Javascript";
var result = isEvenOrOdd(inputWord);
console.log(`The word "${inputWord}" is ${result}`);
var inputWord = "Developer";
var result = isEvenOrOdd(inputWord);
console.log(`The word "${inputWord}" is ${result}`);
var inputWord = "Google";
var result = isEvenOrOdd(inputWord);
console.log(`The word "${inputWord}" is ${result}`);
