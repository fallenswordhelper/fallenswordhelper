import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./createDiv-B84RqGfo.js";
import { t as r } from "./closestTable-B73T3rIi.js";
import { t as i } from "./getElementById-C08-3H-C.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./partial-Bo20zBni.js";
import { t as c } from "./querySelector-C6ReNysW.js";
import { t as l } from "./querySelectorArray-C70U47NF.js";
import { t as u } from "./setText-CVjyFkRt.js";
import { at as d } from "./constants-CenxlFMY.js";
import { t as f } from "./layout-B2Q1UoM2.js";
// src/modules/bank/ajaxifyBank.js
var p = "#pCC #withdraw_amount", m = "#pCC #deposit_amount", h = "#pCC input[value=\"Deposit\"]";
function g(e) {
	let t = i("info-msg");
	t ? r(t).replaceWith(e) : f().prepend(e);
}
function _(e, t) {
	let n = l(e, t);
	l(e).forEach((e, t) => {
		u(a(n[t]), e);
	});
}
function v(e) {
	a(l("#pCC b")[e]) === "0" && (c(h).disabled = !0);
}
function y(e, t = document) {
	return c(e === "deposit" ? m : p, t).value;
}
function b(e) {
	let t = Number(y("deposit")), n = Number(y("deposit", e));
	n < t && (c(m).value = n);
}
function x(e, t, n) {
	g(n), b(t), c(p).value = e.initWithdraw, _("#statbar-gold, #statbar-gold-tooltip dd, #pCC b", t), v(e.depoPos);
}
async function S(t, n, a) {
	let o = await e({
		...t.data,
		mode: n,
		amount: a
	});
	if (!o) return;
	let s = i("info-msg", o);
	s && x(t, o, r(s));
}
function C(e, n, r) {
	r.preventDefault(), t("bank", n), S(e, n, y(n));
}
function w(e) {
	e.appLink && f().append(n({
		classList: "fshCenter",
		innerHTML: `<a href="${d}bank">Go to Guild Bank</a>`
	}));
}
function T(e, t, n) {
	v(e.depoPos), o(t, s(C, e, "deposit")), o(n, s(C, e, "withdraw"));
}
function E(e) {
	w(e);
	let t = c(h), n = c("#pCC input[value=\"Withdraw\"]");
	n && t && T(e, t, n);
}
function D(e) {
	let t = c(e.headSelector);
	t && a(t) === e.headText && E(e);
}
export { D as t };

//# sourceMappingURL=ajaxifyBank-BsE4q62r.js.map