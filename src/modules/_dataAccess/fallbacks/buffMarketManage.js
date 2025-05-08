import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';

function parseBuffPackageElement(tr) {
  const id = querySelector('img', tr).src.match(/(\d+)\.png/)[1];
  const level = querySelector('td:nth-child(2)', tr).innerText.match(/\[(\d+)\]/)[1];
  return { id: Number(id), level: Number(level) };
}

function parseBuffPackage(tr) {
  const id = tr.querySelector('input[value=Edit]')
    .attributes
    .getNamedItem('onclick')
    .nodeValue
    .match(/id=([0-9]+)/)[1];
  const name = tr.children[0].innerText;
  const casts = Number(tr.children[5].innerText);
  const active = tr.children[3].innerText === 'Yes';

  const buffPackage = {
    id,
    name,
    casts,
    active,
  };

  const costTds = querySelectorArray('td', tr.children[1]);
  const cost = Number(costTds[0].innerText.replace(',', ''));
  if (costTds[1].firstChild.alt === 'Fallen Sword Points') {
    buffPackage.points = cost;
  } else {
    buffPackage.gold = cost;
  }

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
