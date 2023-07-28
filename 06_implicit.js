console.log(`------1---------`);
result = "3" + 2;
console.log(result);
console.log(
  "why is 32 because their is implicit conversion from number 2 to string 2"
);
console.log(`-------2--------`);

result = "3" + true;
console.log(result);
console.log(
  "why is 3true because their is implicit conversion from boolean to string 'true"
);

console.log(`------3---------`);

result = "3" + undefined;
console.log(result);
console.log(
  "why is undefined because their is implicit conversion from undefined 2 to string undefined"
);

console.log(`-------4--------`);

result = "3" + null;
console.log(result);
console.log(
  "why is 3null because their is implicit conversion from null to string null"
);

console.log(`------5---------`);

result = 4 + true;
console.log(result);
console.log(
  "why is 5 because their is implicit conversion from boolean to number '4' true to number 1"
);

console.log(`------6---------`);

result = 4 + false;
console.log(result);
console.log(
  "why is 4 because their is implicit conversion from boolean value false to no '0"
);

console.log(`-------7--------`);

result = "4" - "2";
console.log(result);
console.log(
  "why is 2 because their is implicit conversion from string value '4' to number 2 "
);

console.log(`-------8--------`);

result = "4" - 2;
console.log(result);
console.log(
  "why is 2 because their is implicit conversion from number '2' value to string value 2"
);

console.log(`------9---------`);

result = "4" * 2;
console.log(result);
console.log(
  "why is 8 because their is implicit conversion from string value '4' to no 4"
);

console.log(`-------10--------`);

result = "4" / 2;
console.log(result);
console.log(
  "why is 2 because their is implicit conversion from string value '4' to no 4"
);

console.log(`---------------`);
