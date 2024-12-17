function myName(){
    let value = 'Abhishek'
    function myAnotherName(){
        value = "Hawkzy"; // variable shadowing....
         console.log(value)
    }
    myAnotherName();
    console.log(value)
}

myName()