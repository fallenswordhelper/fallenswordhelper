import isArray from '../../../common/isArray';

function hasTitan(el) {
  return el.type === 0;
}

export default function titanKs() {
  const { dynamic } = GameData.realm();
  return isArray(dynamic) && dynamic.some(hasTitan);
}
