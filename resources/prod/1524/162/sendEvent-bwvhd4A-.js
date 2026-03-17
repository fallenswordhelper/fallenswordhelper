import { t as e } from "./posthog-C2Vh_0Hn.js";
import { t } from "./devStdOut-BnwcHKWA.js";
//#region src/modules/analytics/sendEvent.js
function n(e) {
	return String(e).replaceAll(" ", "_");
}
function r(e, t) {
	let r = n(e);
	return t && (r += `__${n(t)}`), r;
}
function i(e) {
	return e ? { eventLabel: e } : null;
}
var a = {};
function o(e, t) {
	let r = e;
	return t && (r += `__${n(t)}`), r;
}
function s(n, s, c) {
	if (!n) {
		t("sendEvent", n, s, c);
		return;
	}
	let l = r(n, s), u = o(l, c);
	a[u] || (a[u] = !0, e(l, i(c)));
}
//#endregion
export { s as t };

//# sourceMappingURL=sendEvent-bwvhd4A-.js.map