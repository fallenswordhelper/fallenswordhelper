import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';

function parseBuffPackageElement(tr) {
  const id = querySelector('img', tr).src.match(/([0-9]+)\.png$/)[1];
  const level = querySelector('td:nth-child(2)', tr).innerText.match(/\[([0-9]+)\]$/)[1];
  return { id: Number(id), level: Number(level) };
}

function parseBuffCost(tr) {
  const costTds = querySelectorArray('td', tr.children[1]);
  const cost = Number(costTds[0].innerText.replace(',', ''));
  if (costTds[1].firstChild.alt === 'Fallen Sword Points') {
    return { points: cost };
  }
  return { gold: cost };
}

function parseBuffPackage(tr) {
  const id = tr.querySelector('input[value=Edit]')
    .attributes
    .getNamedItem('onclick')
    .nodeValue
    .match(/id=([0-9]+)/)[1];

  const buffPackage = {
    id,
    name: tr.children[0].innerText,
    casts: Number(tr.children[5].innerText),
    active: tr.children[3].innerText === 'Yes',
    ...parseBuffCost(tr),
  };

  buffPackage.buffs = querySelectorArray('tr', tr.children[2])
    .map(parseBuffPackageElement);

  return buffPackage;
}

export default async function buffMarketManage() {
  const doc = await indexAjaxDoc({ cmd: 'buffmarket', subcmd: 'manage' });
  if (!doc) return { s: false };

  const packageTrs = querySelectorArray('#buff-search > tbody > tr:nth-child(2n)', doc);
  const buffPackages = packageTrs.map(parseBuffPackage);

  return { s: true, r: buffPackages };
}
