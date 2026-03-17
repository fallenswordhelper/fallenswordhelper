import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import { at as n } from "./constants-C54mky4_.js";
import { t as r } from "./querySelector-qkBBhiGH.js";
import { t as i } from "./partial-goh6HOls.js";
import { t as a } from "./layout-Bapa39KM.js";
import { t as o } from "./sendEvent-bwvhd4A-.js";
import { t as s } from "./createDiv-Bb3O54wx.js";
import { t as c } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as l } from "./onclick-9iRduoOH.js";
import { t as u } from "./querySelectorArray-BZbNvND7.js";
import { t as d } from "./setText-C9n73usW.js";
import { t as f } from "./closestTable-Dfg3mstY.js";
//#region src/modules/bank/ajaxifyBank.js
var p = "#pCC #withdraw_amount", m = "#pCC #deposit_amount", h = "#pCC input[value=\"Deposit\"]";
function g(t) {
	let n = e("info-msg");
	n ? f(n).replaceWith(t) : a().prepend(t);
}
function _(e, n) {
	let r = u(e, n);
	u(e).forEach((e, n) => {
		d(t(r[n]), e);
	});
}
function v(e) {
	t(u("#pCC b")[e]) === "0" && (r(h).disabled = !0);
}
function y(e, t = document) {
	return r(e === "deposit" ? m : p, t).value;
}
function b(e) {
	let t = Number(y("deposit")), n = Number(y("deposit", e));
	n < t && (r(m).value = n);
}
function x(e, t, n) {
	g(n), b(t), r(p).value = e.initWithdraw, _("#statbar-gold, #statbar-gold-tooltip dd, #pCC b", t), v(e.depoPos);
}
async function S(t, n, r) {
	let i = await c({
		...t.data,
		mode: n,
		amount: r
	});
	if (!i) return;
	let a = e("info-msg", i);
	a && x(t, i, f(a));
}
function C(e, t, n) {
	n.preventDefault(), o("bank", t), S(e, t, y(t));
}
function w(e) {
	e.appLink && a().append(s({
		classList: "fshCenter",
		innerHTML: `<a href="${n}bank">Go to Guild Bank</a>`
	}));
}
function T(e, t, n) {
	v(e.depoPos), l(t, i(C, e, "deposit")), l(n, i(C, e, "withdraw"));
}
function E(e) {
	w(e);
	let t = r(h), n = r("#pCC input[value=\"Withdraw\"]");
	n && t && T(e, t, n);
}
function D(e) {
	let n = r(e.headSelector);
	n && t(n) === e.headText && E(e);
}
//#endregion
export { D as t };

//# sourceMappingURL=ajaxifyBank-D8UCIDuy.js.map