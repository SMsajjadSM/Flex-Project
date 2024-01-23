const toggle = document.querySelector('alwatr-icon')
const ulElem = document.querySelector('.ullist')
let tog = true
toggle.addEventListener('click', () => {
    if (tog) {
        toggle.name = 'close'
        tog = false
        ulElem.style.left = '-2rem'
    } else {
        toggle.name = 'menu'
        tog = true
        ulElem.style.left = '-18rem'
    }
})

