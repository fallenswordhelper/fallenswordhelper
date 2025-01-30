import daJoinAll from '../../_dataAccess/daJoinAll';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import csvSplit from '../../common/csvSplit';
import getText from '../../common/getText';
import hideElement from '../../common/hideElement';
import onclick from '../../common/onclick';
import querySelectorArray from '../../common/querySelectorArray';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import setInnerHtml from '../../dom/setInnerHtml';
import calf from '../../support/calf';
import { defJoinallgroupsundersize } from '../../support/constants';
import addButton from './addButton';
import fetchGroupStatsButton from './fetchGroupStatsButton';

const filterMercs = (e) => !e.includes('#000099');
const underSize = ([, noOfMbrs]) => noOfMbrs < calf.maxGroupSizeToJoin;
const decorate = ([joinButton]) => [
  joinButton,
  createDiv({
    className: 'group-action-link fshRelative',
    innerHTML: '<span class="fshSpinner fshSpinner12"></span>',
    style: { height: '19px', width: '19px' },
  }),
  regExpFirstCapture(/confirmJoin\((?<id>\d+)\)/, joinButton.href),
];

function noOfMembers(joinButton) {
  const memList = joinButton.parentNode.parentNode.parentNode.cells[1];
  const memListArrayWithMercs = csvSplit(getText(memList));
  const memListArrayWithoutMercs = memListArrayWithMercs.filter(filterMercs);
  return [joinButton, memListArrayWithoutMercs.length];
}

function doSpinner([joinButton, container]) {
  joinButton.replaceWith(container);
}

function joined([, container]) {
  setInnerHtml(
    '<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',
    container,
  );
}

async function getGroups() {
  const theseGroups = querySelectorArray('#pCC a[href*="confirmJoin"]')
    .map(noOfMembers)
    .filter(underSize)
    .map(decorate);
  theseGroups.forEach(doSpinner);
  await daJoinAll(theseGroups.map(([, , groupId]) => groupId));
  theseGroups.forEach(joined);
}

function joinAllGroupsUnderSize() {
  sendEvent('groups', 'joinAllGroupsUnderSize');
  getGroups();
}

function joinUnderButton(buttonRow) {
  const joinUnder = addButton(
    buttonRow,
    `Join All Groups < ${calf.maxGroupSizeToJoin} Members`,
  );
  onclick(joinUnder, joinAllGroupsUnderSize);
}

export default function groupButtons(joinAll) {
  const buttonRow = joinAll.parentNode;
  if (calf.enableMaxGroupSizeToJoin) {
    hideElement(joinAll);
    joinUnderButton(buttonRow);
  }

  fetchGroupStatsButton(buttonRow);

  if (calf.subcmd2 === defJoinallgroupsundersize) getGroups();
}
