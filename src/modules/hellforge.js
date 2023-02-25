import inventory from './_dataAccess/export/inventory';
import createStyle from './common/cElement/createStyle';
import getElementById from './common/getElementById';
import insertElement from './common/insertElement';
import { pcc } from './support/layout';

const isPerfect = ({ craft }) => craft === 'Perfect';
const notFf = ({ forge }) => forge !== 5;
const itemStyle = ({ inv_id: invId }) => `div[id$="-highlight-${invId}"] {
  background-color: rgba(255, 255, 0, 0.3);
}`;
const styleSheet = (items) => createStyle(
  items.filter(isPerfect).filter(notFf).map(itemStyle).join('\n'),
);

async function highlightPerf() {
  const json = await inventory();
  if (json?.items) insertElement(pcc(), styleSheet(json.items));
}

export default function hellforge() {
  const hellforgeItems = getElementById('hellforge-items');
  if (hellforgeItems) highlightPerf();
}
