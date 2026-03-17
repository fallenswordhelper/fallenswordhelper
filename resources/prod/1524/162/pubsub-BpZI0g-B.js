import { t as e } from "./devStdOut-BnwcHKWA.js";
import { t } from "./task-jKbgFyYT.js";
import { t as n } from "./partial-goh6HOls.js";
//#region src/modules/support/pubsub.js
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
//#endregion
export { s as n, c as r, o as t };

//# sourceMappingURL=pubsub-BpZI0g-B.js.map