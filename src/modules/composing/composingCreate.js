import getElementById from '../common/getElementById';
import getText from '../common/getText';
import on from '../common/on';
import onclick from '../common/onclick';

function setMaxVal() {
  getElementById('composing-skill-level-input').value = getText(getElementById('composing-skill-level-max'));
}

export default function composingCreate() {
  onclick(getElementById('composing-add-skill'), setMaxVal);
  on(getElementById('composing-skill-select'), 'change', setMaxVal);
}
