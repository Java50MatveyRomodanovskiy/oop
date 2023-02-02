import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
export const alertMess = {};
// import { getRandomNumber } from "./utils/random.js";
// const MIN_ID = 100000000;
// const MAX_ID = 999999999;
const company = new Company();
const employeeForm = new EmployeeForm("form-section")
function addEmployee(employeeData) {
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
    alertMess.message = company.addEmployee(employee);
    console.log(employee)
    console.log(company.getEmployeesBySalaries(-1,-1));
}

employeeForm.addFormHandler(addEmployee)

