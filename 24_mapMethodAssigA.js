
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
// Add 10 into each element 
const newArray = arrayNumbers.map((currentValue) =>{
   return currentValue + 10;
});
console.log("Adding 10 into each array element:-",newArray);
console.log(`-----------------------------------`);
//cube the each array
 const arrayOfCube = arrayNumbers.map((currentValue) => {

   return currentValue * currentValue * currentValue;

 });

 console.log("Cubes of given array:-",arrayOfCube);
console.log(`---------------------------------------`);
//Add the index value into its corresponding each array
const arrayOfIndex = arrayNumbers.map((currentValue, index) => {
    return currentValue + index;
});
console.log("Adding Index value:-",arrayOfIndex);
console.log(`-------------------------------------`);

