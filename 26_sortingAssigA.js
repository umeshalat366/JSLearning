const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45]

//Reverse the array
arrayRollNumbers.reverse();
console.log("reverse method",arrayRollNumbers);

//use the sort() method
arrayRollNumbers.sort();
console.log("sorting method",arrayRollNumbers);

//sort the array in ascending order by writing your custom logic
arrayRollNumbers.sort((a1,a2)=>{
return a1>a2 ? 1:-1;
})
console.log("Ascending order",arrayRollNumbers);

//find the greatest number from array

 const greatestNumber=Math.max(...arrayRollNumbers);
console.log("greatest no from array",greatestNumber);

//find the smallest number from the array

const smallestNumber=Math.min(...arrayRollNumbers);
console.log("smallest no from array",smallestNumber);

//Remove duplicates from array
const duplicateArray=[...new Set(arrayRollNumbers)];
console.log("removed duplicate value from array",duplicateArray);