// sticky navbar
window.onscroll = function() {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   
   if(window.pageYOffset > fixedNav) {
      header.classList.add('fixed-nav');
   } else {
      header.classList.remove('fixed-nav');
   }
}

// menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('is-active');
   navMenu.classList.toggle('right-0'); 
});

// typed js
var typed = new Typed('#element', {
   strings: ['lorem', 'ipsum'],
   typeSpeed: 90,
   backSpeed: 90,
   loop: true
 });