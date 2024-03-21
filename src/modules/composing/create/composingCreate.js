import sendEvent from '../../analytics/sendEvent';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import on from '../../common/on';
import onclick from '../../common/onclick';

function setMaxVal() {
  sendEvent('composingCreate', 'setMaxVal');
  const lvlInput = getElementById('composing-skill-level-input');
  if (!lvlInput) return;
  lvlInput.value = getText(getElementById('composing-skill-level-max'));
}

export default function composingCreate() {
  onclick(getElementById('composing-add-skill'), setMaxVal);
  on(getElementById('composing-skill-select'), 'change', setMaxVal);
}
