let bankSbi = {
    bankName: "SBI Bank",
    year: 1997,
    accountNo: 652985,
    ifsc: "SBIN0003",

}

let bankLocation ={
    street:"kharadi Bypass road",
    city:"Pune",
    pinCode:"411 014",

}

let clonebankSbi1 = Object.assign({} , bankSbi,bankLocation); 
console.log(clonebankSbi1);
let clonebankSbi2={...bankSbi,bankLocation};
console.log(clonebankSbi2);


let rateOfInterest = {
    homeLoanInterest: "5.2%",
    personalLoanInterest: "6.5%",
    duelInterest: "8.2%",
  }
  
  let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
  console.table(sbiDetails);
    for (const key in sbiDetails) {
      
      if (Object.hasOwnProperty.call(sbiDetails,[key])) {
        const element = sbiDetails[key];
        console.log(element);
      }
    }

  
    
  
  