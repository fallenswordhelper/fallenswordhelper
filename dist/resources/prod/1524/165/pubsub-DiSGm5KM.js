import { t as e } from "./devStdOut-D2qFWpUj.js";
import { t } from "./task-kqK4S00s.js";
import { t as n } from "./partial-Bo20zBni.js";
// src/modules/support/pubsub.js
var r = {}, i = -1;
function a(e, n) {
	t(3, n.func, [e]);
}
function o(t, i) {
	if (e("publish", t), r[t]) return r[t].forEach(n(a, i)), !0;
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

//# sourceMappingURL=pubsub-DiSGm5KM.js.map