console.log(`----------------Total sum using for loop----------------------`);
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
let sum=0;
for (const element of array_numbers) {
    sum=sum+element;
}
console.log(sum);
console.log(`-----------Total sum using Reduce method----------------------`);

const totalSum=array_numbers.reduce((runningTotal,element)=>{
          return runningTotal+element;
})
console.log(totalSum);
console.log(`----------------multiple of 5 and then sum it-------------------------`);



// Using  filter method to filter out numbers that are multiples of 5
const multiplesOf5 = array_numbers.filter((multiplesOf5)=>{
           return multiplesOf5%5===0;
})

// Using reduce method to sum of all numbers in array
const sumOfMultiplesOf5 = multiplesOf5.reduce((currentValue,index) =>  {
    return currentValue+index;
});

console.log("multiples of 5:", multiplesOf5);
console.log("Sum of numbers multiples of 5:", sumOfMultiplesOf5);
