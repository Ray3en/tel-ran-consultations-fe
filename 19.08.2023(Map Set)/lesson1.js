// Set и Map


// -----------------------------------
// let names = new Set()

// Особенность Set-объекта - запись уникальных значений
// Добавление нового элемента в Set-объект
// names.add('Alex')
// names.add('Wilyam')
// names.add('Steven')
// names.add('Steven')

// Удаление элемента из объекта 
// names.delete('Alex')

// Поиск элемента has(), возвращает булевый тип
// console.log(names.has('Steven1')) true
// console.log(names.has('Steven2')) false

// Очистка от всех значение
// names.clear()

// Размер объекта
// names.size

// console.log(names.size)
// console.log(new Array(...names)[2])

// let array = [1,1,2,2,3,3,4,5,6,7,8,9,9,6,5,4,3]
// let array_to_set = new Set(array)
// let set_to_array = new Array(...array_to_set)

// console.log(array_to_set);
// console.log(set_to_array);

// --------------------------
// Map - тип объектов, почти ни чем не отличимые от обычных объект, кроме ключа
// Объект позволяет использовать ключи любого типа

// let users = new Map()

// Добавление нового элемента set(key, value)
// users.set('name', 'Alex')
// users.set(1, 'Steven')
// users.set(true, 'Wilyam')

// Получение значение get(key)
// console.log(users.get(true));

// Проверка на существование элемента has(key)
// console.log(users.has(true));

// Очитсить объект
// users.clear()

// console.log(users);

// -----------------------------------
// let user = {name: 'Alex'}

// let userInfo = new Map()
// userInfo.set(user, 1000)
// console.log(userInfo);

// console.log(userInfo.get(user));