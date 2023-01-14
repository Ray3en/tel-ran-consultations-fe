// Мини введение в promise

// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let a = [1,2,3]
//         console.log('Test 1', a)
//         resolve(a)
//     }, 50)
// })

// promise.then((data) => {
//     data.push(4)
//     console.log('Test 2', data)
// })

// ---------------

// setTimeout(()=> {
//     console.log('Test 1')
// }, 2000)


// console.log('Test 2')


// -----------------------------------------
// Пример fetch запроса с применением DOM - методов

let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(res => res.json())
    .then(data => createUsers(data))


function createUsers(data){
    let root_div = document.querySelector('#root')
    for (let elem of data){
        let user_elem = document.createElement('p')
        user_elem.innerText = `${elem.name} ${elem.company.name}`

        root_div.append(user_elem)
    }
}