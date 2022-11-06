var lastScrollTop = 0;

// var menu = document.querySelector('nav ul');
// var menuBar = document.querySelector('nav .menu-icon');
// var iconMenu = document.querySelector('nav .menu-icon img');

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

// menuBar.addEventListener('click', function() {
//     if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
//         iconMenu.setAttribute("src", 'imagens/close.png');
//     } else {
//         iconMenu.setAttribute("src", 'imagens/menu.png');
//     }
//     menu.classList.toggle('active');
// })
