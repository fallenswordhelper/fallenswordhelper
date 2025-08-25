import dynamicAlert from '../alert/dynamicAlert';
import createButton from '../common/cElement/createButton';
import createDiv from '../common/cElement/createDiv';
import insertElement from '../common/insertElement';
import onclick from '../common/onclick';
import { pcc } from '../support/layout';
import { realtimeSecs } from '../support/now';
import { get as idbget } from '../system/idb';
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

const getDelay = (data) =>
  Math.max(0, 600 - (realtimeSecs() - (data?.lastUpdate ?? 0)));

async function nextSELogRefresh() {
  const fshSeLog = await idbget('fsh_seLog');
  insertElement(
    pcc(),
    createDiv({
      style: { paddingTop: '8px' },
      textContent: `Next SE Log refresh: ${getDelay(fshSeLog)}s`,
    }),
  );
}

export default function blank() {
  if (
    !defineUserIsDev ||
    location.search !== '?cmd=notepad&blank=1' ||
    !pcc()
  ) {
    return;
  }
  addBtn('Alert', alertHdl);
  addBtn('Guild Log', mountGuildLog);
  addBtn('Pot Report', mountPotReport);
  addBtn('Quick Extract', mountQuickExtract);
  addBtn('SE Tracker', mountSuperElite);
  addBtn('WhosGotWhat', mountWhosGotWhat);
  nextSELogRefresh();
}
