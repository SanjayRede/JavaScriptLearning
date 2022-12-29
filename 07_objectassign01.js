// const professor={

// }
// professor.name="steves"
// professor.age="50"
// professor.height="5.5"
// professor.gender="male"
// professor.city="pune"

let professor={
    name:"steves",
    age:"50",
    height:"5.5",
    gender:"male",
    city:"pune",
    degrees : {
        engineering :"csc",
        PHD:"ADV computing",
        totalDegrees : function (){
                        return this.engineering + this.PHD ;
        
        }
            
    },
    certificates:{
        certificate1:"Hacker rank participation",
        certificate2:"IFE course",
        certificate3:"ADV programming",
    }
}
console.log(`properties of object`);
console.log(professor);
console.log(`adding nested object degrees`);
console.log(professor.degrees);
console.log(`adding nested object certificates`);
console.log(professor.certificates);

// const total=professor.totalDegrees()
// console.log(total);  
console.log(`Adding an Nested function property`);
const totalDegrees=professor.degrees.totalDegrees ;
console.log(totalDegrees);


console.log(`=== Adding new property into an object====`);
professor.company = "Microsoft";
console.log(professor);

console.log(`=== moifying property into an object====`);
professor.age= "55";
console.log(professor);

console.log(`=== deleting certificate from nested object====`);
delete professor.certificates
console.log(professor);

console.log(`=== Adding an property into an object====`);
professor.certificates = "officer";
console.log(professor);



// let professor = {
//     name : "Mr. Patil",
//     gender : "Male",
//     age : "55",
//     city : "Kolhapur",
//     degrees : {
//         engineering : "CSC",
//         PHD : "Adv Computing",
//         award : "Best Danser",
//         
//         }
//     } ,
//     certificates : {
//         cartificate1 : "Hacker Rank Participation",
//         cartificate2 : "IFE Cource",
//         cartificate3 : "Adv Programming"
//     }
// }
// console.log(`-----------------------------------------------`);
// console.log(`(1) All the Properties`);
// console.log(professor);
// console.log(`-----------------------------------------------`);
// console.log(`(2) Include nested object "Degrees".`);
// console.log(professor.degrees);
// console.log(`-----------------------------------------------`);
// console.log(`(3) Include nested object " certificates".`);
// console.log(professor.certificates);
// console.log(`-----------------------------------------------`);

// console.log(`(4) Add function Which Will concate all the degrees.`);
// console.log(professor.degrees);
// let degree = professor.degrees.allDegrees();
// console.log(`total Degrees of Processor are : "${degree}".`);
// console.log(`-----------------------------------------------`);
// console.log(`(5) Try to add new property.`);
// professor.married = "yes"
// console.log(professor);
// console.log(`Added married Property.`);
// console.log(`-----------------------------------------------`);
// console.log(`(6) modify existing property.`);
// professor.age = 58;
// console.log(professor);
// console.log(`Age is modified`);
// console.log(`-----------------------------------------------`);
// console.log(`(7) Delete any one certificate .`);
// console.log(professor.certificates);
// delete professor.certificates.cartificate1;
// console.log(professor.certificates);