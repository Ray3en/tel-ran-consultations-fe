// Functions

// Function declaration 

// function handler(a){
//     if (a !== undefined){
//         console.log(a)
//     } else {
//         console.log('НЕТ АРГУМЕНТА')
//     }
// }

// handler()
// handler(10)
// handler(false)

// ------
// Определение дефолтного значения, отличимого от UNDEFINED, для аргумента функция

// function handler(a = 'НЕТ АРГУМЕНТА', b = 30){
//     console.log(a, b)
// }

// handler()
// handler(10)
// handler(false)
// handler(10, 50)

// ---------
// Ключевое return
// return позволяет получить результат работы функции за ее пределами (в глобальную область видимости)

// function handler(){
//     let a = 123
//     return a
// }

// let result = handler()

// переменная result будет хранить значение переменной а в функции handler()

// --------------------
// Задача. 
// Задан массив array и переменная a
// let a = 8
// let array = [1,2,3,4,5,6,7,8]

// 1)
// Напишите функция checkValue(a,array), которая будет проверять, существует ли элемент а в массиве array
// Если это так, функция должна вернуть true, в противном случае - false

// Решение 1
// function checkValue(a,array){
//     for(let i = 0; i < array.length; i++){
//         if (a === array[i]){
//             return true
//         }
//     }
// }

// Решение 2
// function checkValue(a,array){
//     return array.includes(a)
// }

// console.log(checkValue(a,array))

// Задача 2
// Напишите условный оператор, который будет выводить в косноль ответ
// Если элемент в массиве существует, необходимо вывести сообщение "Элемент существует", в противном случае "Такого элемента нет"
// Примечание: в качестве решения необходимо использовать функцию checkValue(), и нельзя ее менять


// function checkValue(a,array){
//     return array.includes(a)
// }

// let a = 8
// let array = [1,2,3,4,5,6,7,8]


// if (checkValue(a,array)){
//    console.log('Элемент существует') 
// } else {
//    console.log('Такого элемента нет') 
// }


// --------------------------------------------
// Function expression

// Анонимная функция
// let double = function(num){
//     return num ** 2
// }

// Cтрелочаня функция
let double = (num) => num ** 2

console.log(double(5))