import calf from '../../../support/calf';

export default function playerName(f) {
  if (!calf.membrList[f]) {
    return '???';
  }
  return calf.membrList[f].username;
}
