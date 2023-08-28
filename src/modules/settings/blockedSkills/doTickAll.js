import './tickAll.css';
import createButton from '../../common/cElement/createButton';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import onclick from '../../common/onclick';
import querySelectorAll from '../../common/querySelectorAll';
import setText from '../../dom/setText';
import { blockedSkillsCheckboxes } from '../../support/constants';

const tickAllBuffs = 'Tick all buffs';

function toggleTickAllBuffs(e) {
  const tckTxt = getText(e.target) === tickAllBuffs;
  querySelectorAll(blockedSkillsCheckboxes).forEach((ctx) => { ctx.checked = tckTxt; });
  if (tckTxt) setText('Untick all buffs', e.target);
  else setText(tickAllBuffs, e.target);
}

export default function doTickAll() {
  const tickAll = createButton({ className: 'tick-all', textContent: tickAllBuffs });
  onclick(tickAll, toggleTickAllBuffs);
  const inject = getElementById('settingsTabs-4').children[0].rows[0].cells[0];
  inject.classList.add('fshRelative');
  insertElement(inject, tickAll);
}
