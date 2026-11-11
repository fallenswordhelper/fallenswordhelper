import { t as e } from "./fallback-S8GIlBFf.js";
// src/modules/common/xPathEvaluate.js
function t(e, t) {
	return e instanceof Document ? e : t ? t.ownerDocument : document;
}
function n(n, r, i, a) {
	let o = t(i, a), s = e(a, o);
	return o.evaluate(r, s, null, n, null);
}
// src/modules/common/xPath.js
function r(e, t, r) {
	return n(XPathResult.ANY_UNORDERED_NODE_TYPE, e, t, r).singleNodeValue;
}
export { r as t };

//# sourceMappingURL=xPath-op5z6uT2.js.map