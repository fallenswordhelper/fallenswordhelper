import './fetchGroupStatsButton.css';
import daGroupStats from '../../_dataAccess/daGroupStats';
import sendEvent from '../../analytics/sendEvent';
import attribsToArray from '../../common/attribsToArray';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import querySelectorArray from '../../common/querySelectorArray';
import addButton from './addButton';

function parseGroupData(attribs) {
  return `<div class="fshgrpstat"><div>Attack</div><div>${
    attribs[0]}</div><div>Defense</div><div>${attribs[1]}</div><div>Armor</div><div>${
    attribs[2]}</div><div>Damage</div><div>${attribs[4]}</div><div>HP</div><div>${
    attribs[3]}</div></div>`;
}

async function thisLink(aLink) {
  const groupId = aLink.href.split('=').at(-1);
  const json = await daGroupStats(groupId);
  const attribs = attribsToArray(json.r.attributes);
  const expiresLocation = aLink.parentNode.parentNode.previousElementSibling;
  insertHtmlBeforeEnd(expiresLocation, parseGroupData(attribs));
}

function fetchGroupData(evt) {
  sendEvent('groups', 'fetchGroupData');
  const { target } = evt;
  target.disabled = true;
  querySelectorArray('#pCC a[href*="=viewstats&"]').forEach(thisLink);
}

export default function fetchGroupStatsButton(buttonRow) {
  buttonRow.classList.add('fshRelative');
  const fetchStats = addButton(buttonRow, 'Fetch Group Stats');
  fetchStats.style.position = 'absolute';
  onclick(fetchStats, fetchGroupData);
}
