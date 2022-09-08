window.addEventListener('DOMContentLoaded', () => {
const menu = document.querySelector('.menu');
const burger = document.querySelector('.hamburger');
const close = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

function openMenu() {
  menu.classList.add('active');
}
function closeMenu() {
  menu.classList.remove('active');
}

burger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);


//Counter skills
const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  
  lines[i].style.width = item.innerHTML;

});
});