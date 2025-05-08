import getBuff from './getBuff';

export default function getBuffId(buff) {
  const thisBuff = getBuff(buff);
  if (thisBuff) { return thisBuff.id; }
  return -1;
}
