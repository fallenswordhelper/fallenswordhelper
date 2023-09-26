import daComponents from '../../_dataAccess/daComponents';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import flattenItems from '../../_dataAccess/export/flattenItems';
import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import sendEvent from '../../analytics/sendEvent';
import all from '../../common/all';
import alpha from '../../common/alpha';
import arrayFrom from '../../common/arrayFrom';
import csvSplit from '../../common/csvSplit';
import fromEntries from '../../common/fromEntries';
import getTextTrim from '../../common/getTextTrim';
import isArray from '../../common/isArray';
import querySelector from '../../common/querySelector';
import querySelectorAll from '../../common/querySelectorAll';
import querySelectorArray from '../../common/querySelectorArray';
import toLowerCase from '../../common/toLowerCase';
import uniq from '../../common/uniq';
import getValue from '../../system/getValue';
import { get, set } from '../../system/idb';

let compTally = {};
let invTally = {};
let progressLog = [];
let recipeBook = [];
let sortDirection = 1;

export function getCompTally() {
  return compTally;
}

export function getInvTally() {
  return invTally;
}

function recipeMgrEvent(type) {
  sendEvent('Recipe Manager', type);
}

const getPage = (fid = -1, page = 0) => indexAjaxDoc({ cmd: 'inventing', folder_id: fid, page });
const nameSort = ([, a], [, b]) => sortDirection * alpha(a, b);

export function sortByName() {
  recipeMgrEvent('sort by name');
  recipeBook = recipeBook.slice().sort(nameSort);
  sortDirection *= -1;
}

function addToProgressLog(ary) {
  progressLog = ary.concat(progressLog);
}

const itemInfo = (doc, bgGif) => querySelectorArray(`#pCC td[background*="${bgGif}"]`, doc)
  .map((bg) => [
    bg.children[0].children[0].dataset.tipped.split(/[?&=]/),
    bg.parentNode.nextElementSibling,
  ]).map(([parts, tr]) => [
    parts[2],
    parts[10],
    ...tr ? [Number(getTextTrim(tr).split('/')[1])] : [],
  ]);

async function getParts([id, n, image]) {
  const doc = await indexAjaxDoc({ cmd: 'inventing', subcmd: 'viewrecipe', recipe_id: id });
  addToProgressLog([`Parsing blueprint ${n}...`]);
  if (doc) {
    return [
      id,
      n,
      image,
      itemInfo(doc, '/inventory/2x3.'),
      itemInfo(doc, '/inventory/1x1mini.'),
      ...itemInfo(doc, '/hellforge/2x3.'),
    ];
  }
  return [id, n, image];
}

const makeTally = (byId) => (uid) => [uid, byId.filter((iid) => iid === uid).length];
const buildObj = (invById) => fromEntries(uniq(invById).map(makeTally(invById)));

async function getInv() {
  addToProgressLog(['Updating inventory.']);
  const invJson = await daLoadInventory();
  if (invJson?.s) {
    const invById = flattenItems(invJson.r).map(({ b }) => b);
    invTally = buildObj(invById);
  } else addToProgressLog('No inventory.');
}

async function getComp() {
  addToProgressLog(['Updating components.']);
  const compJson = await daComponents();
  if (isArray(compJson.r)) {
    const compById = compJson.r.map(({ b }) => b);
    compTally = buildObj(compById);
  } else addToProgressLog('No components.');
}

async function getInventory() {
  await all([getInv(), getComp()]);
  progressLog = [];
}

async function parseRecipes(toCheck) {
  recipeBook = await all(toCheck.map(getParts));
  set('fsh_recipeMgr', recipeBook);
  getInventory();
}

async function getFirstPage([href, name]) {
  const fid = href.split('=').at(-1);
  const doc = await getPage(fid);
  addToProgressLog([`Parsing folder "${name}"...`]);
  return [fid, doc];
}

const validFolderResponse = (doc) => doc;
const findRecipes = (doc) => arrayFrom(querySelectorAll('#pCC a[href*="&recipe_id="]', doc));
const recipeValues = (a) => [
  a.href.split('=').at(-1),
  getTextTrim(a),
  a.parentNode.previousElementSibling.children[0].src.split('/').at(-1),
];
const shouldHide = (rName) => (hName) => hName === rName;
const isHidden = (hideNames, rName) => hideNames.some(shouldHide(rName));
const hidden = (hideNames) => ([, rName]) => isHidden(hideNames, rName);
const notHidden = (hideNames) => ([, rName]) => !isHidden(hideNames, rName);
const hiding = (toHide) => toHide.map(([, name]) => `Skipping blueprint "${name}" as it is hidden.`);
const found = (toCheck) => toCheck.map(([, name]) => `Found blueprint "${name}".`);

function parseFolders(folders) {
  const hideNames = csvSplit(getValue('hideRecipeNames'));
  const foundRecipes = folders.filter(validFolderResponse).flatMap(findRecipes).map(recipeValues);
  addToProgressLog(hiding(foundRecipes.filter(hidden(hideNames))));
  const toCheck = foundRecipes.filter(notHidden(hideNames));
  addToProgressLog(found(toCheck));
  parseRecipes(toCheck);
}

const validPageResponse = ([, doc]) => doc;
const getOptions = ([fid, doc]) => [
  fid,
  arrayFrom(querySelector('#pCC select[name="page"]', doc).options)
    .slice(1)
    .map((opt) => opt.value),
];
const folderHasOtherPages = ([, pages]) => pages.length;
const eachPage = ([fid, pages]) => pages.map((page) => [fid, page]);
const getOtherPage = ([fid, page]) => getPage(fid, page);

async function eachFolder(prmAry) {
  const firstPages = await all(prmAry);
  const otherPages = firstPages
    .filter(validPageResponse)
    .map(getOptions)
    .filter(folderHasOtherPages)
    .flatMap(eachPage)
    .map(getOtherPage);
  const otherDocs = await all(otherPages);
  parseFolders(firstPages.map(([, doc]) => doc).concat(otherDocs));
}

const hasQuest = (n) => toLowerCase(n).includes('quest');
const withQuest = ([, n]) => hasQuest(n);
const skipped = (folders) => folders.filter(withQuest)
  .map(([, n]) => `Skipping folder "${n}" as it has the word "quest" in folder name.`);
const withoutQuest = ([, n]) => !hasQuest(n);
const toFolderHref = ([div, name]) => [div.previousElementSibling.children[0].href, name];

function parseUnassigned(unassigned) {
  addToProgressLog(['Parsing folder "Unassigned"...']);
  const otherFolderDivs = querySelectorArray('div[id^="folder_name_"]', unassigned)
    .map((div) => [div, getTextTrim(div)]);
  addToProgressLog(skipped(otherFolderDivs));
  const remainder = otherFolderDivs.filter(withoutQuest).map(toFolderHref).map(getFirstPage);
  eachFolder([['-1', unassigned], ...remainder]);
}

async function refresh() {
  progressLog = ['Parsing inventing screen ...'];
  const unassigned = await getPage();
  if (unassigned) parseUnassigned(unassigned);
  else addToProgressLog(['Server Error.']);
}

export async function init() {
  const rb = await get('fsh_recipeMgr');
  if (!rb) refresh();
  recipeBook = rb;
  getInventory();
}

export function nav() {
  recipeMgrEvent('Navigate to recipe');
}

export function refreshBtn() {
  recipeMgrEvent('refresh button');
  refresh();
}
