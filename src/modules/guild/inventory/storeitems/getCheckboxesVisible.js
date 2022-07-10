import closestTr from '../../../common/closestTr';
import hasClass from '../../../common/hasClass';
import getCheckboxesArray from './getCheckboxesArray';

export default function getCheckboxesVisible() {
  return getCheckboxesArray()
    .filter((cb) => !hasClass('fshHide', closestTr(cb)));
}
