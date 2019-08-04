'use strict';
const link = document.querySelector('.js-scroll-down');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
});
