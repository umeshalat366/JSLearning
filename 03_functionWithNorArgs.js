//function with no argument and no return value
function show() {
  console.log("My name is Umesh");
  console.log("I am technical lead");
  console.log("My tech skill is - Java+ Angular + React + DevOps +");
  console.log("---------------------------");
}
show(); //function invocation

function checkType(value) {
  console.log("Value is:", value);
  console.log("Type is", typeof value);
  console.log("---------------------------");
}
checkType(100);
checkType("UA");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

//function with argument and return value
function addition(arg1, arg2, arg3) {
  console.log("values are:", arg1, arg2, arg3);
  var result = arg1 + arg2 + arg3;
  return result;
}
var res = addition(10, 23, 456);
console.log("Result is", res);
var resultValue = addition(-56, 239, 677);
console.log("Result is", resultValue);
var resultValue = addition("UA", "Pune", 88);
console.log("Result is", resultValue);

var result = addition("UA", "Pune", 88);
console.log("Result is", result);


function display(){
    return "Learning 35";
}
var resultsDisplay = display();
console.log();