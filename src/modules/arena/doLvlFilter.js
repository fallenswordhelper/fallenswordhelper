import { lvlTest, playerLvlTest } from '../common/lvlTests';
import calf from '../support/calf';
import intValue from '../system/intValue';
import { getOpts } from './setOpts';

function hazOpts(data) {
  const min = getOpts().minLvl;
  const max = getOpts().maxLvl;
  const level = intValue(data[7]);
  return lvlTest(playerLvlTest, level, min, max);
}

function lvlFilter(_settings, data) {
  if (getOpts()) { return hazOpts(data); }
  return true;
}

function specFilter(_settings, _searchData, _index, rowData) {
  const test = 0;
  if (test) {
    return rowData[4]['@data-order'] === '0' && rowData[6]['@data-order'] === '0';
  }
  return true;
}

export default function doLvlFilter() {
  $.fn.dataTable.ext.search.push(lvlFilter);
  if (calf.userIsDev) { //  specFilter
    $.fn.dataTable.ext.search.push(specFilter);
  }
}
