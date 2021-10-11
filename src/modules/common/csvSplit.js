import trim from './trim';

export default function csvSplit(csv) {
  return csv.split(',').map(trim);
}
