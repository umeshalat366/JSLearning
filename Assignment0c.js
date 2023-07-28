var result = 0 == ``;
console.log(
  ` double equal operator to compare empty string the comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);

var result = 0 == `0`;
console.log(
  `To compare the number and string 0 ,the comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);

var result = 0 == false;
console.log(
  `To compare the number 0 and the boolean value false, comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);

var result = null == undefined;
console.log(
  `To compare null and undefined the comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);

var result = 1 == [1];
console.log(
  `To compare the number 1 and the array[1] comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);

var result = 1 == true;
console.log(
  `To compare the number 1 and the boolean value true comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);

var result = 1 == `1`;
console.log(
  `To compare the number 1 and the string '1' comparison wil return true. ${result} result is- true`
);
console.log(`-------------------------------`);
