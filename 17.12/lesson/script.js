// let obj = {
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
//     refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
// }


// localStorage.setItem('token', JSON.stringify(obj))

// let result =  JSON.parse(localStorage.getItem('token'))
// console.log(result.refresh)

// ---------------------------------------
// let todos = JSON.parse(localStorage.getItem('todos'))
// for (let elem of todos){
//     document.createElement('div')
// }

changeLocalStorage()

function deleteTodo(){
    // Удаление из разметки todo-элемента
    changeLocalStorage()
}


function addTodo(){
    // Создание элемента
    // Заполнение элемента
    // Вставка элемента в разметку
    changeLocalStorage()
}


function changeLocalStorage(){
    let array = [
        {id: 1, title: 'Задача 1', complited: true},
        {id: 2, title: 'Задача 2', complited: true},
        {id: 3, title: 'Задача 3', complited: true},
        {id: 1, title: 'Задача 4', complited: true},
    ]
    localStorage.setItem('todos', JSON.stringify(array))
}

