import { t as e } from "./isObject-BL3L1f85.js";
import { t } from "./isArray-jaX-hZZq.js";
import { t as n } from "./partial-Bo20zBni.js";
import { t as r } from "./entries-PXiXtjwA.js";
import { t as i } from "./_dataAccess-BLVLQyDJ.js";
import { t as a } from "./indexAjaxJson-DlbvYfbd.js";
import { t as o } from "./guild-DLz3dLCx.js";
// src/modules/app/guild/fetchinv.js
function s() {
	return o({ subcmd: "fetchinv" });
}
// src/modules/_dataAccess/daGuildFetchInv.js
function c(e) {
	let t = {
		a: Number(e.a),
		b: Number(e.b),
		l: Number(e.l),
		n: e.extra ? e.extra.name : e.n,
		t: Number(e.t)
	};
	return {
		...e,
		...t
	};
}
function l(e) {
	return t(e) ? {
		r: e.map(c),
		s: !0
	} : {
		e: {
			code: 0,
			message: "Server Error"
		},
		s: !1
	};
}
async function u() {
	return l(await a({
		cmd: "guild",
		subcmd: "fetchinv"
	}));
}
function d() {
	return i(s, u);
}
// src/modules/common/extend.js
function f(t, n, [r, i]) {
	t[r] = e(i) && i !== null ? n(i.constructor(), i) : i;
}
function p(t, i) {
	return e(i) && r(i).forEach(n(f, t, p)), t;
}
// src/modules/common/deepClone.js
function m(e) {
	return e?.constructor && p(e.constructor(), e);
}
export { d as n, m as t };

//# sourceMappingURL=deepClone-BymKwOcu.js.map