import { o as onclick, z as getElementById, k as on, C as getText } from './calfSystem-c08399e5.js';

function setMaxVal() {
  getElementById('composing-skill-level-input').value = getText(getElementById('composing-skill-level-max'));
}

function composingCreate() {
  onclick(getElementById('composing-add-skill'), setMaxVal);
  on(getElementById('composing-skill-select'), 'change', setMaxVal);
}

export default composingCreate;
//# sourceMappingURL=composingCreate-3ae39d6e.js.map
