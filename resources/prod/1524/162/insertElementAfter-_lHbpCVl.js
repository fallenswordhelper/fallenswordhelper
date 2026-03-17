import { t as e } from "./insertElement-DtUB7uKq.js";
import { t } from "./insertElementBefore-B-ZBDHwR.js";
//#region src/modules/common/insertElementAfter.js
function n(n, r) {
	return r.nextSibling instanceof Node ? t(n, r.nextSibling) : e(r.parentNode, n);
}
function r(e, t) {
	if (t instanceof Node && t.parentNode instanceof Node) return n(e, t);
}
//#endregion
export { r as t };

//# sourceMappingURL=insertElementAfter-_lHbpCVl.js.map