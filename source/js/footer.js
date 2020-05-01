'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const footerNavButtons = document.querySelectorAll('.js-open-footer-nav');

  if (footerNavButtons.length) {
    footerNavButtons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        const thisFooterContent = button.closest('.footer__content');

        if (thisFooterContent.classList.contains('footer__content--show-nav')) {
          thisFooterContent.classList.remove('footer__content--show-nav');
        } else {
          if (footer.querySelector('.footer__content--show-nav')) {
            footer
              .querySelector('.footer__content--show-nav')
              .classList.remove('footer__content--show-nav');
          }

          thisFooterContent.classList.add('footer__content--show-nav');
        }
      });
    });
  }
})();
