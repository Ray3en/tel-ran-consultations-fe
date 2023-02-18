// Методы массивы

// let array = [3,4,5,6]

// let result = array.map(elem => elem ** 2)

// let result = array.filter(elem => elem % 2 == 0)
// let result = array.find(elem => elem % 2 == 0)  (если не найден - вернет undefined)
// let result = array.sort((crElem, nxElem) => nxElem - crElem)

// let result = array.some(elem => elem % 2 == 0)
// let result = array.every(elem => elem % 2 == 0)

// let result = array.findIndex(elem => elem == 7) (если не найден - вернет -1)

// let result = array.forEach(elem => console.log(elem == 5))

// let result = array.reduce((sum, elem) => sum + elem)

// let sum = 0
// for (let elem of array){
//     sum = sum + elem
// }
// console.log(sum)


// console.log(result)
// console.log(array)

// --------------------------------------

// let goods = [
//     {id: 1, title: 'Велосипед'},
//     {id: 2, title: 'Самокат'},
//     {id: 3, title: 'Ролики'},
//     {id: 4, title: 'Сноуборд'}
// ]

// let result = goods.filter(elem => elem.title.startsWith('С') && elem.id == 2)

// console.log(result)


// let elems = [
//     [1,2,3],
//     [4,5,6],
//     [9,5,6]
// ]


// ------------------------------

// let result = array.filter(elem => elem % 2 == 0)

// let array = [3,4,5,6]


// function filter2(array,callback){
//     let newArray = []
//     for (let elem of array){
//         if (callback(elem)){
//             newArray.push(elem)
//         }
//     }
//     return newArray
// }

// console.log(filter2(array, elem => elem % 2 == 0))
// console.log(array.filter(elem => elem % 2 == 0))

// -------------------------
// Задание: сформировать таким же образом функцию map2()

// let array = [3,4,5,6]

// function map2(array, callback){
//     let newArray = []
//     for (let elem of array){
//         newArray.push(callback(elem))
//     }
//     return newArray
// }

// console.log(map2(array, (elem) => elem ** 3))
// console.log(array.map(elem => elem ** 3))


