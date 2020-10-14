import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { checkEscEvent } from '../utils';

const buttonNavClose = document.querySelector('.js-nav-close');
const buttonOpenMenu = document.querySelector('.js-menu');
const nav = document.querySelector('.nav');

const closeNav = () => {
  nav.classList.remove('nav--open');
  enablePageScroll();
  document.removeEventListener('keydown', onEscNavClose);
};

const onEscNavClose = function (evt) {
  if (checkEscEvent(evt)) {
    closeNav();
  }
};

buttonNavClose.addEventListener('click', closeNav);

const openNav = () => {
  if (nav) {
    buttonOpenMenu.addEventListener('click', (evt) => {
      evt.preventDefault();
      nav.classList.add('nav--open');
      disablePageScroll();
      document.addEventListener('keydown', onEscNavClose);
    });
  }
};

export { openNav };
