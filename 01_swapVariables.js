var name1 = "Sweety";
var name2 = "Cutie";
console.log("Before Swap==>", "name1:", name1, "name2", name2);
var temp = name1;
name1 = name2;
name2 = temp;
console.log("After Swap==>", "name1:", name1, "name2", name2);
console.log("------------------------");

function swap(a, b, c) {
  a = a + b + c;
  b = a - (b + c);
  c = a - (b + c);
  a = a - (b + c);
  return [a, b, c];
}
a = 100;
b = 200;
c = 300;
console.log("Before swapping:");
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);
result = swap(a, b, c);
console.log("After swapping:");
console.log("a=" + result[0]);
console.log("b=" + result[1]);
console.log("c=" + result[2]);
