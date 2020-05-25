import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Inputmask from 'inputmask';
import checkEscEvent from './utils';

const htmlElement = document.querySelector('html');
const modalOverlays = document.querySelectorAll('.modal');
const buttonModalClose = document.querySelectorAll('.js-modal-close');
const buttonNavClose = document.querySelector('.js-nav-close');
const linkBackCall = document.querySelector('.js-back-call');
const buttonOpenMenu = document.querySelector('.js-menu');
const nav = document.querySelector('.nav');
const inputPhones = document.querySelectorAll('.js-tel');
const im = new Inputmask('+7 (999)999-99-99');

inputPhones.forEach((phone) => {
  im.mask(phone);
});

/**
 * Закрывает модальное окно
 */
const closeModal = () => {
  htmlElement.classList.remove('show-modal');
  document.removeEventListener('keydown', onEscModalClose);
  enablePageScroll();
};

/**
 * Функция для обработчика события
 * @param {Object} evt - глобальный объект Event
 */
const closeModalOverlay = (evt) => {
  modalOverlays.forEach((modal) => {
    if (evt.target !== modal) {
      return;
    }

    closeModal();
  });
};

/**
 * При нажатии на ESC убирает модальное окно
 */
const onEscModalClose = function (evt) {
  if (checkEscEvent(evt)) {
    closeModal();
  }
};

/**
 * Показывает модальное окно
 * @param {HTMLElement} modal - DOM элемент
 */
const showModal = () => {
  htmlElement.classList.add('show-modal');
  disablePageScroll();

  document.addEventListener('click', closeModalOverlay);
  document.addEventListener('keydown', onEscModalClose);
};

buttonModalClose.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    closeModal();
  });
});

linkBackCall.addEventListener('click', (evt) => {
  evt.preventDefault();
  showModal();
});

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

if (nav) {
  buttonOpenMenu.addEventListener('click', (evt) => {
    evt.preventDefault();
    nav.classList.add('nav--open');
    disablePageScroll();
    document.addEventListener('keydown', onEscNavClose);
  });
}

const footer = document.querySelector('.footer');
const footerNavButtons = document.querySelectorAll('.js-open-footer-nav');

if (footerNavButtons.length) {
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
}
