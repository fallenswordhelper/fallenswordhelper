import isArray from '../common/isArray';

export default function backpackOk(appInv) {
  return isArray(appInv?.folders) && isArray(appInv?.items);
}
