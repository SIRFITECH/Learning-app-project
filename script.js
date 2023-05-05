const toogleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('container')[0]

toogleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
} )