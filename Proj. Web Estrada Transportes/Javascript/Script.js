document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", function(){
  nav.classList.toggle("active");
});

});

window.addEventListener("scroll", function(){

const header = document.querySelector(".header");

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});

function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element) => {

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const visible = 100;

if(elementTop < windowHeight - visible){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);