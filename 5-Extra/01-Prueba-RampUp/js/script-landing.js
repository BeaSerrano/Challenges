const menuBurger = document.getElementById('menu-burger')
const menu = document.getElementById('menu')
const menuClose = document.getElementById('close')

menuBurger.addEventListener('click', () => {
    menu.classList.add('visible')
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('visible')
})