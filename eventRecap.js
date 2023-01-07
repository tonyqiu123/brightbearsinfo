var photos = document.querySelectorAll(".eventRecap-bottom-right-imgContainer-img > img");
var navigation_left = document.querySelectorAll(".eventRecap-bottom-right-imgContainer > img")[0];
var navigation_right = document.querySelectorAll(".eventRecap-bottom-right-imgContainer > img")[1];
var dots = document.querySelectorAll(".eventRecap-bottom-right-dots > img");
var count = 0

navigation_left.onclick = function() {
    photos[count].style.opacity = "0"
    dots[count].style.opacity = ".25"
    count--
    if (count < 0)
        count = photos.length - 1
    photos[count].style.opacity = "1"
    dots[count].style.opacity = "1"
}

navigation_right.onclick = function() {
    photos[count].style.opacity = "0"
    dots[count].style.opacity = ".25"
    count++
    if (count > photos.length - 1)
        count = 0
    photos[count].style.opacity = "1"
    dots[count].style.opacity = "1"
}

