console.log(
  `-----------------Male eligibility for marriage------------------------`
);

function maleMarriageEligibility(gender, age, boyName) {
  var isMaleAndEligible = gender.toLowerCase() === "male" && age >= 21;
  var message = isMaleAndEligible
    ? `${boyName} is eligible for marriage.`
    : `${boyName} is not eligible for marriage.`;

  return message;
}

var result1 = maleMarriageEligibility("male", 25, "Billgates");
console.log(result1);
var result2 = maleMarriageEligibility("male", 17, "Stew Jobs");
console.log(result2);
console.log(`------------female eligibility for marriage-----------------`);

function femaleMarriageEligibility(gender, age, girlName) {
  var isMaleAndEligible = gender.toLowerCase() === "feSmale" && age >= 18;
  var message = isMaleAndEligible
    ? `${girlName} is eligible for marriage.`
    : `${girlName} is not eligible for marriage.`;

  return message;
}

var result1 = femaleMarriageEligibility("female", 16, "Janifer");
console.log(result1);
var result2 = femaleMarriageEligibility("female", 27, "Malinda Gates");
console.log(result2);
console.log(`-----------------------------`);
