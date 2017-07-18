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

var nav = {
    {
        href: "img/otter1.jpg",
        image-title: "Stayin' Alive",
        color-type: "classic",
        thumb-title: "Barry",
    }
    {
        href: "img/otter2.jpg",
        image-title: "How Deep Is Your Love",
        color-type: "coral",
        thumb-title: "Robbin"
    }
    {
        href: "img/otter3.jpg",
        image-title: "You Should Be Dancing",
        color-type: "green",
        thumb-title: "Maurice"
    }
    {
        href: "img/otter4.jpg",
        image-title: "Night Fever",
        color-type: "seagreen",
        thumb-title: "Lesley"
    }
    {
        href: "img/otter5.jpg",
        image-title: "To Love Somebody",
        color-type: "grey",
        thumb-title: "Barbara"
    }
}
