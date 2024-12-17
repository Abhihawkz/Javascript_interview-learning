const fname = "Abhishek";
// fname = "Gabhishek"

console.log(fname) // cannot change the values of a constant variable.

let firstName = "Abhishek" //string
let number = 2; // number or int variable 
let flotnumber = 3.2// can store float values
var ans = "the sum of 2 variables is" // var attaches itself to the global this object making it accessible from any scope and we can change its value from anywhere
function sum(){
    let a = 2;
    let b =3;
    console.log(ans)
    console.log(a+b)
}
sum()

console.log(lastname)

const isLoggedIn = true; // boolean value

if(isLoggedIn){
    console.log("the user is logged in")
}

var lastname = "G"

console.log(lastname) // var can be accessed before its declaration because it hoists itself to the main global.this object

let value = 2;

console.log(typeof value)


///////// TYPE CONVERSATION /////////

let isNum = "33"
let changingItToNum = Number(isNum);
console.log(typeof changingItToNum)