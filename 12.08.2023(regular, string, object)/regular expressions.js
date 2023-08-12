// https://www.freecodecamp.org/news/javascript-string-split-example-with-regex/
// https://regexr.com/3e48o

// -----------------------------
// Регулярные выражения

// \w - это любые буквы и цифры
// \d - только цифры
// \s - пробел
// \W - все что угодно, кроме букв и цифр
// \D - все что угодно кроме цифр
// ^ - поиск совпадения в начале строик
// $ - поиск совпадения в конце строик

// Квантификатор
// {n,m} - диапазон от n до m
// + 1 или много {1,}
// ? 0 или 1 {0,1}
// * 0 или много {0,}

// let string = 'Hello 4world'
// let regexp = /^\w+\s\w{6}$/
// let result = string.match(regexp)
// console.log(result);


// -------------------------------------
// Пример задачи

let data = [
    'specail answer 59999',
    'data 549 more then',
    '3567 great then less',
    'equal 1000'
]

let new_array = []

for (let elem of data){
    let number = elem.match(/\d+/)[0]
    new_array.push(+number)
}


console.log(new_array)