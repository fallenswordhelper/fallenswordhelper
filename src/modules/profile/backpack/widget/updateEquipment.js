import playerId from '../../../common/playerId';
import querySelectorArray from '../../../common/querySelectorArray';
import { itemType } from '../../../support/constants';
import createAnchor from '../../../common/cElement/createAnchor';
import cElement from '../../../common/cElement/cElement';
import setTipped from '../../../common/setTipped';
import replaceChild from '../../../common/replaceChild';

const equipmentIndeces = {
  Gloves: 0,
  Helmet: 1,
  Amulet: 2,
  Weapon: 3,
  Armor: 4,
  Shield: 5,
  Ring: 6,
  Boots: 7,
  Rune: 8,
};

const itemPosition = (item) => equipmentIndeces[itemType[item.t]];

export default function updateEquipment(equipment) {
  const inventoryTableAnchors = querySelectorArray('.inventory-table a');
  equipment.forEach((item) => {
    const oldAnchor = inventoryTableAnchors[itemPosition(item)];
    const newAnchor = createAnchor({
      href: `index.php?cmd=profile&subcmd=unequipitem&inventory_id=${item.a}`,
    });
    const img = cElement('img', {
      className: 'tip-dynamic',
      src: `https://cdn2.fallensword.com/items/${item.b}.gif`,
    });
    setTipped(
      `fetchitem.php?item_id=${item.b}&inv_id=${item.a}&p=${playerId()}&extra=10&t=1`,
      img,
    );
    newAnchor.append(img);
    replaceChild(newAnchor, oldAnchor);
  });
}
