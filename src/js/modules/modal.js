import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { checkEscEvent } from '../utils';

const modalOverlays = document.querySelectorAll('.modal');
const buttonModalClose = document.querySelector('.js-modal-close');

/**
 * Закрывает модальное окно
 */
const closeModal = () => {
  document.removeEventListener('keydown', onEscModalClose);
  document.querySelector('.modal--open').classList.remove('modal--open');
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
const showModal = (evt) => {
  const modalName = evt.currentTarget.dataset.targetModal;
  const modal = document.getElementById(modalName);

  if (!modal) {
    return;
  }

  disablePageScroll();
  modal.classList.add('modal--open');
  document.addEventListener('click', closeModalOverlay);
  document.addEventListener('keydown', onEscModalClose);

  if (buttonModalClose) {
    buttonModalClose.addEventListener('click', closeModal);
  }
};

export { showModal };
