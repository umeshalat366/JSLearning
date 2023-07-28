var voteEligible = function (age) {
  var ageValue = -age;
  if (age <= 0 || isNaN(ageValue) || age > 130) {
    console.log(`${age} Age is invalid ${ageValue}`);
  } else {
    if (age >= 18) {
      console.log(`You are ${age} eligible for voting`);
    } else {
      console.log(`You are ${age} not eligible for voting`);
    }
  }
};
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
