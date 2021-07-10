import createButton from '../../../common/cElement/createButton';
import createDiv from '../../../common/cElement/createDiv';
import doBuffLinks from '../../../common/doBuffLinks';
import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import setInnerHtml from '../../../dom/setInnerHtml';

export let containerDiv;
export let leftDiv;
export let fetchStatsBtn;
export let myDefenders;

function playerName(x) { return x.player_name; }

function defendersSetup(relicData) {
  myDefenders = relicData.defenders.map(playerName);
}

function containerSetup() {
  if (containerDiv) {
    setInnerHtml('', containerDiv);
  } else {
    containerDiv = createDiv({ className: 'body' });
  }
}

function makeLeftDiv(relicData) {
  leftDiv = createDiv({ className: 'fshFloatLeft fshRelicLeftDiv' });
  insertElement(containerDiv, leftDiv);
  if (relicData.is_owner) {
    insertElement(leftDiv, doBuffLinks(myDefenders));
  }
  fetchStatsBtn = createButton({
    className: 'custombutton',
    textContent: 'Fetch Stats',
  });
  insertElement(leftDiv, fetchStatsBtn);
}

export function primaryElementsSetup(relicData) {
  defendersSetup(relicData);
  containerSetup();
  makeLeftDiv(relicData);
  const dialogRelic = getElementById('dialog-relic');
  insertElement(dialogRelic, containerDiv);
}
