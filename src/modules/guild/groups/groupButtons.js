import indexAjaxData from '../../ajax/indexAjaxData';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import csvSplit from '../../common/csvSplit';
import getText from '../../common/getText';
import hideElement from '../../common/hideElement';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import setInnerHtml from '../../dom/setInnerHtml';
import calf from '../../support/calf';
import { defJoinallgroupsundersize } from '../../support/constants';
import addButton from './addButton';
import fetchGroupStatsButton from './fetchGroupStatsButton';

function filterMercs(e) { return !e.includes('#000099'); }

function joined(container) {
  setInnerHtml(
    '<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',
    container,
  );
}

function joinGroup(groupID, container) {
  indexAjaxData({
    cmd: 'guild',
    subcmd: 'groups',
    subcmd2: 'join',
    group_id: groupID,
  }).then(partial(joined, container));
}

function doJoinUnderSize(joinButton) {
  const memList = joinButton.parentNode.parentNode.parentNode.cells[1];
  const memListArrayWithMercs = csvSplit(getText(memList));
  const memListArrayWithoutMercs = memListArrayWithMercs
    .filter(filterMercs);
  if (memListArrayWithoutMercs.length < calf.maxGroupSizeToJoin) {
    const container = createDiv({
      className: 'group-action-link fshRelative',
      innerHTML: '<span class="fshSpinner fshSpinner12"></span>',
      style: { height: '19px', width: '19px' },
    });
    joinButton.parentNode.replaceChild(container, joinButton);
    const groupID = regExpFirstCapture(/confirmJoin\((?<id>\d+)\)/, joinButton.href);
    joinGroup(groupID, container);
  }
}

function joinAllGroupsUnderSize() {
  sendEvent('groups', 'joinAllGroupsUnderSize');
  querySelectorArray('#pCC a[href*="confirmJoin"]').forEach(doJoinUnderSize);
}

function joinUnderButton(buttonRow) {
  const joinUnder = addButton(buttonRow, `Join All Groups < ${calf.maxGroupSizeToJoin} Members`);
  onclick(joinUnder, joinAllGroupsUnderSize);
}

export default function groupButtons(joinAll) {
  const buttonRow = joinAll.parentNode;
  if (calf.enableMaxGroupSizeToJoin) {
    hideElement(joinAll);
    joinUnderButton(buttonRow);
  }

  fetchGroupStatsButton(buttonRow);

  if (calf.subcmd2 === defJoinallgroupsundersize) {
    joinAllGroupsUnderSize();
  }
}
