import { t as e } from "./insertElement-6ZBKaryO.js";
import { t } from "./insertElementBefore-CaihVZse.js";
// src/modules/common/insertElementAfter.js
function n(n, r) {
	return r.nextSibling instanceof Node ? t(n, r.nextSibling) : e(r.parentNode, n);
}
function r(e, t) {
	if (t instanceof Node && t.parentNode instanceof Node) return n(e, t);
}
export { r as t };

//# sourceMappingURL=insertElementAfter-Bc9YFj76.js.map