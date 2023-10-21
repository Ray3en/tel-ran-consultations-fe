// деструктуризация

// let [...] = [...]
// let {...} = {...}

// -----------------------
// let array = [1,2,3,4,5,6]

// let [a,b, ...c ] = array

// console.log(a)
// console.log(b)
// console.log(c)


// ---------------------
let obj = {
    name: 'Alex',
    age: 30,
    salary: 1000
}


let {age, ...b} = obj

console.log(age)
console.log(b)