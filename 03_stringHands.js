console.log(`1-----------------------`);
var companyName1 = " infosys";
console.log("My dream company is:-:", companyName1);
console.log(`2-----------------------`);

var hobby1 = "Drawing pencil sketch,";
var hobby2 = "Swimming,";
var hobby3 = "Reading Books.";
console.log("My hobbies are:-", hobby1, hobby2, hobby3);
var combinedString = hobby1 + hobby2 + hobby3;
var totalCharacters = combinedString.length;
console.log("adddition of all char in all my hobbies are:-", totalCharacters);

console.log(`3-----------------------`);

var string = "Hey you are doing good, keep it up";
console.log(string);

console.log(`4-----------------------`);
var myString = "Hey you are doing good, keep it up";
var lengthOfString = myString.length;
console.log("length of my string", lengthOfString);

console.log(`5-----------------------`);

var stringWithoutSpace = myString.replace(/\s/g, "");
var stringWithoutSpace = stringWithoutSpace.length;
console.log("string length after removing spaces", stringWithoutSpace);
console.log(`6----------------------`);

var myString = "Hey you are doing good, keep it up";
var ExtraSpacesCount = myString.split(" ").length - 1;
console.log("Extra spaces in string", ExtraSpacesCount);
console.log(`7-----------------------`);

var firstCharacter = myString.charAt(0);
console.log("first character is:", firstCharacter);

var LastCharacter = myString.charAt(myString.length - 1);
console.log("last character is:", LastCharacter);
console.log(`8-----------------------`);

var myString = "Hey you are doing good, keep it up";
var result = myString.indexOf("good");
console.log("Index of good is", result);
console.log(`9-----------------------`);

var myString = "Hey you are doing good, keep it up";
var result = myString.substring(22);
console.log("String after 22 :-", result);
console.log(`10-----------------------`);

var myString = "Hey you are doing good, keep it up";
var result = myString.includes("up");
console.log("is string ends with word up:-", result);
console.log(`11-----------------------`);

var myString = "Hey you are doing good, keep it up";
var result = myString.includes("Hey");
console.log("is string ends with word Hey:-", result);
console.log(`-----------------------`);
