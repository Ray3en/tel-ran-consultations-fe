let obj = {
    name: 'Alex',
    age: 25
}

// console.log(Object.values(obj))      [ 'Alex', 25 ]
// console.log(Object.keys(obj))        [ 'name', 'age' ]
// console.log(Object.entries(obj))     [ [ 'name', 'Alex' ], [ 'age', 25 ] ]


let car = {
    model: 'Tesla',
    color: 'red'
}

// console.log(Object.assign(obj, car));    { name: 'Alex', age: 25, model: 'Tesla', color: 'red' }


// --------------------------------
// Шамблонизация

class User{
    constructor(name, age){
        this.age = age
        this.name = name
    }
    sayHi(){
        console.log(`Hello, ${this.name}!!`)
    }
}

let user1 = new User('Alex', 40)
let user2 = new User('Steven', 40)
let user3 = new User('John', 40)

user1.sayHi()
user2.sayHi()
user3.sayHi()