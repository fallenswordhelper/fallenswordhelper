import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./setValue-Cb0PYC7t.js";
import { t as n } from "./isFunction-brgHXDf3.js";
import { t as r } from "./on-f-HmOL0n.js";
import { t as i } from "./fallback-BaBUEkCV.js";
import { t as a } from "./arrayFrom-LpiPmbFE.js";
import { t as o } from "./partial-goh6HOls.js";
import { t as s } from "./sendEvent-bwvhd4A-.js";
import { t as c } from "./createDiv-Bb3O54wx.js";
import { t as l } from "./insertElement-DtUB7uKq.js";
import { t as u } from "./onclick-9iRduoOH.js";
import { t as d } from "./hideElement-DH6fODir.js";
import { i as f } from "./simpleCheckbox-D5o0QaTA.js";
import { t as p } from "./toggleForce-rAfOl5ZW.js";
//#region src/modules/common/collapse.js
var m = [], h = 0, g = 0;
function _(e, t, n) {
	e.rows.forEach(t), e.open = n;
}
function v(e) {
	d(e.row);
}
function y(e, t) {
	s("collapse", "collapseArt", e), _(t, v, !1);
}
function b(e) {
	m.forEach((t) => {
		t.open && y(e, t);
	});
}
function x(e) {
	p(e.row, !1);
}
function S(e, t) {
	s("collapse", "expandArt", e), _(t, x, !0);
}
function C(e) {
	m.forEach((t) => {
		t.open || S(e, t);
	});
}
function w(e) {
	if (e.rowIndex % g === 0) return e;
}
function T(e) {
	if (e.tagName === "TR") return w(e);
	if (e.tagName !== "TABLE") return T(e.parentNode);
}
function E(e, t) {
	let n = T(t.target);
	if (!n) return;
	let r = m[n.rowIndex / g];
	r.open === !1 ? (b(e), S(e, r)) : y(e, r);
}
function D(e, t) {
	h && E(e, t);
}
function O(e) {
	h && e.classList.add("fshPoint");
}
function k(e, t) {
	h ? (d(e), t.open = !1) : t.open = !0;
}
function A(e, t) {
	n(e) && e(t);
}
function j(e, t, n, r) {
	t === 0 && (n.header = e, O(e), A(r.extraFn, e)), r.articleTest(t) && (n.rows[t] = i(n[t], {}), n.rows[t].row = e, k(e, n));
}
function M(e, t) {
	let n = t.rowIndex % g, r = (t.rowIndex - n) / g;
	m[r] = i(m[r], {});
	let a = m[r];
	a.rows = a.rows || [], j(t, n, a, e);
}
function N(e) {
	e.header.classList.toggle("fshPoint");
}
function P() {
	m.forEach(N);
}
function F(e) {
	s("collapse", "togglePref", e), h = !h, t(e, h), h ? b(e) : C(e), P();
}
function I(t) {
	h = e(t).checked, r(e(t), "change", o(F, t));
}
function L(e) {
	g = e.headInd, I(e.prefName), a(e.theTable.rows).forEach(o(M, e)), u(e.theTable, o(D, e.prefName));
}
//#endregion
//#region src/modules/guild/hall/setupPref.js
function R(e, t) {
	let n = c({
		className: "fshPref",
		innerHTML: f(e)
	});
	t.classList.add("fshRelative"), l(t, n);
}
//#endregion
export { L as n, R as t };

//# sourceMappingURL=setupPref-D37JOyGS.js.map