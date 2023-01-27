// const rectangle = {width: 20, height: 10, square: function() { 
//     return this.width * this.height;
// }, perimeter: () => 
// {
//     return 2*(this.width + this.height)
// }};
// this.width = 100; // this for global object
// this.height = 200; // this for global object
// console.log(rectangle.square());
// console.log(rectangle.perimeter()); // calculate perimeter from global object data!!!

// class Rectangle{
//     #width;
//     #height;
//     constructor(width, height){
//         this.#height = height;
//         this.#width = width;
//     }
//     square(){
//         return this.#width * this.#height;
//     }
//     perimeter(){
//         return this.#width * 2 + this.#height *2;
//     }
// }
// const rectangle1 = new Rectangle (3,4);
// console.log(rectangle1.square());
// console.log(rectangle1.perimeter());
// Rectangle.prototype.square = function() {
//     return "kuku";
// }
// console.log(rectangle1.square());
// Array.prototype.map = function() {

// }
// HW #21
// Employee structure and function createEmployee()taken from previous HW
function createEmployee(id, name, birthYear, salary,city, country){
    return {id, name, birthYear, salary,city, country}
}
class Company{
    #employees //obj key:<id value>,
    constructor(){
        this.#employees = {};
    }
    
    addEmployee(employee){
        //TODO return boolean
    }

    removeEmployee(id) {
        //TODO return boolean

    }

    getEmployeesCountry(){
        //TODO return array
    }
    getEmployeesByAge(){
        //TODO return array
    }

    getEmployeesBySararies(salFrom, salTo){
        //TODO if salTo < 0, calculate from salFrom to end of obj
        // if salFrom < 0, calculate from o to salFrom
    }

}