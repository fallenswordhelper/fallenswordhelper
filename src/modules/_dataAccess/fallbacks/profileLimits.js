import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import querySelectorArray from '../../common/querySelectorArray';
import retryAjax from '../../ajax/retryAjax';

const lastHref = (anchors) => anchors[anchors.length - 1].href;
const getSlots = (doc) => querySelectorArray('td[background*="1x1mini"]', doc).length;

// Incomplete
export default async function profileLimits() {
  let maxComponents = 0;
  const html = await indexAjaxData({ cmd: 'profile' });
  const doc = createDocument(html);
  const anchors = querySelectorArray('a[href*="=profile&component_page="]', doc);
  let lastDoc;
  if (anchors.length > 1) {
    maxComponents = (anchors.length - 1) * 50;
    const lastHtml = await retryAjax(lastHref(anchors));
    lastDoc = createDocument(lastHtml);
  } else {
    lastDoc = doc;
  }
  maxComponents += getSlots(lastDoc);
  return {
    r: { max_components: maxComponents },
    s: true,
  };
}
