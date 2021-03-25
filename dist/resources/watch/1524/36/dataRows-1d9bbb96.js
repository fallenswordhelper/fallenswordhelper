import { N as arrayFrom } from './calfSystem-c08399e5.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-1d9bbb96.js.map
