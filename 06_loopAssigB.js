function reverseString(str){
    let reversed ="";
    for (let i=str.length-1; i>=0; i--) {
        if (str[i] !==' '){
            reversed+=str[i];
        }
    }
    return reversed;
}
let string1="Hard work always pays back";
let string2="Soon I will be Angular IT Champ";

let reversedString1=reverseString(string1);
console.log(reversedString1);
let reversedString2=reverseString(string2);
console.log(reversedString2);