import { ae as months } from './calfSystem-d5c49dc8.js';

function parseDateAsTimestamp(textDate) {
  const dateAry = textDate.split(/[: /[]/);
  return Date.UTC(Number(dateAry[4]), months.indexOf(dateAry[3]),
    Number(dateAry[2]), Number(dateAry[0]), Number(dateAry[1]), 0);
}

export { parseDateAsTimestamp as p };
//# sourceMappingURL=parseDateAsTimestamp-03130772.js.map
