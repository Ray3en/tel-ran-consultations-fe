// Метод fecth - инструмент, который позволяет отпралыть HTTP-запросы


// ---------------------
// GET ЗАПРОС
// let url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url)
//     .then(res => res,json())
//     .then(data => console.log(data))


// -----------------------
// POST ЗАПРОС
let obj = {
    name: 'Tigran'
}

let url = 'https://eooliv06vnulsm8.m.pipedream.net'

fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(obj)
}).then(res => res.json()).then(data => console.log(data))