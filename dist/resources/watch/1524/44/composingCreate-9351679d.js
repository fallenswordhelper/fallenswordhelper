import { o as onclick, z as getElementById, k as on, C as getText } from './calfSystem-23094c64.js';

function setMaxVal() {
  getElementById('composing-skill-level-input').value = getText(getElementById('composing-skill-level-max'));
}

function composingCreate() {
  onclick(getElementById('composing-add-skill'), setMaxVal);
  on(getElementById('composing-skill-select'), 'change', setMaxVal);
}

export default composingCreate;
//# sourceMappingURL=composingCreate-9351679d.js.map
