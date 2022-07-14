import dateUtc from '../common/dateUtc';

export default function parseDateAsTimestamp(textDate) {
  const dateAry = textDate.split(/[: /[]/);
  return dateUtc([
    dateAry[4],
    dateAry[3],
    dateAry[2],
    dateAry[0],
    dateAry[1],
  ]);
}
