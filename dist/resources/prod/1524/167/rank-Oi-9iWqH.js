import { t as e } from "./guild-_o9vVAQk.js";
import { t } from "./_dataAccess-BLVLQyDJ.js";
import { t as n } from "./ranksView-BNKqelVA.js";
import { t as r } from "./arrayFrom-CKk6qt2j.js";
import { t as i } from "./batch-B3DxuTgO.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as s } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./layout-B2Q1UoM2.js";
import { t as u } from "./indexAjaxData-BAm_dTyc.js";
import { t as d } from "./sendEvent-Co2_qySS.js";
import { t as f } from "./insertElementBefore-CaihVZse.js";
import { t as p } from "./onclick-nv-Fl1th.js";
import { t as m } from "./playerName-DbmV53SI.js";
import { t as h } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as g } from "./toLowerCase-Cpm0Ikhj.js";
import { t as _ } from "./getValue-vrUqpo0a.js";
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
var I = /rank_id=(?<rankId>\d+)/;
function L(e, t, n) {
	let r = h(I, e.target.getAttribute("onclick"));
	j(g(e.target.value), r);
	let i = t.parentNode.rows[n];
	f(t, i);
	let a = F(e.target.value);
	window.scrollBy(0, a), e.stopPropagation();
}
function R(e) {
	d("ranks", "overrideUpDown");
	let t = e.target.parentNode.parentNode.parentNode, n = t.rowIndex + P(e.target.value);
	ee(t, n) || L(e, t, n);
}
function z(e) {
	N(e) && R(e);
}
function B() {
	M && _("ajaxifyRankControls") && p(l(), z, !0);
}
function V(e, t) {
	t.includes(m()) && (M = e.rowIndex);
}
// src/modules/guild/ranks/weightings.js
var H = [
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
], U = (e, [, t]) => e + t - 1, W = (e) => H.filter(([t]) => v(e, t)).reduce(U, 0), G = (e) => e >>> 0, K = (e) => G(e).toString(2), q = (e) => K(e).split("").map(Number).reduce(E, 0), J = (e) => T(W(e) + q(e), 1);
function Y(e, t) {
	let [n] = t.children, r = a(n.firstChild), i = e.find((e) => e && e.name === r);
	i && S(n, `<span class="fshBlue">(${J(i.permissions)}) Tax:(${i.tax ?? 0}%)</span> `);
}
function X(e, t) {
	d("ranks", "fetchRankData"), e.forEach(c(Y, t));
}
function Z(e, t, n) {
	let r = b({
		className: "fsh-weightings",
		innerHTML: "[ "
	}), i = y({
		className: "fshBl fsh-bli",
		textContent: "Get Rank Weightings"
	});
	C(i, "click", c(X, e, t)), x(r, i), o(r, " ]");
	let a = n.parentNode.parentNode;
	x(a, r);
}
function Q(e, t) {
	let n = w("#pCC a[href*=\"=ranks&subcmd2=add\"]");
	n && Z(e, t, n);
}
// src/modules/guild/ranks/rank.js
function $() {
	let e = l().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;
	if (e) return r(e);
}
function te(e, t) {
	let n = t.children[0], r = a(n), i = e.find((e) => e.name === r);
	if (i?.members.length) {
		let e = i.members.map((e) => e.name);
		V(t, e), o(n, ` <span class="fshBlue">- ${e.join(", ")}</span>`);
	}
}
function ne(e) {
	let t = $();
	t && (i([
		3,
		t,
		1,
		c(te, e)
	]), Q(t, e), B());
}
async function re() {
	if (s()) return;
	let e = await O();
	e?.s && ne(e.r);
}
export { re as default };

//# sourceMappingURL=rank-Oi-9iWqH.js.map