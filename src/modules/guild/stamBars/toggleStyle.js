import createStyle from '../../common/cElement/createStyle';
import getElementsByTagName from '../../common/getElementsByTagName';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import querySelectorArray from '../../common/querySelectorArray';
import { get } from '../../system/idb';
import { defTable, playerLinkSelector } from '../../support/constants';
import { pcc } from '../../support/layout';
import {
  cur,
  fshGuildActivity,
  max,
} from '../../notepad/guildTracker/indexConstants';

let thisStyle = 0;
let trackerData = null;

async function loadTrackerData() {
  const raw = await get(fshGuildActivity);
  if (raw?.members) {
    trackerData = {};
    for (const [name, history] of Object.entries(raw.members)) {
      if (history.length > 0) {
        const latest = history[history.length - 1];
        trackerData[name] = {
          current: latest[cur],
          max: latest[max],
        };
      }
    }
  }
}

function getStamPerc(a) {
  const playerName = getText(a);
  const data = trackerData?.[playerName];

  if (!data) return 0;

  return Math.min(Math.round((data.current / data.max) * 100), 100);
}

function stamBarStyle(a) {
  const perc = getStamPerc(a);

  return (
    '.fshProgressBar ' +
    `tr:nth-child(${a.parentNode.parentNode.rowIndex + 1}) {` +
    `background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${perc}%, ` +
    `transparent ${perc + 1}%)}`
  );
}

async function injectStyle() {
  await loadTrackerData();

  const tables = getElementsByTagName(defTable, pcc());
  const memberList = tables[tables.length - 1];
  const playerLinks = querySelectorArray(playerLinkSelector, memberList);
  if (!playerLinks.length) return;

  const memberLinks = playerLinks.filter((a) => {
    const playerName = getText(a);
    return trackerData?.[playerName];
  });

  if (!memberLinks.length) return;
  memberList.classList.add('fshProgressBar');
  const myTest = memberLinks.map(stamBarStyle).join('\n');
  thisStyle = insertElement(document.body, createStyle(myTest)).sheet;
}

export default async function toggleStyle(enableStamBars) {
  if (!thisStyle) {
    await injectStyle();
  } else {
    thisStyle.disabled = !enableStamBars;
  }
}
