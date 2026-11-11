import { t as e } from "./guild-_o9vVAQk.js";
import { t } from "./_dataAccess-BLVLQyDJ.js";
import { t as n } from "./ranksView-BNKqelVA.js";
import { t as r } from "./arrayFrom-CKk6qt2j.js";
import { t as i } from "./batch-Bd8m-56D.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as s } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./layout-B2Q1UoM2.js";
import { t as u } from "./indexAjaxData-BAm_dTyc.js";
import { t as d } from "./sendEvent-DdWrU3DL.js";
import { t as f } from "./fsPostParam-DT4AaRdC.js";
import { t as p } from "./insertElementBefore-CaihVZse.js";
import { t as m } from "./onclick-nv-Fl1th.js";
import { t as h } from "./playerName-DbmV53SI.js";
import { t as g } from "./toLowerCase-Cpm0Ikhj.js";
import { t as _ } from "./getValue-DMlY7SSn.js";
import { t as v } from "./bitwiseAnd-CA8X-IvP.js";
import { t as y } from "./createButton-xxO4WpnK.js";
import { t as b } from "./createSpan-dzM9C32V.js";
import { t as x } from "./insertElement-6ZBKaryO.js";
import { t as S } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as C } from "./once-D8BIpjVX.js";
import { t as w } from "./querySelector-C6ReNysW.js";
import { t as T } from "./roundToString-CaKiZD15.js";
import { t as E } from "./sum-D2GDuxYE.js";
// src/modules/app/guild/ranks/ranks.js
function D(t) {
	return e({
		subcmd: "ranks",
		...t
	});
}
// src/modules/_dataAccess/daRanksView.js
function O() {
	return t(D, n);
}
// src/modules/app/guild/ranks/position.js
function k(e, t) {
	return D({
		subcmd2: e,
		rank_id: t
	});
}
// src/modules/_dataAccess/daRankPosition.js
async function A(e, t) {
	return await u({
		cmd: "guild",
		subcmd: "ranks",
		subcmd2: e,
		rank_id: t
	}), { s: !0 };
}
function j(e, n) {
	return t(k, A, e, n);
}
// src/modules/guild/ranks/doButtons.js
var M = 0, N = (e) => ["Up", "Down"].includes(e.target.value);
function ee(e, t) {
	return M >= Math.min(e.rowIndex, t) || t < 1 || t > e.parentNode.rows.length;
}
function P(e) {
	return e === "Up" ? -1 : 2;
}
function F(e) {
	return e === "Up" ? -22 : 22;
}
function I(e, t, n, r) {
	j(g(e.target.value), r);
	let i = t.parentNode.rows[n];
	p(t, i);
	let a = F(e.target.value);
	window.scrollBy(0, a), e.stopPropagation();
}
function L(e) {
	let t = f(e.target, "rank_id");
	if (!t) return;
	d("ranks", "overrideUpDown");
	let n = e.target.parentNode.parentNode.parentNode, r = n.rowIndex + P(e.target.value);
	ee(n, r) || I(e, n, r, t);
}
function R(e) {
	N(e) && L(e);
}
function z() {
	M && _("ajaxifyRankControls") && m(l(), R, !0);
}
function B(e, t) {
	t.includes(h()) && (M = e.rowIndex);
}
// src/modules/guild/ranks/weightings.js
var V = [
	[2, 5],
	[4, 4],
	[64, 5],
	[256, .1],
	[512, .2],
	[4096, .5],
	[32768, .2],
	[524288, .1],
	[65536, 5],
	[4194304, 4]
], H = (e, [, t]) => e + t - 1, U = (e) => V.filter(([t]) => v(e, t)).reduce(H, 0), W = (e) => e >>> 0, G = (e) => W(e).toString(2), K = (e) => G(e).split("").map(Number).reduce(E, 0), q = (e) => T(U(e) + K(e), 1);
function J(e, t) {
	let [n] = t.children, r = a(n.firstChild), i = e.find((e) => e && e.name === r);
	i && S(n, `<span class="fshBlue">(${q(i.permissions)}) Tax:(${i.tax ?? 0}%)</span> `);
}
function Y(e, t) {
	d("ranks", "fetchRankData"), e.forEach(c(J, t));
}
function X(e, t, n) {
	let r = b({
		className: "fsh-weightings",
		innerHTML: "[ "
	}), i = y({
		className: "fshBl fsh-bli",
		textContent: "Get Rank Weightings"
	});
	C(i, "click", c(Y, e, t)), x(r, i), o(r, " ]");
	let a = n.parentNode.parentNode;
	x(a, r);
}
function Z(e, t) {
	let n = w("#pCC a[href*=\"=ranks&subcmd2=add\"]");
	n && X(e, t, n);
}
// src/modules/guild/ranks/rank.js
function Q() {
	let e = l().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;
	if (e) return r(e);
}
function $(e, t) {
	let n = t.children[0], r = a(n), i = e.find((e) => e.name === r);
	if (i?.members.length) {
		let e = i.members.map((e) => e.name);
		B(t, e), o(n, ` <span class="fshBlue">- ${e.join(", ")}</span>`);
	}
}
function te(e) {
	let t = Q();
	t && (i([
		3,
		t,
		1,
		c($, e)
	]), Z(t, e), z());
}
async function ne() {
	if (s()) return;
	let e = await O();
	e?.s && te(e.r);
}
export { ne as default };

//# sourceMappingURL=rank-CRJf8oCv.js.map