window.onload = function() {
    document.querySelector(".onLoadContainer").style.opacity = "0"
    setTimeout (() => {
        document.querySelector(".onLoadContainer-onLoad > img").style.animation = "unset"
    }, 500)
}

var nav = document.querySelector(".nav")
var burger = document.querySelector(".burger")

burger.onclick = function() {
    nav.classList.toggle('activeNav')
}