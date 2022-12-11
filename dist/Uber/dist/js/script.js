const menu= document.querySelector('.menu')
const hamburger= document.querySelector('.hamburger')

hamburger.addEventListener('click' ,e=>{
    menu.classList.toggle('menu_active')
    hamburger.classList.toggle('hamburger_active')
})
