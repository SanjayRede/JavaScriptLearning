function bankDetails(bankName,accountNum,location,Pincode) {
    console.log("Bank Name:CITI BANK",   "Account NO:3456782345", "location:pune", "pincode:411202");
    console.log("Bank Name:Axix BANK",   "Account NO:7856782345", "location:mumbai", "pincode:441202");
    console.log("Bank Name:HDFC BANK",   "Account NO:8956782345", "location:pune", "pincode:631202");

}
bankDetails();

console.log("-------addition--------");
function add(value1,value2) {
    console.log(value1+value2);
}
add(10,20);
add("sanjay", "rede")
console.log("-------mutiply 1--------");
function multiply(num1,num2) {
    console.log(num1*num2);
}
multiply(10,2);

console.log("-------mutiply 2--------");

function multiply(num1,num2) {
    var result=num1*num2;
    console.log(result);
    return result;
}
 var multiplyresult = multiply(10,4);
 var finalresult = multiplyresult +100
 console.log(finalresult);





