import './simpleCheckbox.css';
import fallback from '../system/fallback';
import getValue from '../system/getValue';
import isChecked from '../system/isChecked';
import networkIcon from './networkIcon';
import mySimpleCheckboxes from './simple.json';

export function helpLink(title, text) {
  return '&nbsp;[&nbsp;<span class="fshLink tip-static" data-tipped="'
    + `<span class='fshHelpTitle'>${title}</span><br><br>${
      text}">?</span>&nbsp;]`;
}

function hasNetwork(network) {
  if (network) { return networkIcon; }
  return '';
}

const stability = (unstable) => (
  unstable
    ? '<span class="unstable" data-tooltip="Warning: Causes page instability"></span>'
    : ''
);

export function justLabel(name) {
  const {
    helpText,
    helpTitle,
    network,
    title,
    unstable,
  } = mySimpleCheckboxes[name];
  return `${hasNetwork(network)}${stability(unstable)}<label class="fshNoWrap" for="${name}">${
    fallback(title, helpTitle)}${helpLink(helpTitle, helpText)}:</label>`;
}

function isValueChecked(pref) {
  return isChecked(getValue(pref));
}

export function justCheckbox(name) {
  return `<input id="${name}" name="${name}" class="fsh-va-text-bottom" type="checkbox"${isValueChecked(name)}>`;
}

export function simpleCheckboxHtml(name) {
  return justLabel(name) + justCheckbox(name);
}

export function simpleCheckbox(name) {
  return `<tr><td class="fshRight">${justLabel(name)}</td><td>${justCheckbox(name)}</td></tr>`;
}
