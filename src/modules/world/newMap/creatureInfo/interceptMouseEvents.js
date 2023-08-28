import sendEvent from '../../../analytics/sendEvent';
import arrayFrom from '../../../common/arrayFrom';
import getElementById from '../../../common/getElementById';
import hasClass from '../../../common/hasClass';
import hasClasses from '../../../common/hasClasses';
import on from '../../../common/on';
import calf from '../../../support/calf';
import badData from '../badData';
import getCreatureStats from '../getCreatureStats/getCreatureStats';
import processMouseOver from './processMouseOver';

const creatureViewTests = ['verb', 'view', 'tip-static'];

function setQTip(monster, qtipText) { // jQuery
  return $(monster).qtip({
    overwrite: true,
    show: {
      event: 'mouseover',
      ready: true,
    },
    style: { classes: 'qtip-tipsy qtip-custom' },
    position: {
      my: 'center right',
      at: 'center left',
      effect: false,
      viewport: $(window),
    },
    content: { text: qtipText },
    hide: { effect: false },
  });
}

function getIndex(element) {
  return arrayFrom(element.parentNode.children).indexOf(element);
}

function displayJson(api, data) {
  const content = processMouseOver(data);
  api.set('content.text', content);
}

async function updateQTip(listItem, api) {
  const passback = getIndex(listItem);
  const creatureStats = await getCreatureStats(GameData.actions()[passback].data.id, passback);
  if (!badData(creatureStats)) displayJson(api, creatureStats);
}

function makeMouseOver(target, listItem) {
  sendEvent('NewMap', 'CreatureInfo');
  target.classList.add('fshTip');
  const tooltip = setQTip(target, 'Loading...');
  const api = tooltip.qtip('api');
  if (api) updateQTip(listItem, api);
}

function isViewCreature(target, listItem) {
  return hasClasses(creatureViewTests, target) && !hasClass('fshTip', target)
    && hasClass('creature', listItem);
}

function moEvt(evt) {
  if (!calf.showCreatureInfo) return;
  const { target } = evt;
  const listItem = target.parentNode.parentNode.parentNode;
  if (isViewCreature(target, listItem)) makeMouseOver(target, listItem);
}

export default function interceptMouseEvents() {
  on(getElementById('actionList'), 'mouseover', moEvt);
}
