'use strict';

var tabletWidth = 770;

if (screen.width < tabletWidth) {
  var footerContentList = document.querySelectorAll('.js-footer-list');
  footerContentList.forEach(function (list) {
    list.addEventListener('click', function () {
      list.classList.toggle('footer__content--height');
    });
  });
}

'use strict';

var linkScrollDown = document.querySelector('.js-scroll-down');
linkScrollDown.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scroll({
    top: 900,
    left: 0,
    behavior: 'smooth'
  });
});