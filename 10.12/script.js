// Деструктуризация массива
// let array = [10,20]

// let [elem1,elem2] = array

// console.log(elem1)
// console.log(elem2)


// ----------------------
// Деструктуризация объекта
// let obj = {a: 10, b:20}

// let {a,b} = obj

// console.log(c)
// console.log(b)

// ----------------------------
// let object = {a: 10, b: 30}
// let array = [1,2,3]
// console.log(Array.isArray(object))

// let array1 = [1,2,3,4]
// let array2 = [5,6,7,8]

// console.log(array1.concat(array2))
// console.log([...array1, ...array2])

// ---------------------------
// let array1 = [1,2,3,4]

// let array2 = array1.map(elem => elem)
// let array2 = JSON.parse(JSON.stringify(array1))
// let array2 = array1.slice()
// let array2 = [...array1]

// array2.push(10)

// console.log( array1, array2)

// ---------------------------

// function handler(...a){
//     console.log(a)
// }

// handler(1,2,3,4,5)

// console.log(1,2)

// let array = [10,20,30,40,50,60,70]

// let [a,b,...elems] = array.reverse()

// console.log(a,b)
// console.log(elems)

// -----------------------

// Напишите функцию getSum(), которая может принять неограниченное количество аргументов 
// и возвращает сумму этих аргументов

// пример: 
// getSum(1,2,3,4,5)
// Результат:
// 15 

// function getSum(...numbers){
    // Решение с forEach
    // let sum = 0
    // numbers.forEach(elem => {sum += elem})
    // Решение с методом Reduce
//     console.log(numbers.reduce((sum, value) => sum + value))
// }

// getSum(1,2,3,4)













// Полезные статьи:
// https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Selectors