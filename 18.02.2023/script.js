// let array = [10,20,30,40,50,60,70,80]

// // 30,40,50,60

// let [a,b, ...ostatok] = array.slice(2,6)

// console.log(a)
// console.log(b)

// console.log(ostatok)

// ----------------------

// let obj = {
//     name: 'Alex',
//     age: 29,
//     salary: 1500
// }

// let {name, salary, age} = obj

// console.log(name, salary, age)


// --------------
// fetch('https://jsonplaceholder.typicode.com/usersr')
//       .then(res => {
//             if (res.status == 200){
//                   console.log('Запрос прошел!')
//             } else if (res.status == 404){
//                   console.log('Не найдено')
//             }
//             return res.json()
//       })
//       .then(json => console.log(json))



// ------------
// let elem_btn = document.querySelector('.elem_btn')

// elem_btn.addEventListener('dblclick', () => console.log('dblclick!'))
// elem_btn.addEventListener('click', () => console.log('click!'))

// ----------------------

let div_elem = document.querySelector('.container')

let check = true

function handle(){
    if (check){
        div_elem.classList.add('active')
    } else {
        div_elem.classList.remove('active')
    }
    check = !check
}

div_elem.addEventListener('click', handle)






// https://reactrouter.com/en/main