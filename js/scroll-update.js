let introLink = document.getElementById("intro-link");
let prerequisitesLink = document.getElementById("preq-link");
let prototypingLink = document.getElementById("proto-link");
let developmentLink = document.getElementById("dev-link");
let llLink = document.getElementById("ll-link");

let introElement = document.getElementById("Introduction");
let prerequisitesElement = document.getElementById("Prerequisites");
let prototypingElement = document.getElementById("Prototyping");
let developmentElement = document.getElementById("Development");
let llElement = document.getElementById("Lessons_Learned");

let scrollPosY = window.pageYOffset;
let yIntro = introElement.getBoundingClientRect().y;
let yPreq = prerequisitesElement.getBoundingClientRect().y;
let yProto = prototypingElement.getBoundingClientRect().y;
let yDev = developmentElement.getBoundingClientRect().y;
let yLl = llElement.getBoundingClientRect().y;

window.onresize = function updateY() {
    yIntro = introElement.getBoundingClientRect().y;
    yPreq = prerequisitesElement.getBoundingClientRect().y;
    yProto = prototypingElement.getBoundingClientRect().y;
    yDev = developmentElement.getBoundingClientRect().y;
    yLl = llElement.getBoundingClientRect().y;
}

// Inspiration from Amanda de Rijk, 2016 (https://www.competa.com/blog/add-a-css-class-on-scroll-with-vanilla-javascript/) [2020-02-20]
window.onscroll = function changeClass() {

    scrollPosY = window.pageYOffset;
    if (scrollPosY < yPreq) {
        introLink.className = ('nav-link active');
        prerequisitesLink.className = ('nav-link');
        prototypingLink.className = ('nav-link');
        developmentLink.className = ('nav-link');
        llLink.className = ('nav-link');
    } else if (scrollPosY < yProto) {
        introLink.className = ('nav-link');
        prerequisitesLink.className = ('nav-link active');
        prototypingLink.className = ('nav-link');
        developmentLink.className = ('nav-link');
        llLink.className = ('nav-link');
    } else if (scrollPosY < yDev){
        introLink.className = ('nav-link');
        prerequisitesLink.className = ('nav-link');
        prototypingLink.className = ('nav-link active');
        developmentLink.className = ('nav-link');
        llLink.className = ('nav-link');
    } else if (scrollPosY < yLl){
        introLink.className = ('nav-link');
        prerequisitesLink.className = ('nav-link');
        prototypingLink.className = ('nav-link');
        developmentLink.className = ('nav-link active');
        llLink.className = ('nav-link');
    } else if (scrollPosY >= yLl){
        introLink.className = ('nav-link');
        prerequisitesLink.className = ('nav-link');
        prototypingLink.className = ('nav-link');
        developmentLink.className = ('nav-link');
        llLink.className = ('nav-link active');
    }
}