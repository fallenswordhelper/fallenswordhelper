import { bountyUrl } from '../../support/constants';
import createDiv from '../../common/cElement/createDiv';
import createSpan from '../../common/cElement/createSpan';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import setInnerHtml from '../../dom/setInnerHtml';
import setValueJSON from '../../system/setValueJSON';

function buildHtml(list, adjective, rowMap) {
  const bounties = list.bounty;
  if (bounties.length === 0) {
    return `<div class="xsOrange">[No ${adjective.toLowerCase()} bounties]</div>`;
  }
  return bounties.map(rowMap).join('');
}

export default function injectList([getDivFn, pref, getListFn, adjective, rowMap]) {
  const listDiv = getDivFn();
  const list = getListFn();
  setValueJSON(pref, list);
  setInnerHtml('', listDiv);
  const heading = createDiv(
    { innerHTML: `<a class="fshBountyHeader" href="${bountyUrl}">${adjective} Bounties</a> ` },
  );
  const bountyListReset = createSpan({ className: 'xxsLink', textContent: 'Reset' });
  insertElement(heading, bountyListReset);
  insertElement(listDiv, heading);
  insertHtmlBeforeEnd(listDiv, buildHtml(list, adjective, rowMap));
  return bountyListReset;
}
