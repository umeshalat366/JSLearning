console.log(`1---------------------------`);
var square = function (num) {
  var result = num * num;
  console.log("square of given number", result);
};
square(5);
square(6);
square(25);
square(100);
console.log(`2---------------------------`);

var myFunction = function () {
  console.log("Hello I am function");
};
console.log("Type of function is:", typeof myFunction);
console.log(`3---------------------------`);

var rectangleArea = function (l, w) {
  return l * w;
};
var l = 499;
var w = 917;
var area = rectangleArea(l, w);
console.log("Area of rectangle is", area);
console.log(`4---------------------------`);

function swapValues(Argument1, Argument2) {
  console.log("Before swap=>", "Argument1", Argument1, "Argument2", Argument2);
  var temp = Argument1;
  Argument1 = Argument2;
  Argument2 = temp;
  console.log("After swap=>:-", "Argument1", Argument1, "Argument2", Argument2);
}
var name1 = "Rohit";
var name2 = "Ritika";
swapValues(name1, name2);
var num1 = 1000;
var num2 = 2000;
swapValues(num1, num2);
console.log(`4---------------------------`);

var countTotalCharacters = function (Str) {
  return Str.length;
};

var inputString = "Javascript is the most popular language of internet";
var totalCharacters = countTotalCharacters(inputString);
console.log("Total character", totalCharacters);
console.log(`5---------------------------`);

var inputString = "Javascript is the most popular language of internet";
var characterAtIndex6 = inputString.charAt(6);
console.log("character of index 6 is:-", characterAtIndex6);

console.log(`6---------------------------`);

var inputString = "Javascript is the most popular language of internet";
var characterAtIndex6 = inputString.charAt(11);
console.log("character of index 11 is:-", characterAtIndex6);

console.log(`8---------------------------`);

var inputString = "Javascript is the most popular language of internet";
var characterAtIndex6 = inputString.charAt(0);
console.log("first character of string is:-", characterAtIndex6);

console.log(`9---------------------------`);

function getLastCharacter(inputString) {
  return inputString.charAt(inputString.length - 1);
}

var inputString = "Javascript is the most popular language of internet";
var lastCharacter = getLastCharacter(inputString);
console.log("last character of string is:-", lastCharacter);
console.log(`---------------------------`);
