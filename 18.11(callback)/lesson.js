// Колбек - это фнукция, которая использауется как аргумент внутри другой функции

// function handler(a, callback){
//     let b = callback(?)
//     console.log(a * b)
// }

// handler(2, () => 5)
// handler(2, () => 10)

// Array.prototype.filter2 = function(callback){
//     let newArray = []
//     for (let i = 0; i < this.length; i++){
//         if(callback(this[i], i, this)){
//             newArray.push(this[i])
//         }
//     }
//     return newArray
// }

function filter2(array, callback){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            newArray.push(array[i])
        }
    }
    return newArray
}

let array = [1,2,3,4,5,6,7,8,9,10]

let result = filter2(array, (elem) => elem % 2 === 0)

console.log(result)