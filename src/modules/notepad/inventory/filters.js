import { lvlTest, playerLvlTest } from '../../common/lvlTests';
import intValue from '../../system/intValue';
import { getOptions } from './options';

let itemLvlTest = 0;

function doLvlFilter(_settings, data) {
  return lvlTest(itemLvlTest, intValue(data[1]), getOptions().fshMinLvl, getOptions().fshMaxLvl);
}

export function lvlFilter() { // jQuery
  itemLvlTest = [(_min, _max, level) => level === 0, ...playerLvlTest];
  /* Custom filtering function which will search
  data in column 2 between two values */
  $.fn.dataTable.ext.search.push(doLvlFilter);
}

export function typeFilter() { // jQuery
  $.fn.dataTable.ext.search.push(
    (_settings, _row, _index, data) => !getOptions().checkedElements
        || getOptions().checkedElements[data.type],
  );
}

function testSetId(data) {
  return getOptions().checkedElements['-1']
    && data.stats && data.stats.set_id !== -1;
}

export function setFilter() { // jQuery
  $.fn.dataTable.ext.search.push(
    (_settings, _row, _index, data) => !getOptions().checkedElements
        || !getOptions().checkedElements['-1']
        || testSetId(data),
  );
}

export function rarityFilter() { // jQuery
  $.fn.dataTable.ext.search.push(
    (_settings, _row, _index, data) => {
      const rarity = (parseInt(data.rarity, 10) + 100).toString();
      return !getOptions().checkedElements
        || getOptions().checkedElements[rarity];
    },
  );
}
