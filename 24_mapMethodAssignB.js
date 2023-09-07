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

//Add all employee objects inside array
//get the list of all employee names 
const array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
const employeeNames=array.map((currentValue)=>{
    return currentValue.emp_name;

});
console.log("Employee Names:-",employeeNames);
console.log(`---------------------------------`);


const departmentNames=array.map((currentValue)=>{
    return currentValue.emp_dept;
});
console.log("Department Names:-",departmentNames);
console.log(`---------------------------------`);

const employeeId=array.map((currentValue)=>{
    return currentValue.emp_id;
});
console.log("Employee Id:-",employeeId);
console.log(`---------------------------------`);


