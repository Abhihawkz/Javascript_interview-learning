const myArr = [1,3,4,5,6,9]

console.log(myArr.length)
myArr.push(32)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(5)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))


const newArr = myArr.join()
console.log(newArr)

myArr.splice(0,3)
console.log(myArr)