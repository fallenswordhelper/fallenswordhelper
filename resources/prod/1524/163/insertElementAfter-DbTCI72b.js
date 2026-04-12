import { t as e } from "./insertElement-C_6uFPNr.js";
import { t } from "./insertElementBefore-Bwz7Hji8.js";
//#region src/modules/common/insertElementAfter.js
function n(n, r) {
	return r.nextSibling instanceof Node ? t(n, r.nextSibling) : e(r.parentNode, n);
}
function r(e, t) {
	if (t instanceof Node && t.parentNode instanceof Node) return n(e, t);
}
//#endregion
export { r as t };

//# sourceMappingURL=insertElementAfter-DbTCI72b.js.map