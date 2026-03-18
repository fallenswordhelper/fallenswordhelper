import { t as e } from "./fallback-BaBUEkCV.js";
//#region src/modules/common/xPathEvaluate.js
function t(e, t) {
	return e instanceof Document ? e : t ? t.ownerDocument : document;
}
function n(n, r, i, a) {
	let o = t(i, a), s = e(a, o);
	return o.evaluate(r, s, null, n, null);
}
//#endregion
//#region src/modules/common/xPath.js
function r(e, t, r) {
	return n(XPathResult.ANY_UNORDERED_NODE_TYPE, e, t, r).singleNodeValue;
}
//#endregion
export { r as t };

//# sourceMappingURL=xPath-C7ziTKGg.js.map