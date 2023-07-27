//Nan - Not a Number
var num1 = 0;
var num2 = 0;
var result = num1 / num2;
console.log(result);

console.log(`----------------`);
var num3 = "100";
console.log(`Type of num3 is : ${typeof num3}`);
var result = +num3;
console.log(`Type of num3 is : ${typeof result}`);

console.log(`----------------`);
var num4 = "UA";
var result = +num4;
console.log(`Type of num4 is : ${result}`);
console.log(`Type of num4 is : ${typeof result}`);

console.log(`--------Implicit conversion---------------`);
var result = "5" + 6;
console.log(result);

var result = "80" + true;
console.log(result);
console.log(
  `Why result is true because their is implicit conversion from boolean value true to string 'true'`
);

var result = "80" - true;
console.log(result);

console.log(`--------Explicit Conversion-----------`);
var num = "22";
var result = +num;
console.log(`Result is ${result} and its type is: ${typeof result}`);

console.log("Second way of string to number explicit conversion ");
var result = Number(num);
console.log(`Result is ${result} and its type is: ${typeof result}`);

var result = Number("Virat");
console.log(`Result is ${result} and its type is: ${typeof result}`);

var num = 100;
console.log(`Result is ${num} and its type is: ${typeof num}`);
var result = String(num);
console.log(`Result is ${result} and its type is: ${typeof result}`);

var num = 100;
var result = Boolean(num);
console.log(`Result is ${result} and its type is: ${typeof result}`);

console.log(`-------------`);
var num = "50";
var result = Boolean(num);
console.log(`Result is ${result} and its type is: ${typeof result}`);

var isMarried = true;
var result = String(isMarried);
console.log(`Result is ${result} and its type is: ${typeof result}`);
