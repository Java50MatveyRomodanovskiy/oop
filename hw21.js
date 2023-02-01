class Company{
    #employees //obj key:<id value>,
    constructor(){
        this.#employees = {};
    }
    
    addEmployee(employee){
        let result = false;
        if(!this.#employees[employee.id]){
            this.#employees[employee.id] = employee;
            result = true;
        } 
        return result;
    }


    removeEmployee(id) {
        let result = false;
        if(this.#employees[id]){
            delete this.#employees[id];
            result = true;
        } 
        return result;
    }

    getEmployeesCountry(country){
        const temp = Object.entries(this.#employees);
        const res = [];
        temp.forEach(empl => {
            if (empl[1].country == country){
                res.push(empl);
            }
        });
        return res;
    }

    getEmployeesByAge(age){
        const date =  new Date().getFullYear();
        const birthYear = date - age;
        const res = Object.values(this.#employees).filter(empl => (empl.birthYear === birthYear));
        return res;
    }

    getEmployeesBySararies(salFrom, salTo){
        const res = [];
        let allEmployees = false;
        if (salFrom < 0) {
            salFrom = 0;
            allEmployees = true;
        }
        if (salTo < 0) {
            salTo = Number.MAX_SAFE_INTEGER;
            if (allEmployees == true){
                return Object.entries(this.#employees);
            }
        }
        const temp = Object.entries(this.#employees);
        temp.forEach(empl => {
            if (empl[1].salary > salFrom && empl[1].salary <= salTo){
                res.push(empl);
            }
        });
        return res;
    }

    size(){
        return Object.entries(this.#employees).length;
    }
}

//initial data
const employees = [
    createEmployee(123,"Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124,"David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125,"Sarah", 1985, 15000, "New York", "USA"),
    createEmployee(126,"Abraham", 1990, 13000, "Washington", "USA"),
    createEmployee(127,"Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128,"Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129,"Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130,"Victor", 2003, 10000, "Arad", "Israel"),
    createEmployee(125,"Petya", 2000, 15000, "Lod", "Israel"),
    createEmployee(126,"Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(127,"Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(128,"Vasya", 2000, 15000, "Lod", "Israel"),
]

function createEmployee(id, name, birthYear, salary,city, country){
    return {id, name, birthYear, salary,city, country}
}

//tests
//add
const firm = new Company();
employees.forEach(empl=> {
    firm.addEmployee(empl);
});

if (firm.size() === 8){
    console.log("addEmployee works correctly")
}

//remove
if(firm.removeEmployee(126) && !firm.removeEmployee(443)){
    console.log("removeEmployee works correctly")
}

//country
const emplByCountry = firm.getEmployeesCountry("Israel");
console.log("Employee from Israel")
emplByCountry.forEach(element => {
    console.log(element[1]);
});

//Age
const emplByAge = firm.getEmployeesByAge(23);
console.log("Employee age = 23")
emplByAge.forEach(element => {
    console.log(element);
});

//getEmployeesBySararies
let emplBySalary = firm.getEmployeesBySararies(-1, -1);
if (emplBySalary.length == 7) {
    console.log ("First salarie's test - ok");
}
console.log ("Employees with salarie from -- till 15500");
emplBySalary = firm.getEmployeesBySararies(-14999, 15500);
emplBySalary.forEach(element => {
    console.log(element[1]);
});
console.log ("Employees with salarie from 14999 till MAX ");
emplBySalary = firm.getEmployeesBySararies(14999, -1);
emplBySalary.forEach(element => {
    console.log(element[1]);
});
console.log ("Employees with salarie from 14999 till 15500 ");
emplBySalary = firm.getEmployeesBySararies(14999, 15500);
emplBySalary.forEach(element => {
    console.log(element[1]);
});

