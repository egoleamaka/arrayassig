//declare an arr

let arr1 = []

//declare a variable with your fullname

let fullName = 'amaka egole'

//split your fullname
let arr2 = fullName.split('')

//remove the first and last character
arr2.shift()

//remove the last character
arr2.pop()

//remove the empty space
arr2.splice(arr2.indexOf(' '),1)

//remove the fifth character and add ur middle name
arr2.splice(arr2.indexOf(5),1,'glory')
console.log(arr2)
