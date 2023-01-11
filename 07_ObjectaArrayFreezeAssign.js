console.log(`object with personal Details...`);
const personalDetails = {
    name : "Sanjay",
    education: "BE",
    location: "pune",
    age: 26,
    gender: "Male",
}
console.log(`Personal Details are ==>`,personalDetails);

console.log(`-------------------------------------------------------------` );

console.log(`object with College Details...`);
const collegeDetails = {
    clgName : "SKN SCOE",
    location : "pandharpur",
    university : "solapur university",
    departments : function(){
           console.log(``);
    }
}
console.log(`College Details are ==>`,collegeDetails);

console.log(`-------------------------------------------------------------`);

console.log(`After Merging above 2 Objects and logging details...`);
let mergeObjects = Object.assign(personalDetails,collegeDetails);
console.log(mergeObjects);

console.log(`-------------------------------------------------------------`);

console.log(`Creating an array of friends & freezing it`);

const arrayOfFriendsName = ["akshay","pravin", "shubham", "vishal", "anand"]
let freezeArray = Object.freeze(arrayOfFriendsName);
console.log(freezeArray);
console.log();
