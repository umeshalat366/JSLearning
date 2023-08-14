let sbiBank = {
    bankName : "Axis Bank",
    location : "Barshi",
    accountNumber : "431695",
    ifsc : "SBIN000567",
    interestRate : 7.1,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName : "SBI Bank",
    location : "Pune",
    accountNumber : "127648",
    ifsc : "AxIS00587",
    interestRate : 5.2,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
axisBank.showDetails();
let hdfcBank = {
    bankName : "YES Bank",
    location : "Hadapsar",
    accountNumber : "983527",
    ifsc : "HDFC0057",
    interestRate : 6.2,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
hdfcBank.showDetails();

let yesBank = {
    bankName : "HDFC Bank",
    location : "Kharadi",
    accountNumber : "629125",
    ifsc : "YES000876",
    interestRate : 7.6,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
yesBank.showDetails();