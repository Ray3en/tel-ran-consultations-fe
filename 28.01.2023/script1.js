// Rest и spread оператор

// Rest     - это оператор, который дробит каждый элемент массива на отдельные аргмуенты 
// Spread   - это оператор, который коллекционирует аргументы в массив

// let array = ["Один","Два","Три","Четыре"]

// -----
// console.log(...array)
// console.log("Один","Два","Три","Четыре")

// Один Два Три Четыре
// Один Два Три Четыре

// ------
// Практический пример
// let users = [
//     [1, 'Alex'],
//     [2, 'Dima'],
//     [3, 'Neena'],
//     [4, 'Steven'],
// ]

// console.log(...users)
// console.log(users[0], users[1], users[2], users[3])

// [ 1, 'Alex' ] [ 2, 'Dima' ] [ 3, 'Neena' ] [ 4, 'Steven' ]
// [ 1, 'Alex' ] [ 2, 'Dima' ] [ 3, 'Neena' ] [ 4, 'Steven' ]

// ---------------
// let numbers = [10,30,50,30,15,14,27]

// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))



// --------------------

// function handle(...array){
//     console.log(...array)
// }

// handle(1,23,4,5,6,7)


// ----------------------
// Напишите функцию getSqrt(), которая может принимать любое количество аргументов. 
// Функция после вызова должна будет вывести в консоль первое попавшее число, корень которого
// вычисляется без остатка. Если элемент не найдется - функция должна вывести в консоль "none"


// Math.sqrt(num) % 1 == 0

// getSqrt(1,2,3,4,5,6,7,8)
// 4

// getSqrt(1,2,3)
// 'none'

// function getSqrt(...array){
//     for (let elem of array){
//         if (Math.sqrt(elem) % 1 == 0){
//             console.log(elem)
//             return
//         }
//     }
//     console.log('none')
// }

// function getSqrt(...array){
//     console.log(array.find(elem => Math.sqrt(elem) % 1 == 0) || 'none')
// }

// getSqrt(2,3,4)

// --------------------------
// Не глубокое копирование
// -------
// let array = [1,2,3]
// let array_copy = [...array]

// array.pop()

// console.log(array, array_copy)
// ------
// let array = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Steven'},
//     {id: 3, name: 'Neena'},
// ]

// let array_copy = [...array]

// array[0].name = 'Tigran'

// console.log(array)
// console.log(array_copy)


// -----------------------
// Глубокое копирование

// JSON.stringify() - проеобразовать объект в JSON
// JSON.parse()     - преоьразовать JSON в объект

// let array = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Steven'},
//     {id: 3, name: 'Neena'},
// ]

// let array_copy = JSON.parse(JSON.stringify(array))

// array[0].name = 'Tigran'

// console.log(array)
// console.log(array_copy)

// ---------------------
// alert()
// prompt()
// confirm()


let obj = {
    name: 'Tigran'
}

console.log(obj.name.repeat(2) + ' HELLO!')