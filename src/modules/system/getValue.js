import isUndefined from '../common/isUndefined';
import calf from '../support/calf';
import { GMSTORAGE_PATH } from '../support/constants';
import defaults from '../support/dataObj.json';

const reviver = [
  ['S]', (value) => value.slice(2)],
  ['N]', (value) => parseInt(value.slice(2), 10)],
  ['B]', (value) => value.slice(2) === 'true'],
];

function retrieve(value) {
  const test = reviver.find((el) => value.startsWith(el[0]));
  if (test) { return test[1](value); }
  return value;
}

function fshGetValue(name, defValue) {
  const value = window.localStorage.getItem(GMSTORAGE_PATH + name);
  if (value === null || isUndefined(value)) { return defValue; }
  return retrieve(value);
}

export default function getValue(name) {
  if (calf.userIsDev && isUndefined(defaults[name])) { //  No default setting available
    // eslint-disable-next-line no-console
    console.log('No default setting available', name, defaults[name]); // skipcq: JS-0002
  }
  return fshGetValue(name, defaults[name]);
}
