import sendEvent from '../analytics/sendEvent';
import createSpan from '../common/cElement/createSpan';
import getElementById from '../common/getElementById';
import hasClass from '../common/hasClass';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import trim from '../common/trim';
import setInnerHtml from '../dom/setInnerHtml';
import getValue from '../system/getValue';
import setValue from '../system/setValue';

function makeButton(linkto) {
  return createSpan({
    className: 'fshLink',
    dataset: { linkto, tooltip: 'Toggle Section' },
    textContent: 'X',
  });
}

function wrapper(btn) {
  const wrap = createSpan({ className: 'fshNoWrap', innerHTML: '[&nbsp;' });
  insertElement(wrap, btn);
  insertHtmlBeforeEnd(wrap, '&nbsp;]');
  return wrap;
}

function toggleVisibilty(evt) {
  const anItemId = evt.target.dataset.linkto;
  sendEvent('guildManage', 'toggleVisibilty', anItemId);
  const anItem = getElementById(anItemId);
  if (!anItem) return;
  const currentVisibility = hasClass('fshHide', anItem);
  anItem.classList.toggle('fshHide');
  if (currentVisibility) {
    setValue(anItemId, '');
  } else {
    setValue(anItemId, 'ON');
  }
}

function thisToggle(inject, panel, linkto) {
  const thisButton = makeButton(linkto);
  insertElement(inject, wrapper(thisButton));
  // eslint-disable-next-line no-param-reassign
  panel.id = linkto;
  if (getValue(linkto)) {
    hideElement(panel);
  }
  onclick(thisButton, toggleVisibilty);
}

export function logoToggle(leftHandSideColumnTable) {
  thisToggle(
    leftHandSideColumnTable.rows[0].cells[1].children[0],
    leftHandSideColumnTable.rows[2].cells[0].children[0],
    'guildLogoControl',
  );
}

export function statToggle(leftHandSideColumnTable) {
  const leaveGuildCell = leftHandSideColumnTable.rows[4].cells[1].children[0];
  setInnerHtml(trim(leaveGuildCell.innerHTML), leaveGuildCell);
  thisToggle(
    leaveGuildCell,
    leftHandSideColumnTable.rows[6].cells[0].children[0],
    'statisticsControl',
  );
}

export function structureToggle(leftHandSideColumnTable) {
  const structureHeader =
    leftHandSideColumnTable.rows[15]?.cells[1].children[0];
  if (structureHeader) {
    thisToggle(
      structureHeader,
      leftHandSideColumnTable.rows[17].cells[0].children[0],
      'guildStructureControl',
    );
  }
}
