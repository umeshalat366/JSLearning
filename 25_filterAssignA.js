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

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
       this.emp_id = emp_id;
       this.emp_name = emp_name;
       this.emp_dept = emp_dept;
       this.emp_salary = emp_salary;
       this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infosys");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

//Employees from TCS

console.log(`---------------------------------`);

const tcsEmployees = arrayEmployees.filter((Employee )=>{
   return Employee.emp_company === "TCS";
} );

for (const employee of tcsEmployees) {
    console.log(`Company Name : ${employee.emp_company}, Employee Name : ${employee.emp_name}`);
}
console.log(`----------------------------------`);
//find average salary of wipro
const wiproEmployees = arrayEmployees.filter((Employee) => {
    return Employee.emp_company === 'Wipro';
});

let salarySum = 0;
for (const employee of wiproEmployees) {
    salarySum = salarySum + employee.emp_salary;
}
console.log(`Average Salary from Wipro : ${salarySum/wiproEmployees.length}`);

//find average salary of wipro or infy
console.log(`........................................`);
const employees = arrayEmployees.filter((Employee) => {
    return Employee.emp_company === 'Wipro' || Employee.emp_company === 'Infy';
});

let salaryTotal = 0;
for (const employee of employees) {
    salaryTotal = salaryTotal + employee.emp_salary;
}
console.log(`Average Salary from Wipro or Infy : ${salaryTotal/employees.length}`);


