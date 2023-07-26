var greet = "Good Morning Virat Dude";
var lengthGreet = greet.length;
console.log(greet, "Length of string is:", lengthGreet);

var charAt0 = greet.charAt(0);
console.log(`${greet}- char at 0th index is ${charAt0}`);

var charAtLastIndex = greet.charAt(lengthGreet - 1);
console.log(`Last Char is ${charAtLastIndex} of Index is ${lengthGreet}`);
console.log(`-----------------------`);

var firstName = "Umesh";
var LastName = " Alat";
var result = firstName + LastName;
console.log(`concatenation string is ${result}`);
var result = firstName.concat(LastName);
console.log(`My Full name is ${result}`);
console.log(`-----------------------`);

var result = greet.indexOf("M");
console.log(`Index of char 'M' ${result}`);
var result = greet.indexOf("Dude");
console.log(`Index of sub string 'Dude' is ${result}`);

console.log(`---------------------`);
var result = greet.includes("virat");
console.log(`Result is ${result}`);

console.log(`---------------------`);
var result = greet.split(" ");
var words = result.length;
console.log(`Total no of words are : ${words}`);

console.log(`---------------------`);
var greet = "      Good Morning      ";
var result = greet.trim();
console.log(
  `Before Trim String length:${greet.length},After Trim string is ${result} and its length is `
);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length;
var endSpaces = greet.length - trimEndLength;
console.log(`End Spaces is:${endSpaces}`);

console.log(`---------------------`);
var greet = "Good Morning virat Dude";
var result = greet.replace("", "-");
console.log(`After replace ' ' with '-' string is : ${result}`);
var result = greet.replace("o", "O");
console.log(`result string is: ${result}`);

console.log(`---------------------`);
var result = greet.slice(5, 12);
console.log(`Slice from index 5 till 12 is :${result}`);
