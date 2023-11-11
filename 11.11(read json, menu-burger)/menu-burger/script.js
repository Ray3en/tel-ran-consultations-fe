let menu_burger = document.querySelector('.burger_menu')

let setBurger = false

menu_burger.onclick = () => {
    openBurgerMenu()
}

function openBurgerMenu(){
    if (!setBurger){
        menu_burger.classList.add('active')
    } else {
        menu_burger.classList.remove('active')
    }
    setBurger = !setBurger
    console.log(setBurger)
}

