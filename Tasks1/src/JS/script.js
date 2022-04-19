const ham = document.querySelector(".hamburger"); 
const navbar= document.querySelector(".header__list");
const navicon= document.querySelector(".header__icons"); 
ham.addEventListener('click',()=>{
    ham.classList.toggle("change")
    navbar.classList.toggle("nav-change")
    navicon.classList.toggle("nav-change")
})