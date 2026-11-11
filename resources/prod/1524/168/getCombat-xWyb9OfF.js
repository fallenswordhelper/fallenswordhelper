import { t as e } from "./indexAjaxData-BAm_dTyc.js";
import { t } from "./sendEvent-DdWrU3DL.js";
import { t as n } from "./getApp-xCmcyAG-.js";
import { t as r } from "./getElementById-C08-3H-C.js";
import { t as i } from "./getText-BqjgTHLv.js";
import { t as a } from "./getTextTrim-CvXe85fp.js";
import { t as o } from "./querySelectorArray-C70U47NF.js";
import { t as s } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as c } from "./createDocument-B1aK9_TZ.js";
import { t as l } from "./_dataAccess-BLVLQyDJ.js";
import { t as u } from "./entries-PXiXtjwA.js";
import { t as d } from "./fromEntries-BytjDDMx.js";
import { i as f, r as p, s as m } from "./now-B3pCBQja.js";
import { n as h, r as g } from "./idb-D8xqEbs-.js";
// src/modules/app/combat/view.js
function _(e) {
	return n({
		cmd: "combat",
		subcmd: "view",
		combat_id: e
	});
}
// src/modules/_dataAccess/daViewCombat.js
var v = (e) => Number(s(/\/(?<id>\d+)/, e.getAttribute("background")));
function y(e, t) {
	let n = RegExp(`${t} = (\\d+)`);
	return Number(s(n, e));
}
function b(e) {
	let n = [[18, "leeched"], [21, "Spell"]].map(([t, n]) => [
		t,
		e.includes(n),
		e.split(" ")[0],
		e.split("'")[1]
	]).find(([, e]) => e);
	return n ? {
		id: n[0],
		params: [n[2], n[3]]
	} : (t("Logs", "Missing PvP Special", e), {
		id: -1,
		params: ["-1", "-1"]
	});
}
function x(e) {
	return o("#specialsDiv", e).map(a).filter((e) => ["leeched", "Spell"].some((t) => e.includes(t))).map(b);
}
function S(e, t) {
	return {
		id: v(e.rows[1].cells[t]),
		name: a(e.rows[0].cells[t])
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
	let t = i(e.children[1]);
	return {
		gold_gain: y(t, "goldGain"),
		gold_stolen: y(t, "goldStolen"),
		pvp_prestige_gain: y(t, "prestigeGain"),
		pvp_rating_change: y(t, "pvpRatingChange"),
		winner: y(t, "winner"),
		xp_gain: y(t, "xpGain")
	};
}
function T(e, t) {
	return {
		...C(e, t),
		...w(t)
	};
}
function E(e, t) {
	let n = c(t);
	return {
		r: { combat: T(e, r("pCC", n)) },
		s: !0
	};
}
async function D(t) {
	return E(t, await e({
		cmd: "combat",
		subcmd: "view",
		combat_id: t
	}));
}
function O(e) {
	return l(_, D, e);
}
// src/modules/logs/playerLogWidgets/getCombat.js
var k = "fsh_pvpCombat", A = null, j = {}, M = {}, N = (e) => ([t, n]) => t === "lastCheck" || n?.logTime > e;
function P(e) {
	let t = u(e).filter(N(m())), n = {
		...d(t),
		lastCheck: p()
	};
	return g(k, n), n;
}
async function F() {
	let e = await h(k);
	return j = e ? (e?.lastCheck ?? 0) < f() ? P(e) : e : { lastCheck: p() }, j;
}
async function I(e, t) {
	M[t] = O(t);
	let n = await M[t];
	if (!n?.s) delete M[t];
	else return j[t] = {
		...n,
		logTime: e
	}, g(k, j), n;
}
async function L(e, t) {
	A ||= F();
	let n = await A;
	return n[t] ? n[t] : M[t] ? M[t] : I(e, t);
}
export { L as t };

//# sourceMappingURL=getCombat-xWyb9OfF.js.map