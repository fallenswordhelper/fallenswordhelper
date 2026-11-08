import { t as e } from "./task-C5UKL2RH.js";
import { t } from "./isFunction-BydUD9aW.js";
// src/modules/common/batch.js
function n(e, t, n) {
	return n && performance.now() < e && t < n.length;
}
function r(n, r) {
	t(r) && e(n, r);
}
function i([t, a, o, s, c]) {
	let l = performance.now() + 5, u = o;
	for (; n(l, u, a);) s(a[u], u, a), u += 1;
	u < a.length ? e(t, i, [[
		t,
		a,
		u,
		s,
		c
	]]) : r(t, c);
}
export { i as t };

//# sourceMappingURL=batch-B3DxuTgO.js.map