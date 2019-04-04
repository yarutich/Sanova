var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    var navMObileLine = document.querySelector(".nav-mobile-line");
    navMObileLine.style.backgroundColor = 'red';
});


var hamburgerBox = document.querySelector(".hamburger-box");

hamburgerBox.onclick = function myFunction() {
    var navMobile = document.getElementById("navMobile");
    if (navMobile.style.display === "block") {
        navMobile.style.display = "none";
    } else {
        navMobile.style.display = "block";
    }
}