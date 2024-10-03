import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import all from '../../common/all';
import closestTable from '../../common/closestTable';
import contains from '../../common/contains';
import getText from '../../common/getText';
import getTextTrim from '../../common/getTextTrim';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import regExpGroups from '../../common/regExpGroups';
import { fetchItemRe } from '../../support/constants';
import { realtime } from '../../support/now';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';
import parseDateAsTimestamp from '../../system/parseDateAsTimestamp';

const err = () => ({ e: { code: 0, message: 'Server Error' }, s: false });
const playerLink = (t) => t.previousElementSibling.children[0];
const timeBox = (a) => a.parentNode.previousElementSibling;

const parseDateAsOffset = (textDate) =>
  Math.floor((realtime() - parseDateAsTimestamp(textDate)) / 1000);

const basicProps = ([a, timeEL, playerEl]) => ({
  id: Number(getCustomUrlParameter(a.href, 'secure_id')),
  player: {
    id: Number(getCustomUrlParameter(playerEl.href, 'player_id')),
    name: getText(playerEl),
  },
  sent: true,
  time: parseDateAsOffset(getTextTrim(timeEL)),
});

const getNumber = (aTable, i) =>
  Number(getTextTrim(aTable.rows[i].cells[1].children[0]));

function getItems(img) {
  const { itemId, invId } = regExpGroups(fetchItemRe, img.dataset.tipped);
  return {
    a: Number(invId),
    b: Number(itemId),
  };
}

function itemDetail(o, aTable) {
  const gold = getNumber(aTable, 3);
  const points = getNumber(aTable, 4);
  const items = querySelectorArray('img', aTable).map(getItems);
  const reqGold = getNumber(aTable, 7);
  const reqPoints = getNumber(aTable, 8);
  return {
    ...o,
    ...(gold && { gold }),
    ...(items.length && { items }),
    ...(points && { points }),
    ...(reqGold && { req_gold: reqGold }),
    ...(reqPoints && { req_points: reqPoints }),
  };
}

async function getDetails(o) {
  const itemDoc = await indexAjaxDoc({
    cmd: 'trade',
    subcmd: 'viewsecure',
    secure_id: o.id,
  });
  if (!itemDoc) return;
  const aTable = querySelector('#pCC table[width="300"]', itemDoc);
  if (!aTable) return;
  return itemDetail(o, aTable);
}

async function parseOutgoing(outgoing) {
  const sent = await all(
    querySelectorArray('a[href*="&secure_id="]', outgoing)
      .map((a) => [a, timeBox(a)])
      .map(([a, timeEl]) => [a, timeEl, playerLink(timeEl)])
      .map(basicProps)
      .map(getDetails),
  );
  if (sent.some((o) => !o)) return err();
  return { s: true, r: { sent } };
}

function parseDoc(doc) {
  const heads = querySelectorArray('b', doc);
  const outgoing = closestTable(
    heads.find(contains('Outgoing Trades (Your offers)')),
  );
  if (!outgoing) return err();
  return parseOutgoing(outgoing);
}

function parseReport(doc) {
  if (!doc) return err();
  return parseDoc(doc);
}

// Incomplete
export default async function tradeSecure() {
  return parseReport(await indexAjaxDoc({ cmd: 'trade', subcmd: 'secure' }));
}
