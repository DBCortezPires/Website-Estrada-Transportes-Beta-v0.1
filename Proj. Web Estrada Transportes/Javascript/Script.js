
// Header Mobile
document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", function(){
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function(){

toggle.classList.remove("active");
nav.classList.remove("active");
overlay.classList.remove("active");

});


});

// Header com scroll
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
function revealElements(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element)=>{

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Sucesso ao enviar formulario de contato

const form = document.querySelector(".form-contato");
const sucesso = document.getElementById("form-sucesso");

form.addEventListener("submit", function(e){

e.preventDefault();

sucesso.style.display = "block";

form.reset();

});