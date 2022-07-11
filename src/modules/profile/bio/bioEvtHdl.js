import entries from '../../common/entries';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import hasClass from '../../common/hasClass';
import regExpExec from '../../common/regExpExec';
import setInnerHtml from '../../dom/setInnerHtml';
import bioSendEvent from './bioSendEvent';
import formatCost from './formatCost';
import getBuffsToBuy from './getBuffsToBuy';
import getPrice from './getPrice';

const buffCost = { count: 0, buffs: {} };

function buffRows(pair) {
  return `<tr><td>${pair[0]}</td><td>: ${pair[1][0]
  }${pair[1][1]}</td></tr>`;
}

function totalCost(acc, pair) {
  acc[pair[1][1]] += pair[1][0];
  return acc;
}

function hazBuffs() {
  const myEntries = entries(buffCost.buffs);
  const totalText = formatCost(myEntries.reduce(
    totalCost,
    {
      k: 0,
      fsp: 0,
      stam: 0,
      unknown: 0,
    },
  ));
  setInnerHtml(
    '<span class="tip-static" '
    + 'data-tipped="This is an estimated cost based on how the script finds '
    + 'the cost associated with buffs from viewing bio. It can be incorrect, '
    + `please use with discretion.<br><hr><table border=0>${
      myEntries.map(buffRows).join('')}</table><b>Total: ${
      totalText}</b>">Estimated Cost: <b>${totalText}</b></span>`,
    getElementById('buffCost'),
  );
  buffCost.buffCostTotalText = totalText;
}

function updateBuffCost() { // Legacy
  if (buffCost.count > 0) {
    hazBuffs();
  } else {
    setInnerHtml('&nbsp;', getElementById('buffCost'));
    buffCost.buffCostTotalText = '';
  }
}

function priceUnit(price) {
  if (price[0].includes('k')) {
    return 'k';
  }
  if (price[0].includes('f')) {
    return 'fsp';
  }
  return 'stam';
}

function getBuffCost(buffNameNode) {
  const price = getPrice(buffNameNode);
  let type = 'unknown';
  let cost = '1';
  if (price) {
    type = priceUnit(price);
    [cost] = regExpExec(/[+-]?[.\d]+/, price[0]);
  }
  buffCost.buffs[getText(buffNameNode)] = [parseFloat(cost), type];
  buffCost.count += 1;
}

function toggleBuffsToBuy(buffNameNode) { // Legacy
  bioSendEvent('toggleBuffsToBuy');
  const selected = hasClass('fshBlue', buffNameNode);
  buffNameNode.classList.toggle('fshBlue');
  buffNameNode.classList.toggle('fshYellow');
  const buffName = getText(buffNameNode);
  if (selected) {
    getBuffCost(buffNameNode);
  } else {
    buffCost.count -= 1;
    delete buffCost.buffs[buffName];
  }
  updateBuffCost();
}

function closestSpan(el) {
  if (!el.tagName || el.tagName === 'SPAN') { return el; }
  return closestSpan(el.parentNode);
}

function isBuffLink(buffNameNode) {
  return buffNameNode.classList && hasClass('buffLink', buffNameNode);
}

export default function bioEvtHdl(e) {
  // This is also called by bio preview
  if (e.target.id === 'fshSendBuffMsg') {
    getBuffsToBuy(buffCost);
    return;
  }
  const buffNameNode = closestSpan(e.target);
  if (isBuffLink(buffNameNode)) {
    toggleBuffsToBuy(buffNameNode);
  }
}
