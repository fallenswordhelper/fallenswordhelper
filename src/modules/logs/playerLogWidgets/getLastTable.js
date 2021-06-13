import querySelector from '../../common/querySelector';

export default function getLastTable() {
  return querySelector('#pCC > table:last-of-type');
}
