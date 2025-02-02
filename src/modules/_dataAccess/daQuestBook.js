import indexAjaxDoc from '../ajax/indexAjaxDoc';
import view from '../app/questbook/view';
import all from '../common/all';
import closestTr from '../common/closestTr';
import getTextTrim from '../common/getTextTrim';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import $dataAccess from './$dataAccess';

const getSelect = (doc) => querySelector('select[name="page"]', doc);
const getOptions = (doc) => querySelectorArray('option', getSelect(doc));
const getOptionValues = (doc) => getOptions(doc).map((o) => o.value);

function getQuestbookPage(type, mode, page) {
  return indexAjaxDoc({
    cmd: 'questbook',
    type,
    mode,
    page,
  });
}

function questFromLink(type, a) {
  const tr = closestTr(a);
  const percBar = tr.cells[3].children[0];
  const maxStage = percBar.children.length - 2;
  return {
    id: Number(a.href.split('=').at(-1)),
    name: a.textContent,
    min_level: Number(getTextTrim(tr.cells[1])),
    realm: { name: getTextTrim(tr.cells[2]) },
    current_stage: Math.ceil(
      maxStage * (parseInt(percBar.children[0].style.width, 10) / 100),
    ),
    max_stage: maxStage,
    seasonal: type === 1,
  };
}

function getQuestProps(type, doc) {
  const questLinks = querySelectorArray('a[href*="=viewquest&"]', doc);
  const questProps = questLinks.map((a) => questFromLink(type, a));
  return questProps;
}

async function getQuests([type, mode]) {
  const doc = await getQuestbookPage(type, mode, 0);
  if (!doc) return { s: false };
  const pages = getOptionValues(doc);
  const docs = await all([
    doc,
    ...pages.slice(1).map(partial(getQuestbookPage, type, mode)),
  ]);
  return docs.filter((dc) => dc).map((dc) => getQuestProps(type, dc));
}

// incomplete
async function viewQuests() {
  const questbook = await all(
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ].map(getQuests),
  );
  return { r: questbook.flat(2), s: true };
}

export default function daQuestBook() {
  return $dataAccess(view, viewQuests);
}
