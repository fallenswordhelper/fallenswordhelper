import { f as insertHtmlBeforeEnd } from './calfSystem-d1de1997.js';

function outputResult(result, handle) {
  insertHtmlBeforeEnd(handle,
    `<li class="fshNbrList">${result}</li>`);
}

let lastMsg;

function notSeenErrorMessage(json) {
  return !json.s && lastMsg !== json.e.message;
}

function jsonFail(json, handle) {
  if (notSeenErrorMessage(json)) {
    lastMsg = json.e.message;
    outputResult(json.e.message, handle);
  }
  if (!json.s) { return true; }
}

export { jsonFail as j, outputResult as o };
//# sourceMappingURL=jsonFail-e7f70f88.js.map
