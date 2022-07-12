import './fshTabSet.css';
import createDiv from '../../common/cElement/createDiv';
import createInput from '../../common/cElement/createInput';
import createLabel from '../../common/cElement/createLabel';
import createLi from '../../common/cElement/createLi';
import createUl from '../../common/cElement/createUl';
import insertElement from '../../common/insertElement';
import once from '../../common/once';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import { publish } from '../../support/pubsub';

const toggleId = (groupName, i) => groupName + String(i);

function makeRadio(groupName, _e, i) {
  return createInput({
    checked: i === 0,
    id: toggleId(groupName, i),
    name: groupName,
    type: 'radio',
  });
}

function makeListItem(groupName, thisDivs, e, i) {
  const thisLi = createLi({ className: 'ui-state-default ui-corner-top' });
  insertElement(thisLi, createLabel({
    htmlFor: toggleId(groupName, i),
    innerHTML: e,
  }));
  if (i !== 0) {
    once(thisLi, 'click', () => {
      publish(toggleId(groupName, i), thisDivs[i]);
    });
  }
  return thisLi;
}

function makeUl(tabs, groupName, thisDivs) {
  const thisUl = createUl({
    className: 'ui-tabs-nav ui-helper-reset ui-helper-clearfix '
      + 'ui-widget-header ui-corner-all',
  });
  const thisItems = tabs.map(partial(makeListItem, groupName, thisDivs));
  thisItems.forEach(partial(insertElement, thisUl));
  return thisUl;
}

const makeDiv = () => createDiv({ className: 'ui-tabs-panel ui-corner-bottom' });

function appendRadios(tabs, groupName, appendToTabSet) {
  const thisRadios = tabs.map(partial(makeRadio, groupName));
  thisRadios.forEach(appendToTabSet);
}

function appendList(tabs, groupName, thisTabSet, thisDivs) {
  const thisList = makeUl(tabs, groupName, thisDivs);
  publish(`${groupName}-header`, thisList);
  insertElement(thisTabSet, thisList);
}

function makeTabSet(tabs, groupName) {
  const thisTabSet = createDiv({ className: 'fshTabSet ui-tabs ui-widget-content ui-corner-all' });
  const appendToTabSet = partial(insertElement, thisTabSet);
  appendRadios(tabs, groupName, appendToTabSet);
  const thisDivs = tabs.map(makeDiv);
  publish(toggleId(groupName, 0), thisDivs[0]);
  appendList(tabs, groupName, thisTabSet, thisDivs);
  thisDivs.forEach(appendToTabSet);
  return thisTabSet;
}

export default function fshTabSet(container, tabs, groupName) {
  setInnerHtml('', container);
  insertElement(container, makeTabSet(tabs, groupName));
}
