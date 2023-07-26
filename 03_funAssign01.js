function one() {
  console.log("------------first step---------------");
  console.log("function with no arguments and no return type one");
}
one(); //function invocation

function two() {
  console.log("function with no arguments and no return type two");
}
two(); //function invocation

function personalDetails(firstName, lastName, collegeName) {
  console.log("------------Second step---------------");
  console.log(
    "first name:",
    firstName,
    "last name:",
    lastName,
    "college name:",
    collegeName
  );
}
personalDetails("Umessh", "Alat", "KIIT");

function swapValues() {
  console.log("------------Third step---------------");
  var name1 = "virat";
  var name2 = "Anushka";
  console.log("Before swapping:-", name1, name2);

  var temp = name1;
  name1 = name2;
  name2 = temp;
  console.log("After swapping:-", name1, name2);

  console.log("-------------------");
}
swapValues();

function swapValuesDude(x, y) {
  console.log("Before swapping:-", x, y);

  var temp = x;
  x = y;
  y = temp;
  console.log("After swapping:-", x, y);

  console.log("-----------fourth step-----------------");
}
swapValuesDude("1000", "2000");

function addThreeValues(para1, para2, para3) {
  console.log("values are:", para1, para2, para3);
  var result = para1 + para2 + para3;
  return result;
}
var res = addThreeValues(10.23, 600, 40);
console.log("Addition is:-", res);
console.log("----------------");

function addThreeValues(para1, para2, para3) {
  console.log("values are:-", para1, para2, para3);
  var result = para1 + para2 + para3;
  return result;
}
var res = addThreeValues("Hello", "Good", "Morning");
console.log("Result is:-", res);
console.log("-------fifth step---------");

function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "Bank Name:-",
    bankName,
    "Account Number:-",
    accountNum,
    "Location:-",
    location,
    "Pin Code:-",
    pinCode
  );
}
bankDetails("CITI Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "Open");
