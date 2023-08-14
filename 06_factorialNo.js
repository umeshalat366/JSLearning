// 5! = 1 * 2 * 3 * 4 * 5

 

let result = 1; // 3 

for (let index = 1; index <= 5; index++) {

    result = result * index;

}

console.log(`Factorial of 5 is ${result}`);
console.log(`----------------------------------------`);

 

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7

function factorial(n){
    if (n==0 || n==1){
        return 1;
    } else{
        return n* factorial(n-1);
    }
}
const numbers =[5,9,11,7];
for(const num of numbers){
    console.log(`factorrial of ${num} is ${factorial(num)}`);
}