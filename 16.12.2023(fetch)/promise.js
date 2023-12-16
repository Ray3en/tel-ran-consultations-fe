// Написать функцию delay(callback, ms)


function delay(callback, ms){
    return new Promise(res => {
        setTimeout(() => {
            callback()
            res('string!')
        }, ms)

    })
}

delay(() => console.log(123), 500)      
    .then(a => console.log(a))
