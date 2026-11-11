import { t as e } from "./devStdOut-D2qFWpUj.js";
import { t } from "./posthog-B9Po5VX8.js";
// src/modules/analytics/sendEvent.js
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
		e("sendEvent", n, s, c);
		return;
	}
	let l = r(n, s), u = o(l, c);
	a[u] || (a[u] = !0, t(l, i(c)));
}
export { s as t };

//# sourceMappingURL=sendEvent-DdWrU3DL.js.map