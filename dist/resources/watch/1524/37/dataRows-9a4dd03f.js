import { N as arrayFrom } from './calfSystem-6840a38e.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-9a4dd03f.js.map
