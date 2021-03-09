import { M as arrayFrom } from './calfSystem-d1de1997.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-4df9bbda.js.map
