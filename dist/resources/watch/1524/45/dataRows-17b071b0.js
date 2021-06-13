import { ag as arrayFrom } from './calfSystem-02fd040d.js';

const dataRows = (rows, cols, skip) => arrayFrom(rows)
  .filter((el, i) => el.children.length === cols && i > skip);

export { dataRows as d };
//# sourceMappingURL=dataRows-17b071b0.js.map
