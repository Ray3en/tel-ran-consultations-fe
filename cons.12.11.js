// 'Привет мой дорогой друг'

// function maxWordLength(string){
//     let array = string.split(' ')
//     for (let i = 0; i < array.length; i++){
//         array[i] = array[i].length
//     }
//     console.log(Math.max(...array))
// }

// maxWordLength('Привет мой дорогой друг')


// ----------------------------------
// Задача 1. Вывести в консоли:
// а) все ноутбуки
// б) все ноутбуки, цена которых больше 40000
// в) Посчитать сумму цен всех ноутбуков. 

let laptops = [
    {
        mark : "Acer",
        price : 25000
    },
    {
        mark : "Apple",
        price : 37000
    },
    {
        mark : "Asus",
        price : 125500,
    },
    {
        mark : "HP",
        price : 42000
    },
    {
        mark : "Samsung",
        price : 52000
    }
]
//------
// 1 задание
// for (let i = 0; i < laptops.length; i++){
//     console.log(laptops[i].mark)
// }

//----------
// 2 задание 
// for (let i = 0; i < laptops.length; i++){
//     if (laptops[i].price > 40000){
//         console.log(laptops[i].mark)
//     }
// }

// Методы массива 
// let array = laptops.filter((value) => value.price > 40000)
// array.forEach(elem => console.log(elem.mark))

// for
// for (let elem of array){
//     console.log(elem.mark)
// }

//-------------
// 3 задание
// let sum = 0
// for (let i = 0; i < laptops.length; i++){
//     sum += laptops[i].price
//     console.log(sum)
// }

// let sum = laptops.reduce((sum,elem)=> sum + elem.price, 0)

// console.log(sum)




let sum = 0
for (let i = 0; i < laptops.length; i++){
    sum += laptops[i].price
    console.log(sum)
}
console.log(sum)