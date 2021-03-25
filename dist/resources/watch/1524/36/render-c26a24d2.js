import { s as partial, c as calf, Y as sendEvent, g as getElementsByTagName, p as pCC, C as getText, aS as keys, I as getValue, h as hasClass, e as entries, B as setInnerHtml, z as getElementById } from './calfSystem-c08399e5.js';
import { r as roundToString } from './roundToString-a9a284a9.js';
import { p as playerName } from './playerName-34451b45.js';
import { t as toLowerCase } from './toLowerCase-fa335220.js';

const costFormatter = [
  [
    (total) => total.fsp > 0,
    (total) => `${roundToString(total.fsp, 2)} FSP`,
  ],
  [
    (total) => total.fsp > 0 && total.k > 0,
    () => ' and ',
  ],
  [
    (total) => total.k > 0,
    (total) => `${total.k} k`,
  ],
  [
    (total) => total.stam > 0 && (total.fsp > 0 || total.k > 0),
    () => ' and ',
  ],
  [
    (total) => total.stam > 0,
    (total) => `${total.stam} Stam(${roundToString(total.stam / 25, 1)}fsp)`,
  ],
  [
    (total) => total.unknown > 0,
    (total) => ` (${total.unknown} buff(s) with unknown cost)`,
  ],
];

function costElement(total, el) {
  if (el[0](total)) {
    return el[1](total);
  }
  return '';
}

function formatCost(total) {
  return costFormatter.map(partial(costElement, total)).join('');
}

function profileBuyBuffsEvent() {
  if (calf.subcmd === '-') { sendEvent('profile', 'formatBuffsToBuy'); }
}

function getTargetPlayer() {
  let targetPlayer = getElementsByTagName('h1', pCC);
  if (targetPlayer.length !== 0) {
    targetPlayer = getText(targetPlayer[0]);
  } else {
    targetPlayer = playerName();
  }
  return targetPlayer;
}

const buyFormatter = [
  [
    (greetingText) => !greetingText.includes('{buffs}'),
    (greetingText, buffsToBuy) => `${greetingText} ${buffsToBuy}`,
  ],
  [
    (greetingText) => !greetingText.includes('{cost}'),
    (greetingText, buffsToBuy) => greetingText
      .replace(/{buffs}/g, `\`~${buffsToBuy}~\``),
  ],
  [
    () => true,
    (greetingText, buffsToBuy, buffCost) => greetingText
      .replace(/{buffs}/g, `\`~${buffsToBuy}~\``)
      .replace(/{cost}/g, buffCost.buffCostTotalText),
  ],
];

function formatToUse(greetingText, el) { return el[0](greetingText); }

function formatGreetingText(greetingText, buffCost) {
  return buyFormatter.find(partial(formatToUse, greetingText))[1](
    greetingText, keys(buffCost.buffs).join(', '), buffCost,
  );
}

function formatBuffsToBuy(buffCost) { // Legacy
  profileBuyBuffsEvent();
  const targetPlayer = getTargetPlayer();
  let greetingText = getValue('buyBuffsGreeting').trim();
  greetingText = greetingText.replace(/{playername}/g, targetPlayer);
  greetingText = formatGreetingText(greetingText, buffCost);
  window.openQuickMsgDialog(targetPlayer, greetingText, '');
}

function getBuffsToBuy(buffCost) { // Legacy
  if (buffCost.count > 0) { formatBuffsToBuy(buffCost); }
}

const numRE = /[^a-zA-Z0-9.,+\- ]/g;
const priceRE = /([+-]{0,1}[.\d]+ *k)|([+-]{0,1}[.\d]+ *fsp)|([+-]{0,1}[.\d]+ *stam)/;

function thisLine(node) {
  return node && node.nodeName !== 'BR';
}

function formatPrice(text) {
  return toLowerCase(text.replace(numRE, '')).match(priceRE);
}

function priceAfterName(buffNameNode) {
  let text = '';
  let node = buffNameNode;
  // get the whole line from the buff name towards the end (even after
  // the ',', in case of 'AL, Lib, Mer: 10k each'
  while (thisLine(node)) {
    const newtext = getText(node);
    node = node.nextSibling; // Text Node
    text += newtext;
  }
  return formatPrice(text);
}

function priceBeforeName(buffNameNode) {
  let text = '';
  let node = buffNameNode;
  while (thisLine(node)) {
    const newtext = getText(node);
    node = node.previousSibling; // Text Node
    text = newtext + text;
  }
  return formatPrice(text);
}

function getPrice(buffNameNode) {
  let price = priceAfterName(buffNameNode);
  if (!price) { // some players have prices BEFORE the buff names
    price = priceBeforeName(buffNameNode);
  }
  return price;
}

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
  const totalText = formatCost(myEntries.reduce(totalCost,
    {
      k: 0, fsp: 0, stam: 0, unknown: 0,
    }));
  setInnerHtml('<span class="tip-static" '
    + 'data-tipped="This is an estimated cost based on how the script finds '
    + 'the cost associated with buffs from viewing bio. It can be incorrect, '
    + `please use with discretion.<br><hr><table border=0>${
      myEntries.map(buffRows).join('')}</table><b>Total: ${
      totalText}</b>">Estimated Cost: <b>${totalText}</b></span>`,
  getElementById('buffCost'));
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
  let type;
  let cost;
  if (price) {
    type = priceUnit(price);
    [cost] = price[0].match(/([+-]?[.\d]+)/);
  } else {
    type = 'unknown';
    cost = '1';
  }
  buffCost.buffs[getText(buffNameNode)] = [parseFloat(cost), type];
  buffCost.count += 1;
}

function toggleBuffsToBuy(buffNameNode) { // Legacy
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

function bioEvtHdl(e) {
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

function buffToggles(acc, buff, i) {
  return acc.replace(buff, `<span id="fshBuff${
    i}" class="buffLink fshBlue">${
    buff.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g, '')}</span>`);
}

function renderBio(_bioContents) {
  // This is also called by bio preview
  let bioContents = _bioContents.replace(/\{b\}/g, '`~')
    .replace(/\{\/b\}/g, '~`');
  const buffs = bioContents.match(/`~([^~]|~(?!`))*~`/g);
  if (!buffs) { return; }
  bioContents = buffs.reduce(buffToggles, bioContents);
  if (bioContents.indexOf('[cmd]') < 0) { bioContents += '[cmd]'; }
  bioContents = bioContents.replace('[cmd]',
    '<br><input id="fshSendBuffMsg" '
    + 'class="custombutton" type="button" value="Ask For Buffs"><br>'
    + '<span id="buffCost" class="fshRed">&nbsp;</span>');
  return bioContents;
}

export { bioEvtHdl as b, renderBio as r };
//# sourceMappingURL=render-c26a24d2.js.map
