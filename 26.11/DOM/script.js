// Взаимодействие с DOM элементами
// 1) Работа над существующеми элементами
// -- Определение элемента
// document.body.firstElementChild.firstElementChild.firstElementChild.innerText = '123'
// console.log(document.body.firstElementChild.firstElementChild.firstElementChild)

// console.log(document.body.previousElementSibling)

// firstElementChild           - первый ребенок
// lastElementChild            - последний ребенок
// previousElementSibling      - предыдущий братский узел
// NextElementSibling          - следующий братский узел
// parentNode                  - родительский тег

//  -- Определение элемента (метод)

// .div         (class = 'div')
// #div         (id = 'div')
// div          (<div></div>)
// div.element  (<div class = 'element'> </div>)

// Поиск тега с классов text2 и определение в выражение p
// let p = document.querySelector('.text2')

// p.innerText = 'Привет мой мир!'

// console.log(p)

// --------------------------------------
// 2) Работа по созданию новых элементов

// Правило, которое не запутает в рамках создание нового элемента
// 1) Создать элемент
// 2) Заполнить элемент
// 3) Вставить заполненный элемент в разметку

// 1) 
// Создание нового элемента
let btn = document.createElement('button')

// 2)
btn.id = 'btn_elem'
btn.innerText = 'Test'

// btn.setAttribute('tigran', 'new_btn')
// btn.removeAttribute('tigran')
// btn.removeAttribute('class')

// 3)
let p_1 = document.querySelector('.text1')

// after()     - добавить как следующий братский узел
// before()    - добавить как предыдущий братский узел
// append()    - добавить как последнего ребенка
// prepend()   - добавить как первого ребенка


p_1.after(btn)
// При указании нового метода мы переместим элемент, а не создадим новый
document.body.append(btn)


// --------------------------------------

// innerText       -  сво-во, которое позволяет заполнить внутри тега текст (не учитывает разметку)
// innerHTML       -  сво-во, которое позволяет заполнить внутри тега текст (учитывает разметку)

// let div = document.querySelector('#elem1')

// div.innerHTML = '<p> Первый див элемент!</p>'



//  -------------------------------
//  Создание картинки

let img = document.createElement('img')
img.src = 'https://learn.javascript.ru/article/modifying-document/before-prepend-append-after.svg'
document.body.append(img)


// -----------------------------------
// Создание 500 li элементов внутри ul

function handler(){
    let ul = document.createElement('ul')
    document.body.prepend(ul)
    // Пока i <= 500 с шагом i++ выполняй тело цикла (итерацию)
    for (let i = 1; i <= 500; i++){
        let li = document.createElement('li')
        li.innerText = `Элемент ${i}`
        ul.append(li)
}
}