// https://habr.com/ru/articles/502302/
// https://habr.com/ru/companies/sberbank/articles/443316/

// expect() - это функция, который должен сордержать значение для теста
// toBe() - это функция, которая фактически сравнивает выражение с expect() с его аргументом. 
// Примечение toBe() позволяет сравнивать только примитивные значение
// toEqual() - это функция (аналог toBe), которая позволяет сравнить результат с объектом
// toContain() - функция, проверяющая значение внутри массива (или строке) (примитивы)
// toContainEqual() - функция, проверяющая значение внутри массива (объекты)
// toBeUndefined() - проверяет undefined
// toBeNull() - проверяет null
// toHaveLength(n) - проверяет длину указанного массива


// Test 1 (результат матичематичкого выражения)
test('2^2 == 4 ?', () => {
  expect(Math.pow(2,2)).toBe(4)
})

// Test 2 (равенство объектов)
test('Test 2', () => {
  expect({name: 'Alex'}).toEqual({name: 'Alex'})
  expect([1,2,3]).toEqual([1,2,3])
  // expect([1,2,3]).toBe([1,2,3]) ошибка
})

// Test 3 (вхождение значения в массиве (или в строке))
test('Test 3', () => {
  expect([1,2,3,4,5]).toContain(5)
  expect('raz dva tri').toContain('dva')
  expect([{name: 'Alex'}, {age: 35}]).toContainEqual({age: 35})
})

// Test 4 (null, undefined, length)
test('Test 4', () => {
  const array = [1,2,3,4,5]
  const nullValue = null
  const undefinedValue = undefined
  expect(nullValue).toBeNull()
  expect(undefinedValue).toBeUndefined()
  expect(array).toHaveLength(5)
})