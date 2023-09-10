



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

  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  
  let arrayEmployees = [emp_anil, emp_radha, emp_rishi,  emp_sonali, emp_monika, emp_viny, emp_mahi, ];
  //find employees from wipro company
  const wiproEmployees = arrayEmployees.filter((Employee )=>{
    return Employee.emp_company === "Wipro";
 } );
 
 for (const employee of wiproEmployees) {
     console.log(`Company Name : ${employee.emp_company}, Employee Name : ${employee.emp_name}`);
 }
 console.log(`--------------------------------------------`);
//find employee names from IT or HR department
 const ITorHREmployees = arrayEmployees.filter((Employee )=>{
    return Employee.emp_dept === "IT" || Employee.emp_dept === "HR";
 } );
 
 for (const employee of ITorHREmployees) {
     console.log(`Company Name : ${employee.emp_dept}, Employee Name : ${employee.emp_name}`);

 }
 console.log(`----------------------------------------------`);
//Find employee id greater than 50
 const employeesID=arrayEmployees.filter((Employee)=>{
    return Employee.emp_id>50;
 })
 for (const employee of employeesID) {
    console.log(`Employee ID : ${employee.emp_id}`);

}
console.log(`--------------------------------------------`);
//Find all the employees whose names start with letter A or V or M 
const employeesNames=arrayEmployees.filter((Employee)=>{
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V") || Employee.emp_name.startsWith("M");
 });
 for (const employee of employeesNames) {
    console.log(` Employee Name : ${employee.emp_name}`);

}
console.log(`----------------------------------------`);
//find the average salary of the employee for all  the department

const employees = arrayEmployees.filter((Employee) => {
    return Employee.emp_dept === 'IT' || Employee.emp_dept === 'HR' || Employee.emp_dept==='Finance';
});

let salaryTotal = 0;
for (const employee of employees) {
    salaryTotal = salaryTotal + employee.emp_salary;
}
console.log(`Average Salary from all department: ${salaryTotal/employees.length}`);
console.log(`-------------------------------------------`);
//Find the average salary for IT department

// Filter employees in the IT department
const itDepartmentEmployees = arrayEmployees.filter((employee) => employee.emp_dept === "IT");

// Use reduce to calculate the total salary of IT department employees
const totalSalaryIT = itDepartmentEmployees.reduce((total, employee) => total + employee.emp_salary, 0);

// Calculate the average salary
const averageSalaryIT = totalSalaryIT / itDepartmentEmployees.length;

console.log(`Average salary in the IT department: ${averageSalaryIT}`);
