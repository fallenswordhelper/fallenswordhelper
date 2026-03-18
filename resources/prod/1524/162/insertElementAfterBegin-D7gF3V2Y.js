import { t as e } from "./insertElement-DtUB7uKq.js";
import { t } from "./insertElementBefore-B-ZBDHwR.js";
//#region src/modules/common/insertElementAfterBegin.js
function n(n, r) {
	return n.firstChild instanceof Node ? t(r, n.firstChild) : e(n, r);
}
function r(e, t) {
	if (e instanceof Element) return n(e, t);
}
//#endregion
export { r as t };

//# sourceMappingURL=insertElementAfterBegin-D7gF3V2Y.js.map