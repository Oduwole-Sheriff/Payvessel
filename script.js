const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerLinks = document.querySelector('.hamburger-links')

hamburger.addEventListener('click', (ham) =>{
    hamburger.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
    hamburgerLinks.classList.toggle('active')
})

// Auto Text

const textEl = document.getElementById('text')
const text = 'We are...'
let idx = 1
let speed = 400 / 1

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0, idx)

    idx++

    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}