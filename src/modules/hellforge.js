import daLoadInventory from './_dataAccess/daLoadInventory';
import createStyle from './common/cElement/createStyle';
import getElementById from './common/getElementById';
import insertElement from './common/insertElement';
import { pcc } from './support/layout';

const itemStyle = ({ a }) => `div[id$="-highlight-${a}"] {
  background-color: rgba(255, 255, 0, 0.3);
}`;

async function highlightPerf() {
  const data = await daLoadInventory();
  if (!data?.s) return;
  const invItems = data.r.inventories
    .flatMap(({ items }) => items)
    .filter(({ hf }) => hf !== 5)
    .filter(({ cf }) => cf === 0)
    .map(itemStyle)
    .join('\n');
  insertElement(pcc(), createStyle(invItems));
}

export default function hellforge() {
  const hellforgeItems = getElementById('hellforge-items');
  if (hellforgeItems) highlightPerf();
}
