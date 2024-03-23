const div_rect = document.querySelector('.rect')
const div_resize = document.querySelector('.resize')

let isResize = false

div_resize.addEventListener('mousedown', ()=> {
    isResize = true
})

document.addEventListener('mouseup', ()=> {
    isResize = false
})

document.addEventListener('mousemove', (e) => {
    if (isResize){
        div_rect.style.width = `${e.clientX-10}px`
        div_rect.style.height = `${e.clientY-10}px`
    }
})