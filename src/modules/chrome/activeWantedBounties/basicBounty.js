import getText from '../../common/getText';
import querySelector from '../../common/querySelector';

function getTarget(firstCell) {
  if (firstCell.children[0].tagName === 'A') { return firstCell.children[0]; }
  return firstCell.children[0].children[0];
}

function rewardType(theCells) {
  return querySelector('img', theCells[2]).title;
}

export default function basicBounty(theCells) {
  const targetData = getTarget(theCells[0]);
  return {
    target: getText(targetData),
    link: targetData.href,
    lvl: getText(targetData.nextSibling).replace(/[[|\]]/g, ''), // Text Node
    reward: getText(theCells[2]),
    rewardType: rewardType(theCells),
    xpLoss: getText(theCells[3]),
    posted: getText(theCells[4]),
  };
}
