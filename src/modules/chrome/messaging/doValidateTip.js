import fallback from '../../system/fallback';
import getElementsByClassName from '../../common/getElementsByClassName';
import getQuickMessageDialog from './getQuickMessageDialog';
import setText from '../../dom/setText';

let validateTips;

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
