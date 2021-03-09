import { o as onclick, y as getElementById, k as on, B as getText } from './calfSystem-d1de1997.js';

function setMaxVal() {
  getElementById('composing-skill-level-input').value = getText(getElementById('composing-skill-level-max'));
}

function composingCreate() {
  onclick(getElementById('composing-add-skill'), setMaxVal);
  on(getElementById('composing-skill-select'), 'change', setMaxVal);
}

export default composingCreate;
//# sourceMappingURL=composingCreate-6fce19c1.js.map
