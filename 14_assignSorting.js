class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
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
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.log(`1)sort in ascending order by employee id`);
console.log(``);
arrayOfEmployee.sort((Employee1,Employee2)=>{
    return Employee1.emp_id >Employee2.emp_id ? 1: -1;
});
arrayOfEmployee.forEach((curruntValue)=>{
    console.log(curruntValue.emp_name,curruntValue.emp_id,curruntValue.emp_dept);
});

console.log(``);
console.log(`2)sort in ascending order by employee department`);
console.log(``);
arrayOfEmployee.sort((Employee1,Employee2)=>{
    return Employee1.emp_dept > Employee2.emp_dept ? 1: -1;
});
arrayOfEmployee.forEach((curruntValue)=>{
    console.log(curruntValue.emp_id,curruntValue.emp_dept,curruntValue.emp_company);
});

console.log(``);
console.log(`3)sort in descending order by employee salary`);
console.log(``);
arrayOfEmployee.sort((Employee1,Employee2)=>{
    return Employee1.emp_salary < Employee2.emp_salary ? 1: -1;
});
arrayOfEmployee.forEach((curruntValue)=>{
    console.log(curruntValue.emp_name,curruntValue.emp_salary,curruntValue.emp_company);
});


// const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
// arrayOfVehicles.sort((vehicle1, vehicle2)=> {
//    return vehicle1.price > vehicle2.price ? 1 : -1;
// });
// arrayOfVehicles.forEach((currentValue)=>{
//    console.log(currentValue.company, currentValue.price);
// });