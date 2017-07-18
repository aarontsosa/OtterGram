var nav = document.querySelectorAll('[data-image-role="trigger"]')
var targetImg = document.querySelector('[data-image-role="target"]')
var targetTitle = document.querySelector('[data-image-role="title"]')
var targetColor = document.querySelector('[data-color="target"]')
var targetName = document.querySelector('[data-thumb-title-role="target"]')

nav.forEach((nav) => {
    nav.addEventListener('click', (event) => {
        event.preventDefault();
        targetImg.setAttribute('src', nav.getAttribute('href'))
        targetTitle.textContent = nav.getAttribute('data-image-title')
        targetColor.setAttribute('class', nav.getAttribute('data-color-type'))
        targetName.textContent = nav.getAttribute('data-thumb-title')
    })   
})



window.onload = function randomImage() {
    x = Math.floor(Math.random() * 4)
    targetImg.setAttribute('src', nav[x].getAttribute('href'))
    targetTitle.textContent = nav[x].getAttribute('data-image-title')
    targetColor.setAttribute('class', nav[x].getAttribute('data-color-type'))
    targetName.textContent = nav[x].getAttribute('data-thumb-title')
}

var nev = [
    {
        href: "img/otter1.jpg",
        imageTitle: "Stayin' Alive",
        colorType: "classic",
        thumbTitle: "Barry",
    },
    {
        href: "img/otter2.jpg",
        imageTitle: "How Deep Is Your Love",
        colorType: "coral",
        thumbTitle: "Robbin"
    },
    {
        href: "img/otter3.jpg",
        imageTitle: "You Should Be Dancing",
        colorType: "green",
        thumbTitle: "Maurice"
    },
    {
        href: "img/otter4.jpg",
        imageTitle: "Night Fever",
        colorType: "seagreen",
        thumbTitle: "Lesley"
    },
    {
        href: "img/otter5.jpg",
        imageTitle: "To Love Somebody",
        colorType: "grey",
        thumbTitle: "Barbara"
    }
]

var links = document.getElementsByTagName('a')
function loadHref(){
    var i = 0
    return nev.forEach((x) =>{
        links[i].setAttribute('href', x.href)
        i += 1
    })
}
function randomImage() {
    x = Math.floor(Math.random() * 4)
    targetImg.setAttribute('src', nav[x].getAttribute('href'))
    targetTitle.textContent = nav[x].getAttribute('data-image-title')
    targetColor.setAttribute('class', nav[x].getAttribute('data-color-type'))
    targetName.textContent = nav[x].getAttribute('data-thumb-title')
}

window.onload = loadHref()
randomImage();

