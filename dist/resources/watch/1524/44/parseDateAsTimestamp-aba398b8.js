import { ad as months } from './calfSystem-23094c64.js';

function parseDateAsTimestamp(textDate) {
  const dateAry = textDate.split(/[: /[]/);
  return Date.UTC(Number(dateAry[4]), months.indexOf(dateAry[3]),
    Number(dateAry[2]), Number(dateAry[0]), Number(dateAry[1]), 0);
}

export { parseDateAsTimestamp as p };
//# sourceMappingURL=parseDateAsTimestamp-aba398b8.js.map
