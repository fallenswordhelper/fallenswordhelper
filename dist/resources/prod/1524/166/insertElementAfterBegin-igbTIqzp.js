import { t as e } from "./insertElement-6ZBKaryO.js";
import { t } from "./insertElementBefore-CaihVZse.js";
// src/modules/common/insertElementAfterBegin.js
function n(n, r) {
	return n.firstChild instanceof Node ? t(r, n.firstChild) : e(n, r);
}
function r(e, t) {
	if (e instanceof Element) return n(e, t);
}
export { r as t };

//# sourceMappingURL=insertElementAfterBegin-igbTIqzp.js.map