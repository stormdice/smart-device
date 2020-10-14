const footer = document.querySelector('.footer');
const footerNavButtons = document.querySelectorAll('.js-open-footer-nav');

const initMobileAccordeonInFooter = () => {
  if (footerNavButtons.length === 0) {
    return;
  }

  footerNavButtons.forEach((button) => {
    button.addEventListener('click', () => {
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
};

export { initMobileAccordeonInFooter };
