import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { Table } from "./ui/table.js";
import { Tags } from "./ui/tags.js";

const schema = [
    {columnName: 'Employee ID', fieldName: 'id'},
    {columnName: 'Name', fieldName: 'name'},
    {columnName: "Birth Year", fieldName: 'birthYear'},
    {columnName: "Salary (NIS)", fieldName: 'salary'},
    {columnName: "Country", fieldName: 'country'},
    {columnName: "City", fieldName: 'city'}
]
const company = new Company();
const employeeForm = new EmployeeForm("form-section");
const tableEmployees = new Table("table-section", "Employees", schema);
const tags = Array.from(document.getElementsByTagName("section")).map(el => getTagElement(el));
const tagsButton = new Tags(tags,"tags");
function getTagElement(el){
    const tagElement = {};
    tagElement['nameSection'] = el.getAttribute('namesection');
    tagElement['id'] = el.getAttribute('id');
    return tagElement;
}
tagsButton.showSection(tags);
function addEmployee(employeeData) {
   
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
        const res = company.addEmployee(employee);
        if (!res.message) {
            employeeData.id = res.id;
            tableEmployees.addRow(employeeData);
        }
        return res.message
    
}
employeeForm.addFormHandler(addEmployee)

