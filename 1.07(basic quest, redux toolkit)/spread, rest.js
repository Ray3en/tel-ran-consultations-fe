// let names = ['Steven', 'Alex','Neena', 'John']


// Деструктуризация
// let [a,b,c,d] = names

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// ----------------------------------
// Деструктуризация объекта
// let obj = {
//     age: 20,
//     salary: 1000,
//     name: {
//         name: 'Alex'
//     }
// }

// let {salary, age, name} = obj

// console.log(age)
// console.log(name)
// console.log(salary)


// ---------------------------------
// Распаковка массива (Spread оператор)
// let a = [1,2,3,4,5,6]

// console.log(...a)
// console.log(a[0], a[1], a[2], a[3], a[4], a[5])

// console.log(a)

// let b = [...a]

//  ...a = 1,2,3,4,5,6


// -----------------------------------
// Rest оператор 
// Оператор, позволяющий осуещсвтить сборку массива
// На примере деструктуризации

// let names = ['Steven', 'Alex','Neena', 'John']

// let [a, ...b] = names

// console.log(a)
// console.log(b)


// ---------------------
// Spread оператор
// Главная задача - распокавать массив

// Задача: 
// Напишите функцию, которая в качестве аргумента будет получать любое количество чисел
// Функция должна каждый аргумент возвести в квадрат и вывести в консоль

// Пример
// ------
// numbers(1,2,3,4)

// 1
// 4
// 9
// 16

// -----
// numbers(5,10)

// 25
// 100


// Плохой вариант
// function numbers(a,b,c,d){
//     console.log(a ** 2)
//     console.log(b ** 2)
//     console.log(c ** 2)
//     console.log(d ** 2)
// }

// numbers(1,2,4,5,6)

// --------------------
// Решение: 
// function numbers(...args){
//     for (let elem of args){
//         console.log( elem ** 2)
//     }
// }

// numbers(1,2,3,4,5,6,7,8,9,10)

// Аналог метода щcnsole.log()
// function log(...args){
//     console.log(...args)

// }

// log({name: '23'},2,3)

// --------------------
// Задача 
// Напишите функцию sum, которая будет суммировать все параметры, которые в нее будут попадать, и выводить сумму в косноль

// sum(1,2,3)
// 6

// sum(5,5,5,5,5)
// 25

// Решение 1
// function sum(...a){
//     let sum = 0;
//     for(let i = 0; i < a.length; i++){
//         sum = sum + a[i];
//     }
//     console.log(sum);
// }

// Решение 2
// function sum(...a){
//     let sum = a.reduce((sum, elem) => sum + elem);
//     console.log(sum);
// }

// sum(1,2,3,4,5)

