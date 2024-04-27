// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++; 
//     };
//   }

//   let counter1 = makeCounter();
//   let counter2 = makeCounter();

//   console.log(counter1())
//   console.log(counter1())
//   console.log(counter1())

//   console.log(counter2())
//   console.log(counter2())
//   console.log(counter2())

// ----------------------------------------
// function createUrl(domenZone){
//     return function(domen){
//         return `https://${domen}.${domenZone}`
//     }
// }


// let domenCom = createUrl('com')

// console.log(domenCom('telran'))
// console.log(domenCom('google'))

// let domenOrg = createUrl('org')

// console.log(domenOrg('test'))
// console.log(domenOrg('some-site'))


// --------------------------

// function powValue(num, n){
//     return num ** n
// }

// console.log(powValue(3,2))
// console.log(powValue(4,2))
// console.log(powValue(2,2))

// console.log(powValue(4,3))
// console.log(powValue(5,3))
// console.log(powValue(6,3))


// function power(n){
//     return function(num){
//         return num ** n
//     }
// }

// let powDouble = power(2)

// console.log(powDouble(3))
// console.log(powDouble(4))
// console.log(powDouble(2))

// let powTripple = power(3)

// console.log(powTripple(4))
// console.log(powTripple(5))
// console.log(powTripple(6))


let sayHi = () => {
    console.log(this)
}

let user1 = {
    name: 'Alex',
    age: 30,
    sayHi: {
        sayHi: sayHi
    }
}

user1.sayHi.sayHi()
