'use strict';

(function() {
  const tabletWidth = 768;

  if (screen.width < tabletWidth) {
    const footerContentList = document.querySelectorAll('.js-footer-list');

    footerContentList.forEach(list => {
      list.addEventListener('click', () => {
        list.classList.toggle('footer__content--height');
      });
    });
  }
})();
