import dynamicAlert from '../alert/dynamicAlert';
import createButton from '../common/cElement/createButton';
import insertElement from '../common/insertElement';
import onclick from '../common/onclick';
import { pcc } from '../support/layout';
import mountGuildLog from './guildLog/mountGuildLog.svelte';
import mountPotReport from './potReport/mountPotReport.svelte';
import mountQuickExtract from './quickExtract/mountQuickExtract.svelte';
import mountSuperElite from './superelite/mountSuperElite.svelte';
import mountWhosGotWhat from './whosGotWhat/mountWhosGotWhat.svelte';

let index = 0;

const msgs = ['first', 'second', 'third'];

function alertHdl() {
  dynamicAlert(msgs[index]);
  index += 1;
  if (index === 3) index = 0;
}

function addBtn(textContent, btnHdl) {
  const btn = createButton({ textContent });
  insertElement(pcc(), btn);
  onclick(btn, btnHdl);
}

export default function blank() {
  if (!defineUserIsDev || location.search !== '?cmd=notepad&blank=1') return;
  addBtn('Alert', alertHdl);
  addBtn('Guild Log', mountGuildLog);
  addBtn('Pot Report', mountPotReport);
  addBtn('Quick Extract', mountQuickExtract);
  addBtn('SE Tracker', mountSuperElite)
  addBtn('WhosGotWhat', mountWhosGotWhat);
}
