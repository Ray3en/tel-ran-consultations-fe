
// function double(n, callback){
//     let res = callback(10)
//     return n + res
// }

// double(5, (a) => a + 5)

// double(20, (a) => a ** 2)
// double(20, (a) => a / 2)
// double(20, (a) => (a + 500) ** 2)



let array = [10,20,30,40]

// let new_array = []
// for (let elem of array){
//     if (elem > 20){
//         new_array.push(elem)
//     }
// }

// console.log(new_array)


function filter2(array, callback){
    let new_array = []
    for (let elem of array){
        if (callback(elem)){
            new_array.push(elem)
        }
    }
    return new_array
}

console.log(filter2(array, (elem) => elem > 10))
console.log(array.filter( (elem) => elem > 10));