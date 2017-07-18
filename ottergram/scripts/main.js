var nav = document.querySelectorAll('[data-image-role="trigger"]')
var list = document.getElementsByTagName('li')
var links = [document.createElement('a'),document.createElement('a'),document.createElement('a'),document.createElement('a'),document.createElement('a')]
var image = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')]
var span = [document.createElement('span'),document.createElement('span'),document.createElement('span'),document.createElement('span'),document.createElement('span')]
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


var nev = [
    {
        href: "img/otter1.jpg",
        imageRole: "trigger",
        imageTitle: "Stayin' Alive",
        imageURL: "img/otter1.jpg",
        colorType: "classic",
        thumbTitle: "Barry",

        imgClass: "thumbnail-image",
        imgSrc: "img/otter1.jpg",
        imgAlt: "Berry the Otter",

        spanClass: "thumbnail-title",
        spanText: "Barry"
    },
    {
        href: "img/otter2.jpg",
        imageRole: "trigger",
        imageTitle: "How Deep Is Your Love",
        imageURL: "img/otter2.jpg",
        colorType: "coral",
        thumbTitle: "Robbin",

        imgClass: "thumbnail-image",
        imgSrc: "img/otter2.jpg",
        imgAlt: "Robbin the Otter",

        spanClass: "thumbnail-title",
        spanText: "Robbin"
    },
    {
        href: "img/otter3.jpg",
        imageRole: "trigger",
        imageTitle: "You Should Be Dancing",
        imageURL: "img/otter3.jpg",
        colorType: "green",
        thumbTitle: "Maurice",

        imgClass: "thumbnail-image",
        imgSrc: "img/otter3.jpg",
        imgAlt: "Maurice the Otter",

        spanClass: "thumbnail-title",
        spanText: "Maurice"
    },
    {
        href: "img/otter4.jpg",
        imageRole: "trigger",
        imageTitle: "Night Fever",
        imageURL: "img/otter4.jpg",
        colorType: "seagreen",
        thumbTitle: "Lesley",

        imgClass: "thumbnail-image",
        imgSrc: "img/otter4.jpg",
        imgAlt: "Lesley the Otter",

        spanClass: "thumbnail-title",
        spanText: "Lesley"
    },
    {
        href: "img/otter5.jpg",
        imageRole: "trigger",
        imageTitle: "To Love Somebody",
        imageURL: "img/otter5.jpg",
        colorType: "grey",
        thumbTitle: "Barbara",

        imgClass: "thumbnail-image",
        imgSrc: "img/otter5.jpg",
        imgAlt: "Barbara the Otter",

        spanClass: "thumbnail-title",
        spanText: "Barbara"
    }
]

function toArray(nodeList){
    var arr = nodeList;
    if (nodeList.forEach === undefined) {
        arr = [].slice.call(nodeList)
    }
    return arr
}

function loadPics(){
    loadElements();
    loadLinkAtt();
    loadImageAtt();
    loadSpanAtt();
    appendHTML();
}


function loadElements(){
    var links = [document.createElement('a'),document.createElement('a'),document.createElement('a'),document.createElement('a'),document.createElement('a')]
    var image = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')]
    var span = [document.createElement('span'),document.createElement('span'),document.createElement('span'),document.createElement('span'),document.createElement('span')]
    return 
}

function loadLinkAtt(){
    var i = 0
    return nev.forEach((x) =>{
        links[i].setAttribute('href', x.href)
        links[i].setAttribute('data-image-role', x.imageRole)
        links[i].setAttribute('data-image-title', x.imageTitle)
        links[i].setAttribute('data-thumb-title', x.thumbTitle)
        links[i].setAttribute('data-image-url', x.imageURL)
        links[i].setAttribute('data-color-type', x.colorType)
        i += 1
    })
}

function loadImageAtt(){
    var i = 0
    return nev.forEach((x) =>{
        image[i].setAttribute('class', x.imgClass)
        image[i].setAttribute('src', x.imgSrc)
        image[i].setAttribute('alt', x.imgAlt)
        i += 1
    })
}

function loadSpanAtt(){
    var i = 0
    return nev.forEach((x) =>{
        span[i].setAttribute('class', x.spanClass)
        span[i].textContent = x.spanText
        i += 1
    })
}

function appendHTML(){
    list = toArray(list)
    var i = 0
    list.forEach((x)=>{
        x.appendChild(links[i])
        links[i].appendChild(image[i])
        links[i].appendChild(span[i])
        i+= 1
    })
}

function navigation(){
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
}

function randomImage() {
    x = Math.floor(Math.random() * 4)
    targetImg.setAttribute('src', nav[x].getAttribute('href'))
    targetTitle.textContent = nav[x].getAttribute('data-image-title')
    targetColor.setAttribute('class', nav[x].getAttribute('data-color-type'))
    targetName.textContent = nav[x].getAttribute('data-thumb-title')
}

window.onload = loadPics()
navigation();
