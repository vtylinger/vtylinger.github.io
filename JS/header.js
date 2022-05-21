var lastScrollTop = 8.9;
navbar = document.getElementById("header")
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-14.5vw";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop
})

// Zdroj/Source: https://www.youtube.com/watch?v=JEBgqbZWYIQ