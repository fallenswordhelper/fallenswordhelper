import isNull from '../common/isNull';
import isUndefined from '../common/isUndefined';
import { GMSTORAGE_PATH } from '../support/constants';
import defaults from '../support/dataObj.json';
import stdout from '../support/stdout';

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
  if (isNull(value) || isUndefined(value)) { return defValue; }
  return retrieve(value);
}

export default function getValue(name) {
  if (defineUserIsDev && !name.startsWith('screenview__') && isUndefined(defaults[name])) {
    stdout('No default setting available', name, defaults[name]);
  }
  return fshGetValue(name, defaults[name]);
}
