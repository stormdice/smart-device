import 'core-js/modules/es.array.includes';
import './vendor/for-each-polyfill-ie11';
import './vendor/intersection-observer';
import './modules/input-masks';
import './modules/observer';
import { showModal } from './modules/modal';
import { openNav } from './modules/navigation';
import { initMobileAccordeonInFooter } from './modules/footer';

openNav();
initMobileAccordeonInFooter();

const linkBackCall = document.querySelector('.js-open-modal-backcall');

if (linkBackCall) {
  linkBackCall.addEventListener('click', showModal);
}
