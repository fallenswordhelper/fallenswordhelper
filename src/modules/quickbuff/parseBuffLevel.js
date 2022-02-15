import getText from '../common/getText';

export default function parseBuffLevel(el) {
  return Number(getText(el).replace(/[[\]]/g, ''));
}
