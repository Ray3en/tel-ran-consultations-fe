// Рекурсивная функция

// 3!
// 1 * 2 * 3

// 4!
// 1 * 2 * 3 * 4


function factor(n){
    if (n === 0){
        return 1
    } else {
        return n * factor(n - 1)
    }
}

let result = factor(5)

console.log(result)