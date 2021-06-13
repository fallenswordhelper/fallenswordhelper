import { d as dialogMsg } from './dialogMsg-f24b55b1.js';

function dialog(data) {
  if (data.r !== 0) {
    dialogMsg(data.m);
  }
  return data;
}

export { dialog as d };
//# sourceMappingURL=dialog-25c9de65.js.map
