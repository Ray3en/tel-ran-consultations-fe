const div_root = document.querySelector('#root')
const div_resize = document.querySelector('.resize')

for (let i = 0; i < 150; i++){
    const cells = document.createElement('div')
    cells.className = 'cells'
    cells.innerText = i + 1
    div_root.append(cells)
}

let isResize = false

div_resize.addEventListener('mousedown', () => {
    isResize = true
})

div_root.addEventListener('mouseup', () => {
    isResize = false
})

document.addEventListener('mousemove', (e) => {
    if(isResize){
        let root_rect = div_root.getBoundingClientRect()
        let newX = e.clientX
        console.log(newX - root_rect.x)
        if ((newX - root_rect.x) % 50 === 0){
            div_root.style.width = `${newX - root_rect.x}px`
        }
    }
})


// function resize(){
//     if (isResize){

//     }
// }