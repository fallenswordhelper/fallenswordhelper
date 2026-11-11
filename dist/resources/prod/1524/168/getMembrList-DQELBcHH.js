import { t as e } from "./guildMembers-CPbT3-Re.js";
import { t } from "./currentGuildId-Bpd4l1O8.js";
import { t as n } from "./fromEntries-BytjDDMx.js";
import { t as r } from "./isArray-jaX-hZZq.js";
import { t as i } from "./isObject-BL3L1f85.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./calf-SqS2SeU4.js";
import { n as s, t as c } from "./now-B3pCBQja.js";
import { n as l, r as u } from "./idb-D8xqEbs-.js";
// src/modules/ajax/getMembrList.js
function d(e, t) {
	let n = t || {};
	u("fsh_membrList", $.extend(n, e));
}
async function f(e) {
	return d(e, await l("fsh_membrList")), e;
}
function p(e, t) {
	if (!r(t)) return;
	let i = n(t.map((e) => [e.username, e]));
	return { [e]: {
		lastUpdate: s(),
		...i
	} };
}
async function m(t) {
	return p(t, await e(t));
}
async function h(e) {
	let t = await m(e);
	return f(t), t;
}
var g = [
	(e, t) => t,
	(e, t) => i(t),
	(e, t) => i(t[e]),
	(e, t) => typeof t[e].lastUpdate == "number",
	(e, t) => t[e].lastUpdate > c()
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
	return e ? h(t) : y(t, await l("fsh_membrList"));
}
function x(e, t) {
	if (t) return o.membrList = t[e], o.membrList;
}
async function S(e) {
	let n = t();
	if (n) return x(n, await b(e, n));
	throw Error("no guild id");
}
export { S as t };

//# sourceMappingURL=getMembrList-DQELBcHH.js.map