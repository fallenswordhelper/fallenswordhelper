import sendEvent from '../analytics/sendEvent';
import getElementsByClassName from '../common/getElementsByClassName';
import getText from '../common/getText';
import hrefIs from '../common/hrefIs';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import { archiveUrl, updateArchiveUrl } from '../support/constants';

const news = 'News';
const updates = 'Updates';
const typeText = (type) => `View ${type} Page 2`;
const pageTwoLink = (url, type) =>
  `&nbsp;<a href="${url}&page=2">${typeText(type)}</a>`;

const findLink = (url) => querySelectorArray('#pCC a').find(hrefIs(url));

export default function injectHomePageTwoLink() {
  const updateLink = findLink(updateArchiveUrl);
  if (!updateLink) {
    return;
  }
  insertHtmlAfterEnd(updateLink, pageTwoLink(updateArchiveUrl, updates));

  const archiveLink = findLink(archiveUrl);
  insertHtmlAfterEnd(archiveLink, pageTwoLink(archiveUrl, news));

  const newsLeftCol = getElementsByClassName('news_left_column');
  if (newsLeftCol.length !== 1) return;
  onclick(newsLeftCol[0], (e) => {
    if (getText(e.target) === typeText(updates))
      sendEvent(news, typeText(updates));
    if (getText(e.target) === typeText(news)) sendEvent(news, typeText(news));
  });
}
