import partial from '../../../common/partial';

function thisBuff(name, e) {
  return e.name === name;
}

export default function getBuff(name) {
  const { buffs } = GameData.player();
  if (buffs) {
    return buffs.find(partial(thisBuff, name));
  }
}
