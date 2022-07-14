import getElementsByClassName from '../../common/getElementsByClassName';
import setText from '../../dom/setText';
import fallback from '../../system/fallback';
import getQuickMessageDialog from './getQuickMessageDialog';

let validateTips = 0;

function getValidateTips() {
  if (!validateTips) {
    const nodes = getElementsByClassName('validateTips', getQuickMessageDialog());
    if (nodes.length === 1) {
      [validateTips] = nodes;
    }
  }
  return validateTips;
}

export default function doValidateTip(text) {
  if (getValidateTips()) {
    setText(fallback(text, ''), validateTips);
  }
}
