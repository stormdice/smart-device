'use strict';

(function() {
  const buttonModalClose = document.querySelectorAll('.js-modal-close');
  const modalBackCall = document.querySelector('.js-modal-back-call');
  const linkBackCall = document.querySelector('.js-back-call');
  const body = document.querySelector('body');

  /**
   * создаёт разметку оверлея
   */
  const createOverlay = () => {
    const div = document.createElement('div');

    div.setAttribute(
      'style',
      'position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.3); z-index: 1'
    );
    div.classList.add('overlay');
    const overlay = body.appendChild(div);

    overlay.addEventListener('click', () => {
      body.removeChild(overlay);
      closeModal();
    });

    return overlay;
  };

  /**
   * Закрывает модальное окно
   */
  const closeModal = () => {
    const modals = document.querySelectorAll('.js-modal');

    modals.forEach(function(modal) {
      modal.classList.remove('modal--show');
    });

    body.classList.remove('modal-open');
  };

  /**
   * При нажатии на ESC убирает модальное окно
   */
  const onEscModalClose = function(evt) {
    if (window.utils.checkEscEvent(evt)) {
      body.removeChild(document.querySelector('.overlay'));
      closeModal();
      document.removeEventListener('keydown', onEscModalClose);
    }
  };

  /**
   * Показывает модальное окно
   * @param {HTMLElement} modal - DOM элемент
   */
  const showModal = modal => {
    createOverlay();
    body.classList.add('modal-open');
    modal.classList.add('modal--show');
    document.addEventListener('keydown', onEscModalClose);
  };

  buttonModalClose.forEach(button => {
    button.addEventListener('click', evt => {
      evt.preventDefault();
      body.removeChild(document.querySelector('.overlay'));
      closeModal();
    });
  });

  linkBackCall.addEventListener('click', evt => {
    evt.preventDefault();
    showModal(modalBackCall);
  });
})();
