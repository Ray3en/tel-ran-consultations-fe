// Замыкание


// function url(arg){
//     let zone = arg
//     return function(domen){
//         console.log(`www.${domen}.${zone}`)
//     }
// }

// let zoneCom = url('com')

// zoneCom('google')
// zoneCom('mail')

// let zoneNet = url('net')

// zoneNet('example')
// zoneNet('amazon')

// zoneCom('test')


// ---------------------------------
// Напишите функцию, которая будет возводит число в степень
// В основном, будет возводиться некое число либо во вторую степень, либо в четвертую


// function pow(num1){
//     return function(num2){
//         console.log(num2 ** num1)
//     }
// }

// let double = pow(2)

// double(5)
// double(10)
// double(3)
// double(2)

// let quadro = pow(4)

// quadro(2)
// quadro(10)
// quadro(5)

// -------------------------
// function foo(){
//     let a = Math.round(Math.random() * 100)
//     return function(){
//         console.log(a)
//     }
// }

// let func = foo()

// func()   20
// func()   20
// func()   20
// func()   20






// https://blog.promopult.ru/sales/chto-takoe-xlebnye-kroshki-i-dlya-chego-oni-nuzhny.html