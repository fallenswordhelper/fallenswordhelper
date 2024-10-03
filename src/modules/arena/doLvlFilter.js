import { lvlTest, playerLvlTest } from '../common/lvlTests';
import intValue from '../system/intValue';
import { getOpts } from './setOpts';

function hazOpts(data) {
  const min = getOpts().minLvl;
  const max = getOpts().maxLvl;
  const level = intValue(data[7]);
  return lvlTest(playerLvlTest, level, min, max);
}

function lvlFilter(_settings, data) {
  if (getOpts()) {
    return hazOpts(data);
  }
  return true;
}

function specFilter(_settings, _searchData, _index, rowData) {
  const dev = 0;
  if (defineUserIsDev && dev) {
    return (
      rowData[4]['@data-order'] === '0' && rowData[6]['@data-order'] === '0'
    );
  }
  return true;
}

export default function doLvlFilter() {
  $.fn.dataTable.ext.search.push(lvlFilter);
  $.fn.dataTable.ext.search.push(specFilter);
}
