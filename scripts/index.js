import { handleAnimation } from "./animation.js";

const menubtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".nav");
let sectionsList = Array.from(document.querySelectorAll(".collaboration"));

menubtn.addEventListener("click", function () {
   if(navbar.style.visibility.length === 0){
        navbar.style.visibility = 'visible'
   } else {
    navbar.style.visibility = "";
  }
});


window.addEventListener('load', () => {
    handleAnimation(sectionsList)
})

window.addEventListener('scroll', function() {
    handleAnimation(sectionsList)
})
