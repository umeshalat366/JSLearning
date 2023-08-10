var isPrime=function(number){
    var count=0;
    for (var i = 1; i<= number; i++) {
        if(number%i==0){
            count=count+1;
        }
}
if (count==2) {
    return true;
} else {
    return false;
}
}
//checking 11 & 21 are prime no
if (isPrime(11)) {
    console.log("11 is the Prime no");
} else {
    console.log("11 is not prime no");
    
}
if (isPrime(21)) {
    console.log("21 is prime no");
} else {
    console.log("21 is not prime no");
}