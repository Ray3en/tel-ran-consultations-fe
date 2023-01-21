

fetch("http://51.250.8.198:8000/api/posts")
  .then((resp) => resp.json())
  .then((data) => console.log(data))



// 1)
// Фетч 
// Промис => передает в resolve(ОТВЕТ)

// 2)
// .json()
// Промис => передает в resolve(ДАННЫЕ)

// ---------------------------------------
// POST - запрос (на следующей консультации проверим)

// post = {
//     titile: 'Консультация',
//     text: 'На консультации отвалился бэк',
//     topic: 1
// }

// fetch("http://51.250.8.198:8000/api/posts/", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(post)
// })








// https://react-hook-form.com/
// https://reactrouter.com/en/main
// https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_
// Redux расширение (в описании будет сказано что необходимо установить)
// https://eslint.org/