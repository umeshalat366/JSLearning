console.log(`------------Counting vowels using a while loop:---------------------`);
function countVowels(str){
    str=str.toLowerCase();
    let vowels ="aeiou";
    let count=0;
    let i=0;

    while(i<str.length){
        if (vowels.includes(str[i])){
            count++;
        }
        i++;
    }
    return count;
}
let inputString="I am very good IT Developer";
let totalVowels=countVowels(inputString);
console.log("total vowels",totalVowels);

console.log(`------------Sum of cubes from 1 to 5:------------------------------`);
function sumOfCubes(n){
    let sum=0;
    for (let i=1; i<=n; i++){
        sum+=i*i*i;
    }
    return sum;
}
let result=sumOfCubes(5);
console.log("sum of cubes", result);

console.log(`-----------Function for odd positioned characters:----------`);
function oddPositionedChars(str){
    for (let i=0; i<str.length; i++){
        if(i%2===0 && str[i] !==' '){
            console.log(str[i]);
        }
    }
}
let string1="Hard work always pays back";
let string2="Soon I will be Angular IT Champ";
console.log("Odd positioned chars in string1:");
oddPositionedChars(string1);
console.log("Odd positioned chars in string2:");
oddPositionedChars(string2);

