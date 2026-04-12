import { n as e, t } from "./now-CA_NVGr7.js";
import { t as n } from "./isObject-DwzOQgsf.js";
import { t as r } from "./calf-DxCOTxVt.js";
import { t as i } from "./isArray-FpVoUujB.js";
import { t as a } from "./partial-CYzPXpZP.js";
import { t as o } from "./currentGuildId-D9JtVH2U.js";
import { n as s, r as c } from "./idb-BvD4EIHy.js";
import { t as l } from "./fromEntries-CXGCeH0k.js";
import { t as u } from "./guildMembers-BEsgDA8p.js";
//#region src/modules/ajax/getMembrList.js
function d(e, t) {
	let n = t || {};
	c("fsh_membrList", $.extend(n, e));
}
async function f(e) {
	return d(e, await s("fsh_membrList")), e;
}
function p(t, n) {
	if (!i(n)) return;
	let r = l(n.map((e) => [e.username, e]));
	return { [t]: {
		lastUpdate: e(),
		...r
	} };
}
async function m(e) {
	return p(e, await u(e));
}
async function h(e) {
	let t = await m(e);
	return f(t), t;
}
var g = [
	(e, t) => t,
	(e, t) => n(t),
	(e, t) => n(t[e]),
	(e, t) => typeof t[e].lastUpdate == "number",
	(e, n) => n[e].lastUpdate > t()
];
function _(e, t, n) {
	return n(e, t);
}
function v(e, t) {
	return g.every(a(_, e, t));
}
function y(e, t) {
	return v(e, t) ? t : h(e);
}
async function b(e, t) {
	return e ? h(t) : y(t, await s("fsh_membrList"));
}
function x(e, t) {
	if (t) return r.membrList = t[e], r.membrList;
}
async function S(e) {
	let t = o();
	if (t) return x(t, await b(e, t));
	throw Error("no guild id");
}
//#endregion
export { S as t };

//# sourceMappingURL=getMembrList-8D_88xrl.js.map