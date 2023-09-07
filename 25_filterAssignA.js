const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];

const newArray = arrayNumbers.filter( (currentValue) =>{

    return currentValue>50;

} );
console.log("Numbers greater than 50",newArray);
console.log(`---------------------------------`);

const evenNumbers = arrayNumbers.filter( (currentValue) =>{

    return currentValue%2==0;

} );
console.log("Even No",evenNumbers);
console.log(`---------------------------------`);

const oddNumbers = arrayNumbers.filter( (currentValue) =>{

    return currentValue%2===1;

} );
console.log("Odd No",oddNumbers);
console.log(`---------------------------------`);

const multipleNo = arrayNumbers.filter( (currentValue) =>{

    return currentValue%5==0;

} );
console.log("Multiple by 5",multipleNo);
console.log(`---------------------------------`);

const between= arrayNumbers.filter( (currentValue) =>{

    return currentValue>20 && currentValue<50;

} );
console.log("No between 20 & 50",between);
console.log(`---------------------------------`);
