// fetch('https://jsonplacehol.typicode.com/afdgrg')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(err => {
//         console.log(err)
//       })


let dateNow = new Date()
let endDateSale = new Date('2023-09-16 17:50:00')

let day = 1000 * 60 * 60 * 24
let hour = 1000 * 60 * 60
let minute = 1000 * 60
let second = 1000

let countDays = (endDateSale.getTime() - dateNow.getTime()) / day
let countHours = ((endDateSale.getTime() - dateNow.getTime()) % day) / hour
let countMinutes = (((endDateSale.getTime() - dateNow.getTime()) % day) % hour) / minute
let countSeconds = ((((endDateSale.getTime() - dateNow.getTime()) % day) % hour) % minute) / second

// console.log(Math.floor(countDays));
// console.log(Math.floor(countHours));
// console.log(Math.floor(countMinutes));
// console.log(Math.floor(countSeconds));

console.log(`Дней до конца акции: ${Math.floor(countDays)}, времени: ${Math.floor(countHours)}:${Math.floor(countMinutes)}:${Math.floor(countSeconds)}`)

// console.log(dateNow.getDate())
// console.log(dateNow.getHours())
// console.log(dateNow.getMinutes())
// console.log(dateNow.getSeconds())
















