const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Given array is --> [${arrayNums}]`);

let clonedArray = arrayNums;
clonedArray.push(55,56);
console.log(`After shallow clone Original array is: ${arrayNums} `);
console.log(`After Shallow clone Cloned Array is : ${clonedArray}`, );

console.log(`-------------------------------------------------`);

let deepCloneOriginalArray = [...arrayNums];
let updatedeepCloneOriginalArray = deepCloneOriginalArray.push(10,25);
console.log(`Original array is :`,arrayNums);
console.log(`deep Cloned Array is :`,deepCloneOriginalArray);

console.log(`-------------------------------------------------`);
const arrayEven = [2,30,14,8];
console.log(`Given array is :`,arrayEven);
let mergeArray = [...arrayNums,...arrayEven];
console.log(`After merging array is :`,mergeArray);

console.log(`-------------------------------------------------`);
console.log(`Creating employee_info object.`);
const employee_info ={
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address : {
        locality : {
            colony: "Sai Krupa society",
            street: "Mumbai, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles: ["+91 9226 496 077", "1800- 1234 53", "+91- 1234 5678 90"]
}
console.log(employee_info);

console.log(`-------------------------------------------------`);
console.log(`Employee Details of "${employee_info.emp_name}" are -`);
let empAddress = employee_info.address.locality;
console.log(`address locality is : "${empAddress.colony}","${empAddress.street}", city : "${employee_info.address.city}", State : "${employee_info.address.state}" & Country is : "${employee_info.address.country}"`);
console.log(`Employee info numbers are: ${employee_info.mobiles[0]}, ${employee_info.mobiles[1]}, ${employee_info.mobiles[1]}`);

console.log(`-------------------------------------------------`);
console.log(`Performing deep copy using JSON.stringfy().`);
console.log(`Before updating july month salary is :`,employee_info.salary);
let newemployee_info = JSON.parse(JSON.stringify(employee_info));
newemployee_info.salary.july_month = "80,0000INR";
console.log(`After updating july month salary is :`,newemployee_info.salary);

console.log(`-------------------------------------------------`);
newemployee_info.address.country = "United Kingdom";
console.log(`After updating property country is :`,newemployee_info.address);

console.log(`-------------------------------------------------`);
console.log(`Updated values for original is :"${employee_info.emp_name}"`);
console.log(newemployee_info.salary);
console.log(newemployee_info.address);