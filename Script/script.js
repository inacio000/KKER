var lastScrollTop = 0;

navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    var scrollTop = Window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        navbar.style.top = "-100px"
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

// let navigation = document.querySelector('.navigation');
// document.querySelector('.toggle').onclick = function() {
//     this.classList.toggle('active');
//     navigation.classList.toggle('active');
// }