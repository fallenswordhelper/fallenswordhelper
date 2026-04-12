import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./playerName-WE8p-OHq.js";
import { t as n } from "./regExpFirstCapture-Bi32xMqS.js";
import { t as r } from "./getValue-j5JjE6f3.js";
import { t as i } from "./querySelector-8FH1hhUv.js";
import { t as a } from "./arrayFrom-B0aMFj4F.js";
import { t as o } from "./partial-CYzPXpZP.js";
import { t as s } from "./layout-6CPY-bfq.js";
import { t as c } from "./once-CDCBWIEZ.js";
import { t as l } from "./sendEvent-DFQy5lFi.js";
import { t as u } from "./insertElement-C_6uFPNr.js";
import { t as d } from "./_dataAccess-Cm9xXxBc.js";
import { t as f } from "./indexAjaxData-yJPb4vet.js";
import { t as p } from "./toLowerCase-8GoRkIKu.js";
import { t as m } from "./onclick-8ZwMJyqI.js";
import { t as h } from "./ranksView-B_unVfPp.js";
import { t as g } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as _ } from "./insertElementBefore-Bwz7Hji8.js";
import { t as v } from "./createSpan-DCxGsyWX.js";
import { t as y } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as b } from "./createButton-YvU0Rx_S.js";
import { t as x } from "./guild-IDh5qwdY.js";
import { t as S } from "./insertHtmlAfterBegin-B7TFwEJg.js";
import { t as C } from "./sum-C7p962tc.js";
import { t as w } from "./batch-Bv-NXhgk.js";
import { t as T } from "./bitwiseAnd-Dx8jptac.js";
import { t as E } from "./roundToString-GwdvYP3d.js";
//#region src/modules/app/guild/ranks/ranks.js
function D(e) {
	return x({
		subcmd: "ranks",
		...e
	});
}
//#endregion
//#region src/modules/_dataAccess/daRanksView.js
function O() {
	return d(D, h);
}
//#endregion
//#region src/modules/app/guild/ranks/position.js
function k(e, t) {
	return D({
		subcmd2: e,
		rank_id: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daRankPosition.js
async function A(e, t) {
	return await f({
		cmd: "guild",
		subcmd: "ranks",
		subcmd2: e,
		rank_id: t
	}), { s: !0 };
}
function j(e, t) {
	return d(k, A, e, t);
}
//#endregion
//#region src/modules/guild/ranks/doButtons.js
var M = 0, N = (e) => ["Up", "Down"].includes(e.target.value);
function P(e, t) {
	return M >= Math.min(e.rowIndex, t) || t < 1 || t > e.parentNode.rows.length;
}
function ee(e) {
	return e === "Up" ? -1 : 2;
}
function F(e) {
	return e === "Up" ? -22 : 22;
}
var I = /rank_id=(?<rankId>\d+)/;
function L(e, t, r) {
	let i = n(I, e.target.getAttribute("onclick"));
	j(p(e.target.value), i);
	let a = t.parentNode.rows[r];
	_(t, a);
	let o = F(e.target.value);
	window.scrollBy(0, o), e.stopPropagation();
}
function R(e) {
	l("ranks", "overrideUpDown");
	let t = e.target.parentNode.parentNode.parentNode, n = t.rowIndex + ee(e.target.value);
	P(t, n) || L(e, t, n);
}
function z(e) {
	N(e) && R(e);
}
function B() {
	M && r("ajaxifyRankControls") && m(s(), z, !0);
}
function V(e, n) {
	n.includes(t()) && (M = e.rowIndex);
}
//#endregion
//#region src/modules/guild/ranks/weightings.js
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
], U = (e, [, t]) => e + t - 1, W = (e) => H.filter(([t]) => T(e, t)).reduce(U, 0), G = (e) => e >>> 0, K = (e) => G(e).toString(2), q = (e) => K(e).split("").map(Number).reduce(C, 0), J = (e) => E(W(e) + q(e), 1);
function Y(t, n) {
	let [r] = n.children, i = e(r.firstChild), a = t.find((e) => e && e.name === i);
	a && S(r, `<span class="fshBlue">(${J(a.permissions)}) Tax:(${a.tax ?? 0}%)</span> `);
}
function X(e, t) {
	l("ranks", "fetchRankData"), e.forEach(o(Y, t));
}
function Z(e, t, n) {
	let r = v({
		className: "fsh-weightings",
		innerHTML: "[ "
	}), i = b({
		className: "fshBl fsh-bli",
		textContent: "Get Rank Weightings"
	});
	c(i, "click", o(X, e, t)), u(r, i), y(r, " ]");
	let a = n.parentNode.parentNode;
	u(a, r);
}
function Q(e, t) {
	let n = i("#pCC a[href*=\"=ranks&subcmd2=add\"]");
	n && Z(e, t, n);
}
//#endregion
//#region src/modules/guild/ranks/rank.js
function $() {
	let e = s().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;
	if (e) return a(e);
}
function te(t, n) {
	let r = n.children[0], i = e(r), a = t.find((e) => e.name === i);
	if (a?.members.length) {
		let e = a.members.map((e) => e.name);
		V(n, e), y(r, ` <span class="fshBlue">- ${e.join(", ")}</span>`);
	}
}
function ne(e) {
	let t = $();
	t && (w([
		3,
		t,
		1,
		o(te, e)
	]), Q(t, e), B());
}
async function re() {
	if (g()) return;
	let e = await O();
	e?.s && ne(e.r);
}
//#endregion
export { re as default };

//# sourceMappingURL=rank-RjaZtjg6.js.map