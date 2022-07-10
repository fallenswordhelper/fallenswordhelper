import querySelectorArray from '../../common/querySelectorArray';
import setText from '../../dom/setText';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';

export default function changeLabels(logTable) {
  querySelectorArray('a[href*="=trade&"]', logTable)
    .filter((a) => !getCustomUrlParameter(a.href, 'subcmd'))
    .forEach((a) => setText('Trade', a));
  querySelectorArray('a[href*="=createsecure&"]', logTable)
    .forEach((a) => setText('ST', a));
}
