var first = document.getElementById("fstImg");
var second = document.getElementById("scndImg");
second.style.display='none'

window.addEventListener("scroll",function(e){
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.getElementById("navigation");
    if(scrolled > 0){
        nav.classList.remove("nav");
        nav.classList.add("nav-scrolled");
        first.style.display='none'
        second.style.display='block'
        // console.log("Mas de 0")
        // console.log(scrolled)
    }else{
        nav.classList.remove("nav-scrolled");
        nav.classList.add("nav");
        second.style.display='none'
        first.style.display='block'
        // console.log("Estoy en 0")
    }
})