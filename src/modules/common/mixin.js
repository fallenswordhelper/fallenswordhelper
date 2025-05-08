import entries from './entries';
import isObject from './isObject';
import partial from './partial';

function mutate(fn, obj, [key, value]) {
  if (isObject(value) && value !== null) {
    fn(obj[key], value);
  } else {
    obj[key] = value;
  }
}

export default function mixin(obj, mixins) {
  entries(mixins).forEach(partial(mutate, mixin, obj));
}
