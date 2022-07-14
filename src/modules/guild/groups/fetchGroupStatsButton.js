import './fetchGroupStatsButton.css';
import getGroupStats from '../../ajax/getGroupStats';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import addButton from './addButton';

function parseGroupData(linkElement, obj) {
  const extraText = '<table class="fshgrpstat">'
    + '<tr>'
    + '<td class="fshBrown">Attack</td>'
    + `<td class="fshRight">${obj.attack}</td>`
    + '<td class="fshBrown">Defense</td>'
    + `<td class="fshRight">${obj.defense}</td>`
    + '</tr><tr>'
    + '<td class="fshBrown">Armor</td>'
    + `<td class="fshRight">${obj.armor}</td>`
    + '<td class="fshBrown">Damage</td>'
    + `<td class="fshRight">${obj.damage}</td>`
    + '</tr><tr>'
    + '<td class="fshBrown">HP</td>'
    + `<td class="fshRight">${obj.hp}</td>`
    + '<td colspan="2"></td>'
    + '</tr></table>';
  const expiresLocation = linkElement.parentNode.parentNode
    .previousElementSibling;
  insertHtmlBeforeEnd(expiresLocation, extraText);
}

function thisLink(aLink) {
  getGroupStats(aLink.href).then(partial(parseGroupData, aLink));
}

function fetchGroupData(evt) {
  // eslint-disable-next-line no-param-reassign
  evt.target.disabled = true;
  querySelectorArray('#pCC a[href*="=viewstats&"]').forEach(thisLink);
}

export default function fetchGroupStatsButton(buttonRow) {
  const fetchStats = addButton(buttonRow, 'Fetch Group Stats');
  onclick(fetchStats, fetchGroupData);
}
