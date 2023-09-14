let castle = document.querySelector('.castle');
let erth = document.querySelector('.erth');
let media_h1 = document.querySelector('.media h1');
let tree = document.querySelector('.tree');
let navbar = document.querySelector('.navbar');
let sun = document.querySelector('.sun');

window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY;
    castle.style.marginTop = scrollValue * 1.5 + "px";
    tree.style.marginTop = scrollValue * 0.8 + "px";
    navbar.style.marginTop = scrollValue * 0.9 + "px";
    sun.style.marginTop = scrollValue * 1 + "px";
    sun.style.marginLeft = scrollValue * 0.5 + "px";
    media_h1.style.marginTop = scrollValue * -0.9 + "px";
})