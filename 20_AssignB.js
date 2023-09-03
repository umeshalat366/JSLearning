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

// Problem Statement 1: Find all the employees working in TCS and log only employee names and company names on console
console.log("Employees working in TCS:");
arrayEmployees.forEach(employee => {
    if (employee.emp_company === "TCS") {
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
});
console.log(`------------------------------------------`);

// Problem Statement 2: Find finance department employees and log department and employee names
console.log("\nEmployees in the Finance Department:");
arrayEmployees.forEach(employee => {
    if (employee.emp_dept === "Finance") {
        console.log(`Department: ${employee.emp_dept}, Name: ${employee.emp_name}`);
    }
});
console.log(`-----------------------------------------`);
// Problem statement 3: Find the employees whose name starts with "R"
const employeesStartingWithR = arrayEmployees.filter(employee => employee.emp_name.startsWith("R"));

console.log("Employees whose name starts with 'R':");
employeesStartingWithR.forEach(employee => {
    console.log(`Employee ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
});
console.log(`--------------------------------------------`);

// Problem Statement 4: Find employees with salary greater than 75000
const highSalaryEmployees = arrayEmployees.filter(employee => employee.emp_salary > 75000);

console.log("Employees with salary greater than 75000:");
highSalaryEmployees.forEach(employee => {
    console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
});
console.log(`--------------------------------------------------`);

// Problem statement 5: Find employees with salary greater than or equal to 50000 and from IT department
console.log("Employees with salary greater than or equal to 50000 and from IT department:");
for (const emp of arrayEmployees) {
    if (emp.emp_salary >= 50000 && emp.emp_dept === 'IT') {
        console.log(emp);
    }
}
console.log(`--------------------------------------------------------`);
// Problem statement 6: Find employees from company Infosys
console.log("Employees from company Infosys:");
for (const emp of arrayEmployees) {
    if (emp.emp_company === 'Infosys') {
        console.log(emp);
    }
}






