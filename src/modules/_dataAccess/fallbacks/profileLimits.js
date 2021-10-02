import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import querySelectorArray from '../../common/querySelectorArray';
import retryAjax from '../../ajax/retryAjax';

const lastHref = (anchors) => anchors[anchors.length - 1].href;
const getSlots = (doc) => querySelectorArray('td[background*="1x1mini"]', doc).length;

async function calcMax(profileDoc, anchors) {
  if (anchors.length > 1) {
    const lastDoc = createDocument(await retryAjax(lastHref(anchors)));
    return ((anchors.length - 1) * 50) + getSlots(lastDoc);
  }
  return getSlots(profileDoc);
}

// Incomplete
export default async function profileLimits() {
  const profileDoc = createDocument(await indexAjaxData({ cmd: 'profile' }));
  const anchors = querySelectorArray('a[href*="=profile&component_page="]', profileDoc);
  return {
    r: { max_components: await calcMax(profileDoc, anchors) },
    s: true,
  };
}
