import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { t as n } from "./regExpFirstCapture-Bi32xMqS.js";
import { i as r, r as i, s as a } from "./now-CA_NVGr7.js";
import { t as o } from "./getTextTrim-hYBF-bdh.js";
import { t as s } from "./sendEvent-DFQy5lFi.js";
import { t as c } from "./entries-CiJ6YMwx.js";
import { t as l } from "./getApp-CqGRjnvO.js";
import { t as u } from "./_dataAccess-Cm9xXxBc.js";
import { t as d } from "./createDocument-CAZCPKmJ.js";
import { t as f } from "./indexAjaxData-yJPb4vet.js";
import { t as p } from "./querySelectorArray-Bdj4peIm.js";
import { n as m, r as h } from "./idb-BvD4EIHy.js";
import { t as g } from "./fromEntries-CXGCeH0k.js";
//#region src/modules/app/combat/view.js
function _(e) {
	return l({
		cmd: "combat",
		subcmd: "view",
		combat_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daViewCombat.js
var v = (e) => Number(n(/\/(?<id>\d+)/, e.getAttribute("background")));
function y(e, t) {
	let r = RegExp(`${t} = (\\d+)`);
	return Number(n(r, e));
}
function b(e) {
	let t = [[18, "leeched"], [21, "Spell"]].map(([t, n]) => [
		t,
		e.includes(n),
		e.split(" ")[0],
		e.split("'")[1]
	]).find(([, e]) => e);
	return t ? {
		id: t[0],
		params: [t[2], t[3]]
	} : (s("Logs", "Missing PvP Special", e), {
		id: -1,
		params: ["-1", "-1"]
	});
}
function x(e) {
	return p("#specialsDiv", e).map(o).filter((e) => ["leeched", "Spell"].some((t) => e.includes(t))).map(b);
}
function S(e, t) {
	return {
		id: v(e.rows[1].cells[t]),
		name: o(e.rows[0].cells[t])
	};
}
function C(e, t) {
	let n = t.children[0].rows[5].cells[0].children[0];
	return {
		attacker: S(n, 0),
		defender: S(n, 2),
		id: Number(e),
		specials: x(t)
	};
}
function w(e) {
	let n = t(e.children[1]);
	return {
		gold_gain: y(n, "goldGain"),
		gold_stolen: y(n, "goldStolen"),
		pvp_prestige_gain: y(n, "prestigeGain"),
		pvp_rating_change: y(n, "pvpRatingChange"),
		winner: y(n, "winner"),
		xp_gain: y(n, "xpGain")
	};
}
function T(e, t) {
	return {
		...C(e, t),
		...w(t)
	};
}
function E(t, n) {
	return {
		r: { combat: T(t, e("pCC", d(n))) },
		s: !0
	};
}
async function D(e) {
	return E(e, await f({
		cmd: "combat",
		subcmd: "view",
		combat_id: e
	}));
}
function O(e) {
	return u(_, D, e);
}
//#endregion
//#region src/modules/logs/playerLogWidgets/getCombat.js
var k = "fsh_pvpCombat", A = null, j = {}, M = {}, N = (e) => ([t, n]) => t === "lastCheck" || n?.logTime > e;
function P(e) {
	let t = {
		...g(c(e).filter(N(a()))),
		lastCheck: i()
	};
	return h(k, t), t;
}
async function F() {
	let e = await m(k);
	return j = e ? (e?.lastCheck ?? 0) < r() ? P(e) : e : { lastCheck: i() }, j;
}
async function I(e, t) {
	M[t] = O(t);
	let n = await M[t];
	if (!n?.s) {
		delete M[t];
		return;
	}
	return j[t] = {
		...n,
		logTime: e
	}, h(k, j), n;
}
async function L(e, t) {
	A ||= F();
	let n = await A;
	return n[t] ? n[t] : M[t] ? M[t] : I(e, t);
}
//#endregion
export { L as t };

//# sourceMappingURL=getCombat-DaYOWYjq.js.map