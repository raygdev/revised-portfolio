const menubtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".nav");
let sectionsList = Array.from(document.querySelectorAll(".section"));

menubtn.addEventListener("click", function () {
  if (navbar.style.visibility === "hidden") {
    navbar.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
  }
});
