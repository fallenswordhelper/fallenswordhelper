import { months } from '../support/constants';

export default function parseDateAsTimestamp(textDate) {
  const dateAry = textDate.split(/[: /[]/);
  return Date.UTC(
    Number(dateAry[4]),
    months.indexOf(dateAry[3]),
    Number(dateAry[2]),
    Number(dateAry[0]),
    Number(dateAry[1]),
    0,
  );
}
