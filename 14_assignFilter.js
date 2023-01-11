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
  const emp_viny = new Employee(77, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const arrayOfEmployee = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  
  console.log("====== Filter out Employees whose is working in TCS======");
  const arrayFilterEmployee =arrayOfEmployee.filter((Employee) =>{
    return Employee.emp_company == "TCS";
  });
  arrayFilterEmployee.forEach((element) => {
    console.log("Employee name=", element.emp_name, "    Employee company =",element.emp_company);
  })

//   console.log("====== Filter out vehicles whose prices are greater than 200000=======");
//  const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
//  const arrayFilterVehicle = arrayOfVehicles.filter( (vehicle) =>{
//     return vehicle.price > 200000;
//  } );
//  arrayFilterVehicle.forEach( (element) => {
// console.log(element.company, element.price);
//  } );