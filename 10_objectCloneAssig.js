let personalDetails={
    myName:"Umesh",
    emailId:"umeshalat366@gmail.com",
    mobNo:9359722419,
    city:"Pune",
    
}

let collegeDetails={
    collegeName:"KIIT",
    adress:"Barshi",
    yearOfPassing:2021,

}

let mergedObject = Object.assign({} , personalDetails, collegeDetails);
console.table(mergedObject);

console.log(`-----------------------------------`);


let friendNames = ["Abhi", "Mahesh", "Yash", "Dhanaji"];
Object.freeze(friendNames);

for (let i = 0; i < friendNames.length; i++) {
  console.log("Name of friend",friendNames[i]);
}

console.log(`--------------------------------`);

let inputString = "Codemind Technology";
let words = inputString.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i] === "Technology") {
      words[i] = words[i].split(" ").reverse().join(" ");
    }
}

let reversedString = words.reverse(" ");
console.log(reversedString);

console.log(`----------------------`);





