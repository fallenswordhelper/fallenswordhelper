import createDocument from '../system/createDocument';
import groupViewStats from './groupViewStats';
import retryAjax from './retryAjax';

function parseGroupStats(html) {
  var doc = createDocument(html);
  return groupViewStats(doc);
}

export default function getGroupStats(viewStats) {
  return retryAjax(viewStats).then(parseGroupStats);
}