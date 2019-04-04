var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
});


var hamburgerBox = document.querySelector(".hamburger-box");

hamburgerBox.onclick = function myFunction() {
    var navMobile = document.getElementById("navMobile");
    var navMObileLine = document.querySelector(".nav-mobile-line");
    
    if (navMobile.style.display === "block") {
        navMobile.style.display = "none";
        navMObileLine.style.backgroundColor = '#42A2D6';
    } else {
        navMObileLine.style.backgroundColor = '#fff';
        navMobile.style.display = "block";
    }
}