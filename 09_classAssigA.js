

console.log(`-------------Task No 1--------------------`);
class Vehicle {
    constructor(vehicleNo, companyName, color, vehicleType, founderName){
        this.vehicleNo=vehicleNo;
        this.companyName=companyName;
        this.color=color;
        this.vehicleType=vehicleType;
        this.founderName=founderName;
    }
    show(){
        console.log(`Vehicle Number is: ${this.vehicleNo},company Name:${this.companyName},
    color:${this.color},Type of vehicle:${this.vehicleType},Name of founder:${this.founderName}`);
    }
}
let vehicleNo1=new Vehicle("AB06CD1234","Hero","Red", "Two wheeler","Brij Mohal lal Munjal");

let vehicleNo2=new Vehicle("EF07GH5678","Honda","Black", "Two wheeler","soichiro Honda");

let vehicleNo3=new Vehicle("IJ08KL9101","Toyota","White", "four Wheeler","kichiro Toyota");

let vehicleNo4=new Vehicle("MN09OP4598","Innova", "Maroon","Four wheeler","kijang Innova" );

let vehicleNo5=new Vehicle("YZ56DF3829","Pulsar", "Orange","Two wheeler","Glynn Kerr");


const arrayOfVehicles=[vehicleNo1,vehicleNo2,vehicleNo3,vehicleNo4,vehicleNo5];
console.log(`Traversing array`);
for (const Vehicle of arrayOfVehicles ) {
    Vehicle.show();
}

console.log(`-------------Task No 2--------------------`);

class College{
    constructor(collegeName,location,collegeStaff,foundationYear){
    this.collegeName=collegeName;
    this.location=location;
    this.collegeStaff=collegeStaff;
    this.foundationYear=foundationYear;
    }
    display(){
        console.log(`college Name:-${this.collegeName},location:${this.location},
        collegeStaff:${this.collegeStaff},foundation Year:${this.foundationYear} `);
    }
    
}
const college1= new College("KIIT","Barshi",75,1997);
console.log(college1);

const college2= new College("SSMB", "Solapur",80,1990);
console.log(college2);

const college3= new College("Modern","Pune",65,1985);
console.log(college3);

const college4= new College("SM","Mumbai",45,2001)
console.log(college4);

console.log(`-----------Task No 3--------------------`);


function traverseObject(Object){
    for (const key in Object) {
        if (Object.hasOwnProperty( key)) {
            const element = Object[key];
            console.log(`${key},${element}`);
            
            
        }
    }

}

traverseObject(college1);
console.log(`---------------------`);
traverseObject(college2);
console.log(`---------------------`);
traverseObject(college3);
console.log(`---------------------`);
traverseObject(college4);
console.log(`----------------------`);


