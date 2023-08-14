console.log(`----------------------------Implicit conversion to String--------------------------------`);
var result = '3' + 2;
console.log(result);
console.log(`Result is 32 because 2 is number type implicitly converted to string`);

console.log(`.........................................................................................`);
var result= '3' + true;
console.log(result);
console.log(`Result is 3true because true is Boolean type is implicitly converted to string`);

console.log(`.........................................................................................`);
var result = '3' + undefined;
console.log(result);
console.log(`Result is 3undefined because undefined is implicitly converted to string`);

console.log(`.........................................................................................`);
var result = '3' + null;
console.log(result);
console.log(`Result is 3null because null is implicitly converted to string`);

console.log(`---------------------------Implicit boolean conversion to Number-------------------------`);
var result = '4' - true;
console.log(result);
console.log(`Result is 3 because '4' is String get converted into number and true means 1 `);

console.log(`.........................................................................................`);
var result = 4 + true;
console.log(result);
console.log(`Result is 5 because true means 1 it is implicitly converted to number type`);

console.log(`-----------------------------------------------------------------------------------------`);
console.log(0==' ');
console.log(`0==' ' Result is true because true space is getting converted to number implicitly`);

console.log(`-----------------------------------------------------------------------------------------`);
console.log(0=='0');
console.log(`0=='0' Result is true because 0 is getting converted to number implicitly`);

console.log(`-----------------------------------------------------------------------------------------`);
console.log(0==false);
console.log(`0==false Result is true because false is getting converted to number`);

console.log(`-----------------------------------------------------------------------------------------`);
console.log(null==undefined);
console.log(`null==undefined Result is true because loosely equal as both are different type`);