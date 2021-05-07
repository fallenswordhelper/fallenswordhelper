import { N as arrayFrom } from './calfSystem-476ab75d.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-af1deb3a.js.map
