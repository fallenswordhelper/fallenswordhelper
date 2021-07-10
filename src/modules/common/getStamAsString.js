import getBuff from './getBuff';

export default function getStamAsString(buffCast) {
  const thisBuff = getBuff(buffCast);
  if (thisBuff) { return thisBuff.stam.toString(); }
  return '-';
}
