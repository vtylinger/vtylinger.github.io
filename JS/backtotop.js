mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
    mybutton.style.opacity = "100%"
  } else {
    mybutton.style.display = "none";
    mybutton.style.opacity = "0%"
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

// Zdroj/Source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp