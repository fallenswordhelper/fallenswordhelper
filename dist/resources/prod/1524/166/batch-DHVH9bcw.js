import { t as e } from "./isFunction-BydUD9aW.js";
import { t } from "./task-97dxbWda.js";
// src/modules/common/batch.js
function n(e, t, n) {
	return n && performance.now() < e && t < n.length;
}
function r(n, r) {
	e(r) && t(n, r);
}
function i([e, a, o, s, c]) {
	let l = performance.now() + 5, u = o;
	for (; n(l, u, a);) s(a[u], u, a), u += 1;
	u < a.length ? t(e, i, [[
		e,
		a,
		u,
		s,
		c
	]]) : r(e, c);
}
export { i as t };

//# sourceMappingURL=batch-DHVH9bcw.js.map