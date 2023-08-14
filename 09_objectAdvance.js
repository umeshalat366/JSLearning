// student = person; // Not allwed

const employee = {
    empNo: 2233,
    state: "MH",
    city: "Pune",
    company: "Infosys",
    designation: "Software Engineer"
}
Object.freeze(employee);
employee.empNo = 2345;
employee.company = "TCS";
console.log(employee);