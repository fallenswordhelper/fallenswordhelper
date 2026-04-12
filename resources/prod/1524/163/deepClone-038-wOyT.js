import { t as e } from "./isObject-DwzOQgsf.js";
import { t } from "./isArray-FpVoUujB.js";
import { t as n } from "./partial-CYzPXpZP.js";
import { t as r } from "./entries-CiJ6YMwx.js";
import { t as i } from "./_dataAccess-Cm9xXxBc.js";
import { t as a } from "./indexAjaxJson-DywREKHQ.js";
import { t as o } from "./guild-IDh5qwdY.js";
//#region src/modules/app/guild/fetchinv.js
function s() {
	return o({ subcmd: "fetchinv" });
}
//#endregion
//#region src/modules/_dataAccess/daGuildFetchInv.js
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
//#endregion
//#region src/modules/common/extend.js
function f(t, n, [r, i]) {
	e(i) && i !== null ? t[r] = n(i.constructor(), i) : t[r] = i;
}
function p(t, i) {
	return e(i) && r(i).forEach(n(f, t, p)), t;
}
//#endregion
//#region src/modules/common/deepClone.js
function m(e) {
	return e?.constructor && p(e.constructor(), e);
}
//#endregion
export { d as n, m as t };

//# sourceMappingURL=deepClone-038-wOyT.js.map