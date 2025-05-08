import arrayFromRadioNodeList from '../../../common/arrayFromRadioNodeList';
import getCheckboxes from './getCheckboxes';

export default function getCheckboxesArray() {
  const checkboxes = getCheckboxes();
  if (!checkboxes) { return []; }
  return arrayFromRadioNodeList(checkboxes);
}
