const sum = (a,b) => {
    console.log(a+b)
}

sum(3,4);

(()=>{
    console.log("this is an immediately invoked function evolution")
})();

((fname)=>{
    console.log(`${fname} hello user`)
})("Abhishek");

let lastname = null;
let firstname = lastname; 
console.log(firstname)