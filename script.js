const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<img class='toggle__img fas fa-bars' src='/Assets/menu.png' alt=''>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<img class='toggle__img fas fa-times' src='/Assets/menu.png' alt=''>";
  }
}


/* Event Listeners */
toggle.addEventListener("click", toggleMenu);




/* Scroll Button*/


const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  })
})

window.onscroll = () => {
add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
if (window.scrollY < 300) {
  btn_scrolltop.classList.remove("btn-scrolltop-on")
} else {
  btn_scrolltop.classList.add("btn-scrolltop-on")
}
}


/* Display service information */

const service1 = document.getElementById("service1");
const service2 = document.getElementById("service2");
const service3 = document.getElementById("service3");

const serviceText1 = document.getElementById("service__text-1");
const serviceText2 = document.getElementById("service__text-2");
const serviceText3 = document.getElementById("service__text-3");



service1.addEventListener("mouseover",(e)=>{
serviceText1.removeAttribute("hidden")
},true);   

service2.addEventListener("mouseover",(e)=>{
serviceText2.removeAttribute("hidden")
},true);   

service3.addEventListener("mouseover",(e)=>{
serviceText3.removeAttribute("hidden")
},true);   





