import { N as arrayFrom } from './calfSystem-d5c49dc8.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-08660e1c.js.map
