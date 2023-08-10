let personalDeatailsStr=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32,Laham St.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "refferred by":"E0012"
}`

const personalDetails=JSON.parse(personalDeatailsStr);
console.log(personalDetails.role[0]);
console.log("Name:",personalDetails.name.split(" ")[1]);
console.log("joining year of employee:",personalDetails.doj.split("-")[2]);
