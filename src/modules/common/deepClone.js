import extend from './extend';

export default function deepClone(obj) {
  return obj?.constructor && extend(obj.constructor(), obj);
}
