import Inputmask from 'inputmask';

const inputPhones = document.querySelectorAll('.js-tel');
const im = new Inputmask('+7 (999)999-99-99');

for (let i = 0; i < inputPhones.length; i += 1) {
  const phone = inputPhones[i];

  im.mask(phone);
}
