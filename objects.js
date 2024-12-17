let myObj = {
    firstname : "Abhishek",
    lastname :"G",
    address : "somewhere in india",
    country : "india",
    pincode : 343453,
    phNumber : 442344244,
    isLoggedIn: true,
    greet: ()=>{
        console.log(`${this.firstname} Hello User!`)
    }
}
Object.freeze(myObj)

delete myObj.firstname;
let anotherObj = {
    "firstname" : "ironMAn",
    "lastname":"roberDowney jr",
    "phnumber" : 4424424552,
}

console.log(myObj["firstname"])

let myName = "abhishek"

console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// copying objects in javascript 

const obj1 = {first:"abhi",second:"shek"}
const obj2 = {third:"G",fourth:"Developer"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)

// object destructuring 

const course = {
    nameOfCourse : "Javascript",
    teacher : "harry",
    price : 4444
}

const {teacher:newName} = course;

console.log(newName)
console.log(course.hasOwnProperty('nameOfCourse'))