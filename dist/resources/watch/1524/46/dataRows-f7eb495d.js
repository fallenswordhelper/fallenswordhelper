import { ag as arrayFrom } from './calfSystem-86663d02.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-f7eb495d.js.map
