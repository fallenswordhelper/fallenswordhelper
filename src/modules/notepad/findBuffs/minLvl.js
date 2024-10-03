import getElementById from '../../common/getElementById';

let findBuffsLevel175Only = 0;

export function calcMinLvl() {
  // Legacy
  if (findBuffsLevel175Only) {
    return 500;
  }
  return 1;
}

export function setMinLvl() {
  findBuffsLevel175Only = getElementById('level175').checked;
}
