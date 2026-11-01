import indexAjaxDoc from '../ajax/indexAjaxDoc';
import view from '../app/tempinv/view';
import all from '../common/all';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';
import $dataAccess from './$dataAccess';

const serverError = { e: { code: 0, message: 'Server Error' }, s: false };

// "Page 1 of 2 (111 items)"
const pageCount = (doc) =>
  Number(
    regExpFirstCapture(/Page \d+ of (?<pages>\d+)/, doc.body.textContent),
  ) || 1;

const toItem = (img) => ({
  a: Number(img.id.replace('temp-inv-img-', '')),
  b: Number(regExpFirstCapture(/item_id=(?<id>\d+)/, img.dataset.tipped)),
});

const pageItems = (doc) =>
  querySelectorArray('[id^="temp-inv-img-"]', doc).map(toItem);

// The page shows 100 items at a time. Its second page is page=1.
async function mailboxView() {
  const first = await indexAjaxDoc({ cmd: 'tempinv' });
  if (!first) return serverError;
  const pages = Array.from({ length: pageCount(first) - 1 }, (_, i) => i + 1);
  const rest = await all(
    pages.map((page) => indexAjaxDoc({ cmd: 'tempinv', page })),
  );
  if (rest.some((doc) => !doc)) return serverError;
  return { r: [first, ...rest].flatMap(pageItems), s: true };
}

export default function daMailboxView() {
  return $dataAccess(view, mailboxView);
}
