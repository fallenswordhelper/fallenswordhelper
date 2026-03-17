import { t as e } from "./getApp-B7uFgqYY.js";
import { t } from "./_dataAccess-tuhLVrPW.js";
import { t as n } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as r } from "./uniq-SYQgNgys.js";
import { n as i, t as a } from "./buffReportParser-CWfaADse.js";
//#region src/modules/app/quickbuff.js
function o(t, n) {
	return e({
		cmd: "quickbuff",
		subcmd: "activate",
		username: t,
		skill: n
	});
}
//#endregion
//#region src/modules/common/getBuffId.js
function s(e) {
	let t = i(e);
	return t ? t.id : -1;
}
//#endregion
//#region src/modules/_dataAccess/daQuickbuff.js
var c = ({ successBuff: e, successLevel: t }) => ({
	id: s(e),
	level: Number(t)
}), l = (e, t) => e.filter(({ name: e, successBuff: n }) => e === t.name && n).map(c), u = ({ failBuff: e, failReason: t }) => ({
	id: s(e),
	reason: t
}), d = ({ blockBuff: e, blockReason: t }) => ({
	id: s(e),
	reason: t
}), f = (e, t) => e.filter(({ name: e, blockBuff: n }) => e === t.name && n).map(d), p = (e, t) => e.filter(({ name: e, failBuff: n }) => e === t.name && n).map(u).concat(f(e, t)), m = (e) => r(e, "name").map((t) => ({
	player: { name: t.name },
	cast: l(e, t),
	failed: p(e, t)
}));
function h(e) {
	let [, t, n, r, i, a, o, s, c, l] = e;
	return {
		name: r || o || s,
		successBuff: t,
		successLevel: n,
		failBuff: i,
		failReason: a,
		blockReason: c,
		blockBuff: l
	};
}
function g(e) {
	return e ? {
		r: m(a(e).map(h)),
		s: !0
	} : { s: !1 };
}
async function _(e, t) {
	return g(await n({
		cmd: "quickbuff",
		subcmd: "activate",
		targetPlayers: e.join(),
		skills: t
	}));
}
function v(e, n) {
	return t(o, _, e, n);
}
//#endregion
//#region src/modules/common/quickbuffSuccess.js
function y(e) {
	return e.s && e.r[0].casts.length === 1;
}
//#endregion
export { v as n, y as t };

//# sourceMappingURL=quickbuffSuccess-BF_YKomW.js.map