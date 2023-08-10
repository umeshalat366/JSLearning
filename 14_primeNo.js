function primeNo(n){
    var n,i,prime=true;
    n=11;
    n=parseInt(n)
    for (i= 2; i <=n-1; i++) 
    if (n%i==0) {
        prime=false;
        break;
        
    }
    if (prime=true) 
    alert(n+ "is prime");
        
     else 
     alert(n+ "is not prime");
        
    };
    const n=11;
    if (primeNo(n)) {
        console.log(`${n} is prime no`);
    } else {
        console.log(`${n}is not prime no`);
    }

        

