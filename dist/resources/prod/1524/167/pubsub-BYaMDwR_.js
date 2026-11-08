import { t as e } from "./partial-Bo20zBni.js";
import { t } from "./devStdOut-D2qFWpUj.js";
import { t as n } from "./task-C5UKL2RH.js";
// src/modules/support/pubsub.js
var r = {}, i = -1;
function a(e, t) {
	n(3, t.func, [e]);
}
function o(n, i) {
	if (t("publish", n), r[n]) return r[n].forEach(e(a, i)), !0;
}
function s(e, t) {
	r[e] || (r[e] = []), i += 1;
	let n = i.toString();
	return r[e].push({
		token: n,
		func: t
	}), n;
}
function c(e, t) {
	return r[e] ? r[e][0].token : s(e, t);
}
export { s as n, c as r, o as t };

//# sourceMappingURL=pubsub-BYaMDwR_.js.map