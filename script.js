// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 


// Lavage Complet Mouse Listener
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");
var circle5 = document.getElementById("circle5");

var toTop1 = document.getElementById("to-top1");
var toTop2 = document.getElementById("to-top2");
var toTop3 = document.getElementById("to-top3");
var toTop4 = document.getElementById("to-top4");
var toTop5 = document.getElementById("to-top5");

var txtToDisplay;

var opacity = 0;

// CIRCLE 1
circle1.addEventListener(
  "mouseenter",
  (event) => {
    
    txtToDisplay = circle1.lastElementChild;

    toTop1.style.top = "5%";
    
    txtToDisplay.style.opacity = 1;
  },
  false
);

circle1.addEventListener(
  "mouseleave",
  (event) => {
    txtToDisplay = circle1.lastElementChild;

    toTop1.style.top = "39%";

    txtToDisplay.style.opacity = 0;
  },
  false
);

// CIRCLE 2
circle2.addEventListener(
  "mouseenter",
  (event) => {
    txtToDisplay = circle2.lastElementChild;

    toTop2.style.top = "5%";
    
    txtToDisplay.style.opacity = 1;
  },
  false
);

circle2.addEventListener(
  "mouseleave",
  (event) => {
    txtToDisplay = circle2.lastElementChild;

    toTop2.style.top = "39%";

    txtToDisplay.style.opacity = 0;
  },
  false
);

// CIRCLE 3
circle3.addEventListener(
  "mouseenter",
  (event) => {
    txtToDisplay = circle3.lastElementChild;

    toTop3.style.top = "5%";
    
    txtToDisplay.style.opacity = 1;
  },
  false
);

circle3.addEventListener(
  "mouseleave",
  (event) => {
    txtToDisplay = circle3.lastElementChild;

    toTop3.style.top = "39%";

    txtToDisplay.style.opacity = 0;
  },
  false
);

// CIRCLE 4
circle4.addEventListener(
  "mouseenter",
  (event) => {
    txtToDisplay = circle4.lastElementChild;

    toTop4.style.top = "5%";
    
    txtToDisplay.style.opacity = 1;
  },
  false
);

circle4.addEventListener(
  "mouseleave",
  (event) => {
    txtToDisplay = circle4.lastElementChild;

    toTop4.style.top = "39%";

    txtToDisplay.style.opacity = 0;
  },
  false
);

// CIRCLE 5
circle5.addEventListener(
  "mouseenter",
  (event) => {
    txtToDisplay = circle5.lastElementChild;

    toTop5.style.top = "5%";
    
    txtToDisplay.style.opacity = 1;
  },
  false
);

circle5.addEventListener(
  "mouseleave",
  (event) => {
    txtToDisplay = circle5.lastElementChild;

    toTop5.style.top = "39%";
    
    txtToDisplay.style.opacity = 0;
  },
  false
);
