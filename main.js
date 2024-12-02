const navToggle = document.getElementById('nav-open');
const navMenu = document.getElementById('nav-menu');
const overLay = document.getElementById('over-lay');
const navClose = document.getElementById('nav-close');
const topScoll = document.getElementById('top-scroll'); 
 
if (navToggle) {
    navToggle.addEventListener("click", () => { 
        navMenu.classList.add('show-menu');
        overLay.classList.add('active')
    })
}
if (navClose) {
    navClose.addEventListener("click", () => { 
        navMenu.classList.remove('show-menu');
        overLay.classList.remove('active')
    })
}

if (overLay) {
    overLay.addEventListener("click", () => { 
        navMenu.classList.remove('show-menu');
        overLay.classList.remove('active')
    })
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    topScoll.classList.add("show-top");
  } else {
    topScoll.classList.remove("show-top");
  }
});

const navLinks = document.querySelectorAll('.nav__link');
const linksAction = () =>{
    navMenu.classList.remove('show-menu');
    overLay.classList.remove('active')
}
navLinks.forEach(link => link.addEventListener("click", linksAction));


const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
   
                       
}
window.addEventListener('scroll', blurHeader)


const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Remove data-active from the current active slide
        activeSlide.removeAttribute("data-active");

        // Set data-active on the new slide
        slides.children[newIndex].setAttribute("data-active", true);
    });
});


function autoNextSlide() {
  const nextButton = document.querySelector("[data-carousel-button='next']");
  nextButton.click(); // Simulate a click on the next button
}

setInterval(autoNextSlide, 2000);


// navigation active link
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".nav__link");

    // Add click event listeners to each navbar link
    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Remove active class from all navbar links
            navbarLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Add active class to the clicked link
            link.classList.add("active");
        });
    });

});
