function swap(n1, n2) {
  console.log("Inside swap function");
  console.log("Before Swap==> n1", n1, "n2", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After Swap==> n1", n1, "n2", n2);
}
var num1 = 100;
var num2 = 200;
swap(num1, num2); //Function call or invocation

var sweety = "Sweety";
var cutie = "Cutie";
swap(sweety, cutie);

var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);
console.log("End of program");
