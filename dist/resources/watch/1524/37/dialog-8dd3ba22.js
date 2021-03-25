import { d as dialogMsg } from './dialogMsg-f2f50c63.js';

function dialog(data) {
  if (data.r !== 0) {
    dialogMsg(data.m);
  }
  return data;
}

export { dialog as d };
//# sourceMappingURL=dialog-8dd3ba22.js.map
