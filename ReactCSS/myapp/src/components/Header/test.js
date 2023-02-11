let users = [
    {id: 1, name: 'Alex', age: 40, isJob: true},
    {id: 2, name: 'Steven', age: 35, isJob: false},
    {id: 3, name: 'Neena', age: 20, isJob: false},
    {id: 4, name: 'John', age: 30, isJob: true},
]

// Задача: для каждого элемента сформировать новое сво-во salary с значением квадрата возраста 


// for (let i in users){
//     users[i].salary = users[i].age ** 2
// }

// console.log(users)

users = users.map(elem => ({...elem, salary: elem.age ** 2, test: false}))
console.log(users)