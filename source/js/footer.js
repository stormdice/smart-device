'use strict';

const DEBOUNCE_INTERVAL = 500;

/**
 * устранение дребезга
 * @param {function} callBack - коллбек функция
 * @return {function}
 */
const debounce = function(callBack) {
  let lastTimeout = null;

  return function() {
    const parameters = arguments;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function() {
      callBack.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

/**
 * показывает/скрывает список контента в футере
 */
const showFooterContentList = () => {
  const tabletWidth = 770;

  if (screen.width < tabletWidth) {
    console.log(screen.width);
    const footerContentList = document.querySelectorAll('.js-footer-list');

    footerContentList.forEach(list => {
      list.addEventListener('click', () => {
        list.classList.toggle('footer__content--height');
      });
    });
  }
};

window.addEventListener('resize', debounce(showFooterContentList));
