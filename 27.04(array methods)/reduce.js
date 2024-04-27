let array = [10,20,30,40]


// Решение 1
// let accum = 0
// for (let elem of array){
//     accum = accum + elem
// }

// console.log(accum);
// 1) sum = 0 + 10     = 10
// 2) sum = 10 + 20    = 30
// 3) sum = 30 + 30    = 60
// 4) sum = 60 + 40    = 100


// Решение 2

let sum = array.reduce((acum, elem) => acum + elem, 0)
console.log(sum);