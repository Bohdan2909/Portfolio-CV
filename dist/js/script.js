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

});