import { N as arrayFrom, z as getElementById, H as getTextTrim, b as createDiv, m as getArrayByTagName, E as querySelector } from './calfSystem-d5c49dc8.js';
import { n as numberIsNaN } from './numberIsNaN-d0e4b349.js';
import { s as setTipped } from './setTipped-70cff648.js';

function textNodes(node) {
  if (node instanceof Node) {
    return node.nodeType === Node.TEXT_NODE;
  }
}

const BARRICADE = 98;
const ENTRENCH = 85;
const NMV = 60;

function getStatVal(stat) {
  return Number(
    arrayFrom(
      getElementById(`stat-${stat.toLowerCase()}`).childNodes,
    )
      .filter(textNodes)
      .map(getTextTrim)
      .join(''),
  );
}

function gotPrimary(buffImg, bold, primaryStat) {
  const secondaryStat = getStatVal(bold[3]);
  const buffEffect = Math.floor(
    primaryStat * (Number(bold[1].replace(/[+%]/g, '')) / 100),
  );
  setTipped(buffImg.dataset.tipped.replace('</center></div>',
    `<br>Buff Effect: ${String(buffEffect)}<br>${bold[2]}: ${
      String(primaryStat - buffEffect)}&nbsp;&nbsp;${bold[3]}: ${
      String(secondaryStat + buffEffect)}$&`), buffImg);
}

function gotImg(buffImg) {
  const mock = createDiv({ innerHTML: buffImg.dataset.tipped });
  const bold = getArrayByTagName('b', mock).map((b) => getTextTrim(b));
  const primaryStat = getStatVal(bold[2]);
  if (!numberIsNaN(primaryStat)) { gotPrimary(buffImg, bold, primaryStat); }
}

function updateBuffTip(buffId) {
  const buffImg = querySelector(
    `#profileRightColumn img[src$="/${String(buffId)}.png"]`,
  );
  if (buffImg) { gotImg(buffImg); }
}

function updateBuffs() {
  [BARRICADE, ENTRENCH, NMV].forEach(updateBuffTip);
}

export default updateBuffs;
//# sourceMappingURL=updateBuffs-393ce441.js.map
