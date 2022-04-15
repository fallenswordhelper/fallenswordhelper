import getKillsPct from './getKillsPct';
import getText from '../../common/getText';
import getTitanString from './getTitanString';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import roundToString from '../../common/roundToString';

function summaryHtml(guildKills, currentHP, totalHP) {
  return `<br><span class="fshBlue"> (${
    roundToString(getKillsPct(totalHP - currentHP, guildKills), 2)
  }% Current <br>${roundToString((guildKills * 100) / totalHP, 2)
  }% Total<br>${getTitanString(guildKills, totalHP, currentHP)})`;
}

function injectSummary(aRow) {
  const titanHPArray = aRow.hp.split('/');
  insertHtmlBeforeEnd(
    aRow.tr.cells[3],
    summaryHtml(
      Number(getText(aRow.tr.cells[3])),
      Number(titanHPArray[0]),
      Number(titanHPArray[1]),
    ),
  );
}

export default function killsSummary(aRow) {
  if (!aRow.active) { return; }
  injectSummary(aRow);
}
