var nav = document.querySelectorAll('[data-image-role="trigger"]')
var targetImg = document.querySelector('[data-image-role="target"]')
var targetTitle = document.querySelector('[data-image-role="title"]')
var targetColor = document.querySelector('[data-color="target"]')
var targetName = document.querySelector('[data-thumb-title-role="target"]')

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
    var list = nodeList;
    if (nodeList.forEach === undefined) {
        list = [].slice.call(nodeList)
    }
    return list
}

function createA(){
    return links = [document.createElement('a')]
}

function createImg(){
    return image = [document.createElement('img')]
}

function createSpan(){
    return span = [document.createElement('span')]
}

function howmany(type, num){
    for (i=1; i < num; i++){
        type.push(type[0])
    }
    return type
}


function loadLinkAtt(){
    links = howmany(createA(), 5)
    for(i=0; i < links.length; i++) {
        links[i].setAttribute('href', nev[i]['href'])
        links[i].setAttribute('data-image-role', nev[i]['imageRole'])
        links[i].setAttribute('data-image-title', nev[i]['imageTitle'])
        links[i].setAttribute('data-thumb-title', nev[i]['thumbTitle'])
        links[i].setAttribute('data-image-url', nev[i]['imageURL'])
        links[i].setAttribute('data-color-type', nev[i]['colorType'])
    }
    return links
}

function loadImageAtt(){
    image = howmany(createImg(), 5)
    for(i=0; i < image.legth; i++){
        image[i].setAttribute('class', nev[i]['imgClass'])
        image[i].setAttribute('src',   nev[i]['imgSrc'])
        image[i].setAttribute('alt', nev[i]['imgAlt'])
    }
    return image
}

function loadSpanAtt(){
    span = howmany(createSpan(), 5)
    for (i=0; i < span.length; i++){
        span[i].setAttribute('class', nev[i]['spanClass'])
        span[i].textContent = nev[i]['spanText']
    }
    return span
}

function listArr(){
    var list = document.getElementsByTagName('li')
    return list = toArray(list)
}

function appendHTML(){
    image = loadImageAtt();
    links = loadLinkAtt();
    span = loadSpanAtt();
    var list = listArr();
    var y = 0
    list.forEach((x)=>{
        x.appendChild(links[y])
        x.appendChild(image[y])
        x.appendChild(span[y])
        y += 1
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
        targetImg.classList.toggle('fade');
        targetTitle.classList.toggle('fade');
        targetColor.classList.toggle('fade');
        targetName.classList.toggle('fade');
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

window.onload = appendHTML();
navigation();
