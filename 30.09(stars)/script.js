
let data = [
    {title: 'Велисипед', rating: 4.5},
    {title: 'Самокат', rating: 3.3},
    {title: 'Ролики', rating: 2},
    {title: 'Ракетки', rating: 5}
]

const div_root = document.querySelector('#root')


function render(array){
    for (let elem of array){
        const div_card = document.createElement('div')
        const h_title = document.createElement('h2')

        h_title.innerText = elem.title
        div_card.append(h_title, createStars(elem.rating))
        div_root.append(div_card)
    }
}

function createStars(num){
    const div_stars = document.createElement('div')
    for (let i = 1; i <= 5; i++){
        const span = document.createElement('span')
        if (Math.round(num) >= i){
            span.className = 'fa fa-star active'
        } else {
            span.className = 'fa fa-star'
        }
        div_stars.append(span)
    }
    return div_stars
}


render(data)


