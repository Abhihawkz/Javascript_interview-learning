const arr = [2,4,5,6,'abhi','shek','good',53,5,3]

const myObj = {
    firstName : "abhishek",
    lastName : "shek",
    course : "100xDevs"
}

// for (const value of arr) {
//     console.log(value)
// }

// for (const key of myObj) {
//     console.log(key)
// } ---------------------------------- for of loop is not iteratable on objects........


// for (const key in myObj) {
//     console.log(key)
// } -------------------------------- returns only the keys of objects


// for (const key in myObj) {
//     console.log(myObj[key])
// }

//ForEach loop 

const obj = [{languageName:"javascript",file:"js"},{languageName:"python",file:"py"},{languageName:"Go",file:".go"}]


// const newObj = obj.forEach((item,index,arr) => {
//     console.log(item)
//     console.log(index)
//     console.log(arr)
//     return item;
// })

// console.log(newObj)

const nums = [1,3,4,5,6,7,8,9,9,0,232,32,2342,42,4,52,2525,52,525224,0]

const newNums = nums.filter((val)=> {
    return    val>50}
)
console.log(newNums)

const newObj = [{num:10},{num:34},{num:4}]

const newObjs = newObj.filter((val)=> val.num > 5)
console.log(newObjs)

const increasedNumsValue = nums.map((val)=> val-100000)
console.log(increasedNumsValue)

const cart = [3,4,5]

const myTotal = cart.reduce((acc,currval) => acc+currval,8)
console.log(myTotal)