import isBoolean from '../common/isBoolean';
import isNumber from '../common/isNumber';
import isString from '../common/isString';
import { GMSTORAGE_PATH } from '../support/constants';

function storItem(name, type, value) {
  if (window.Modernizr && window.Modernizr.localstorage) {
    window.localStorage.setItem(GMSTORAGE_PATH + name, type + value);
  }
}

const cold = [
  [isString, (name, value) => { storItem(name, 'S]', value); }],
  [
    isNumber,
    (name, value) => {
      if (value.toString().indexOf('.') < 0) { storItem(name, 'N]', value); }
    },
  ],
  [isBoolean, (name, value) => { storItem(name, 'B]', value); }],
];

export default function setValue(name, value) {
  const storType = cold.find((pair) => pair[0](value));
  if (storType) storType[1](name, value);
}
