console.log(`-------------step 1 -----------------`);
function squareOfWordLength(word) {
  var length = word.length;
  console.log("length of string Javascript is:-", length);
  return (length = length * length);
}
var word = "Javascript";
var result = squareOfWordLength(word);
console.log("square of given string Javascript is:-", result);

function squareOfWordLength(word) {
  var length = word.length;
  console.log("length of string Google Chrome is:-", length);
  return (length = length * length);
}
var word = "Google Chrome";
var result = squareOfWordLength(word);
console.log("square of given string Google Chrome is:-", result);

function squareOfWordLength(word) {
  var length = word.length;
  console.log("length of string Developer Smart is:-", length);
  return (length = length * length);
}
var word = "Developer Smart";
var result = squareOfWordLength(word);
console.log("square of given string Developer Smart is:-", result);
console.log(`-------------step 2 -----------------`);

var myString = "I am Angular developer";
var myWords = myString.split(" ");
var totalWords = myWords.length;

var stringLength = myString.length;
var averageWordLength = stringLength / totalWords;

console.log("Length of I am Angular developer string is:-", stringLength);
console.log("Total no of words in string I am angular developer:", totalWords);
console.log("String length dividing by total no of words", averageWordLength);
console.log(`---------------------------------`);
