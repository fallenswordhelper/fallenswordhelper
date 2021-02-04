import { M as arrayFrom } from './calfSystem-cc2b30b5.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-f8ab85cf.js.map
