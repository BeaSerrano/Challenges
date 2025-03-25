const menuBurger = document.getElementById('menu-burger')
const menu = document.getElementById('menu')
const menuCerrar = document.getElementById('cerrar')

menuBurger.addEventListener('click', () => {
    menu.classList.add('visible')
})

menuCerrar.addEventListener('click', () => {
    menu.classList.remove('visible')
})