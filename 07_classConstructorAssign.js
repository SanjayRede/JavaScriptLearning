console.log(`---------------------vehicle details---------------------`);
class vehicle{
    constructor(type, company, fueltype, color, model, engine){
        this.type = type;
        this.company = company;
        this.fueltype = fueltype;
        this.color = color;
        this.model = model;
        this.engine= engine;
    } 
}
let vehicle1 = new vehicle("two wheeler", "honda", "petrol", "black","unicorn", "160cc");
let vehicle2 = new vehicle("two wheeler", "hero", "petrol", "blue","splender","110cc");
let vehicle3 = new vehicle("four wheeler", "mahindra", "diesel", "white","scorpio","1997cc");
let vehicle4 = new vehicle("four wheeler", "maruti suzuki", "disel", "gray","swift","1198cc");
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);

console.log(``);
console.log(`---------------------college details---------------------`);
class college{
    constructor(collegeName,location,university,collegeId){
        this.collegeName = collegeName;
        this.location = location;
        this.university = university;
        this.collegeId = collegeId;

    }
    details(){
        console.log(this.collegeName,this.location,this.university,this.collegeId);
    }
}
let college1=new college("skn sinhgad college korti" ,"korti","solapur","0011");
let college2=new college("karmayogi engineering college shelve","shelve","solapur","0022");
let college3=new college("sveri college of engg","pandharpur","solapur","0033");
let college4=new college("New satara college of engg","korti","solapur","0044");
let college5=new college("Fabtech college of engg","sangola","solapur","0055");
// console.log(college1);
// console.log(college2);
// console.log(college3);
// console.log(college4);
// console.log(college5);
college1.details();
college2.details();
college3.details();
college4.details();
college5.details();

console.log(`---------------------transvers object with one argument---------------------`);
function traverseObject(college1) {
    for (const key in college1) {
        if (Object.hasOwnProperty.call(college1, key)) {
            const element = college1[key];
            console.log(key,element);
        }
    }
}
traverseObject(college1);
console.log(``);
function traverseObject(college2) {
    for (const key in college2) {
        if (Object.hasOwnProperty.call(college2, key)) {
            const element = college2[key];
            console.log(key,element);
        }
    }
}
traverseObject(college2);
console.log(``);
function traverseObject(college3) {
    for (const key in college3) {
        if (Object.hasOwnProperty.call(college3, key)) {
            const element = college3[key];
            console.log(key,element);
        }
    }
}
traverseObject(college3);
console.log(``);
function traverseObject(college4) {
    for (const key in college4) {
        if (Object.hasOwnProperty.call(college4, key)) {
            const element = college4[key];
            console.log(key,element);
        }
    }
}
traverseObject(college4);
console.log(``);
function traverseObject(college5) {
    for (const key in college5) {
        if (Object.hasOwnProperty.call(college5, key)) {
            const element = college5[key];
            console.log(key,element);
        }
    }
}
traverseObject(college5);
console.log(``);

