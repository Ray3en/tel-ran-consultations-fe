// ---------------------
// Function (DRY)

// function sayHi(){
//     let a = 10 * 100
//     return a
// }

// let result = 1000

// console.log(result)


// -----------------------
// Рекурсия в функциях 

// Расчет факториала 

// 5! => 1 * 2 * 3 * 4 * 5 = 120

// Решение с циклом

// function factorial(n){
//     let accum = 1
//     for(let i = 1; i <= n; i++){
//         accum = accum * i
//     }
//     return accum
// }

// let result = factorial(10)

// console.log(result);

// --------------------------------
// Решение с рекурсией

// function factorial(n){
//     if (n === 1) return 1
//     return n * factorial(n-1)
// }

// let result = factorial(5)
// console.log(result);


// ---------------------------
// Бесконечный вызов prompt, используя рекурсию 

// function handler() {
//     a = prompt('Введите 123')
//     if (a === '123') {
//         return 
//     }
//     handler()
// }


// -----------------------
// Напишите функцию sum(n), которая считает сумму диапазона чисел от 1 до n (включительно)
// В решении необходимо использовать рекурсию


function sum(n){
    if (n === 1) return 1
    return n + sum(n-1)
}


let result = sum(30)

console.log(result)
