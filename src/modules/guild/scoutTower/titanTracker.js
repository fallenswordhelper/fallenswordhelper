import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import getText from '../../common/getText';
import trimTitanName from '../../common/trimTitanName';
import uniq from '../../common/uniq';
import { now } from '../../support/now';
import { get, set } from '../../system/idb';
import parseDateAsTimestamp from '../../system/parseDateAsTimestamp';
import TitanTracker from './TitanTracker.svelte';

function startTracker(parentTable, theTitans, titanRows) {
  return new TitanTracker({
    anchor: parentTable.rows[5],
    props: { theTitans, titanRows },
    target: parentTable.children[0],
  });
}

const getCoolTime = (cooldown) => (cooldown.includes('until')
  ? parseDateAsTimestamp(cooldown.replace('Cooldown until: ', ''))
  : 0);

function dataObj(aRow) {
  const cooldownText = getText(aRow.nextElementSibling.cells[0]);
  return {
    cooldownText,
    coolTime: getCoolTime(cooldownText),
    seen: 'yes',
  };
}

const makeEntry = ({ titanName, tr }) => [titanName, dataObj(tr)];

function remainingTitans(oldTitans, visibleTitans) {
  return fromEntries(
    entries(oldTitans)
      .map(([n, o]) => [trimTitanName(n), o])
      .filter(([n]) => !visibleTitans[n])
      .filter(([, d]) => d.coolTime > now())
      .map(([n, d]) => [n, { ...d, seen: 'no' }]),
  );
}

function getNewTitans(oldTitans, titanRows) {
  const visibleTitans = fromEntries(uniq(titanRows, 'titanName').map(makeEntry));
  return {
    ...visibleTitans,
    ...oldTitans && remainingTitans(oldTitans, visibleTitans),
  };
}

export default async function titanTracker(titanTables, titanRows) {
  const newTitans = getNewTitans(await get('fsh_titans'), titanRows);
  if (titanTables[0].rows.length > 5) startTracker(titanTables[0], newTitans, titanRows);
  set('fsh_titans', newTitans);
}
