import entries from './entries';
import isObject from './isObject';
import partial from './partial';

function overwriteKey(obj, fn, [key, value]) {
  if (isObject(value) && value !== null) {
    obj[key] = fn(value.constructor(), value);
  } else {
    obj[key] = value;
  }
}

export default function extend(obj, mixins) {
  if (isObject(mixins)) {
    entries(mixins).forEach(partial(overwriteKey, obj, extend));
  }
  return obj;
}
