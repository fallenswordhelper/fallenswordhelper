import querySelectorArray from '../../common/querySelectorArray';
import setText from '../../dom/setText';

export default function changeLabels(logTable) {
  querySelectorArray('a[href*="=trade&"]', logTable)
    .forEach((a) => setText('Trade', a));
  querySelectorArray('a[href*="=createsecure&"]', logTable)
    .forEach((a) => setText('ST', a));
}
