

function add(num1,num2,...num){
    console.log(num);
    console.log(`num ${num1}, num${num2}`);
    console.log(`----------------------------`);
}
add(5,6);
add(9,5,6);
add(78,90,51,68);
add(89,90,45,78,90,51,68);

//Addition

function add(...nums){
    console.log(nums);
     let sum=0;
     for(const num of nums){
         sum+=num;
     }
     console.log(`Addition is: ${sum}`);
     console.log(`------------------------`);
 }
 add(5,6);
 add(9,5,6);
 add(78,90,51,68);
 add(89,90,45,78,90,51,68);
