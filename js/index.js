// NAV


const currentLocation = location.href;

const menuItem = document.querySelectorAll(".main-menu-category");

for (let i = 0; i < menuItem.length; i++) {

    if (menuItem[i].href === currentLocation) {

        menuItem[i].className += " active";

    }
}


// SLIDE


var slideIndex = 0;

showSlides();

//add the global timer variable
var slides, dots, timer;

function showSlides() {

    var i;

    slides = document.getElementsByClassName("mySlides");// All of the slides in the document

    dots = document.getElementsByClassName("dot");// All of the slide dots in the document

    for (i = 0; i < slides.length; i++) {// Hide each of the slides

        slides[i].style.display = "none";

    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    for (i = 0; i < dots.length; i++) {// Replace each of the dots with the class "active" with ""

        dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[slideIndex - 1].style.display = "block";// Set the current slide to display as a block element

    dots[slideIndex - 1].className += " active";// Set the current slide"s respective dot to the "active" class

    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

function currentSlide(index) {

    //clear/stop the timer
    clearTimeout(timer);

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[index - 1].style.display = "block";

    dots[index - 1].className += " active";
}


// ANIMATION TEXT


//use with this libary: <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>, added in file index.html

const app = document.getElementById("text-animate");

let typewriter = new Typewriter(app, {

    strings: ["I love coding", "I love laptop too", "so I spend a lot of time", "to learn programming. "],
    autoStart: true,
    loop: true,
    delay: 60,
    pauseFor: 1000,
});


// MEDIA QUERY - NAVBAR


//use with this libary:, set in head tag: <script src="https://code.jquery.com/jquery-3.6.0.js"
// integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"><script>

$(document).ready(function () {//when website has finished loading then execute function

    $("#nav-toggle").click(function () {//when click to toggle button then execute function

        $(this).toggleClass("fa-times");

        $(".nav").toggleClass("active");

        document.querySelector(".nav").style.display = null;


    })
})

$("#search-icon").click(function () {

    $(this).toggleClass("fa-times");

    $("#search-form").toggleClass("active");

    document.getElementById("search-form").style.display = null;
});


// // RESIZE THE NAVBAR AND SCROLL TO TOP


// Get the scroll to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 80px and 20px from the top of the document, resize the navbar"s padding, the logo"s font size and show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        mybutton.style.display = "block";

        document.querySelector(".banner-image").style.height = "60px";

        const nodeList = document.querySelectorAll(".main-menu-category");

        for (let i = 0; i < nodeList.length; i++) {

            nodeList[i].style.margin = "20px 15px";

        }

        document.getElementById("search-icon").style.margin = "22px 0";

        document.querySelector(".nav").style.top = "61px";

        document.querySelector("#search-form").style.top = "61px";

        function myFunction(x) {

            if (x.matches) { // If media query matches

                const nodeList = document.querySelectorAll(".main-menu-category");
                for (let i = 0; i < nodeList.length; i++) {
                    nodeList[i].style.margin = "50px 15px";
                }
            }
        }

        var x = window.matchMedia("(max-width: 1024px)");

        myFunction(x); // Call listener function at run time

        x.addEventListener("change", myFunction);//Attach listener function on state changes

    } else {

        mybutton.style.display = "none";

        document.querySelector(".banner-image").style.height = "85px";

        const nodeList = document.querySelectorAll(".main-menu-category");

        for (let i = 0; i < nodeList.length; i++) {

            nodeList[i].style.margin = "30px 15px";

        }

        document.getElementById("search-icon").style.margin = "35px 0";

        document.querySelector(".nav").style.top = "85px"

        document.querySelector("#search-form").style.top = "85px";

        function myFunction(x) {

            if (x.matches) { // If media query matches
    
                const nodeList = document.querySelectorAll(".main-menu-category");
                for (let i = 0; i < nodeList.length; i++) {
                    nodeList[i].style.margin = "50px 15px";
                }
            }
        }
    
        var x = window.matchMedia("(max-width: 1024px)");
    
        myFunction(x); // Call listener function at run time
    
        x.addEventListener("change", myFunction);//Attach listener function on state changes

    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;


}


// HIDE SEARCH FORM WHEN CLICK ANOTHER ELEMENT


$("body").bind("click", function (event) {

    var search_form = document.getElementById("search-form");

    var search_icon = document.getElementById("search-icon");

    var nav = document.querySelector(".nav");

    var nav_toggle = document.getElementById("nav-toggle");


    if ($(event.target).closest("#search-icon").length == 0) {

        if (event.target != search_form && event.target.parentNode != search_form && event.target != search_icon && event.target != nav && event.target != nav_toggle) {

            search_form.style.display = "none";

            search_icon.classList.remove("fa-times");

            search_form.classList.remove("active");

            nav_toggle.classList.remove("fa-times");

            nav.classList.remove("active");

        }
    }
});






