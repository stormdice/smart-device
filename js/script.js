'use strict';
const linkScrollDown = document.querySelector('.js-scroll-down');

linkScrollDown.addEventListener('click', function(evt) {
  evt.preventDefault();
  window.scroll({ top: 900, left: 0, behavior: 'smooth' });
});
