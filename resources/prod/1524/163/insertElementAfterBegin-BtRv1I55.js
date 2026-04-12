import { t as e } from "./insertElement-C_6uFPNr.js";
import { t } from "./insertElementBefore-Bwz7Hji8.js";
//#region src/modules/common/insertElementAfterBegin.js
function n(n, r) {
	return n.firstChild instanceof Node ? t(r, n.firstChild) : e(n, r);
}
function r(e, t) {
	if (e instanceof Element) return n(e, t);
}
//#endregion
export { r as t };

//# sourceMappingURL=insertElementAfterBegin-BtRv1I55.js.map