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

const isElementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

window.addEventListener('scroll', function() {
    sectionsList.forEach(element => {
        if(isElementInView(element)){
            setTimeout(()=> {
                element.style.visibility = 'visible'
            },500)
        }else {
            element.style.visibility = 'hidden'
        }
    });
})
