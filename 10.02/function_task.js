// Не работает функция, не могу понять, почему в консоли выводит пустой массив. 
/*Напишите функцию, которая принимает два числовых аргумента
и выводит в консоль все четные числа от большего к меньшему.*/

//from more to less even

function showFromMoreToLessEven (numb1, numb2) {
    if (numb1 > numb2) {
        for (let i = numb1; numb2 <= i; i--) {
            if (i % 2 === 0){
                arr.push(i)
            }
        }  
    } else {
        for (let i = numb2; numb1 <= i; i--) {
            if (i % 2 === 0){
                arr.push(i)
            }
        }
    }
    return arr
}
console.log(showFromMoreToLessEven (20, 30) ); 