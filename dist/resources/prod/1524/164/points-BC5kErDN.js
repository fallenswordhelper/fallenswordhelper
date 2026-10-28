import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
import { n as r } from "./system-CNA0YLOa.js";
import { p as i } from "./constants-CenxlFMY.js";
import { t as a } from "./setValue-B1MbQwxn.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./on-DfyX3AS4.js";
import { t as c } from "./getUrlParameter-DQUJPuXf.js";
import { t as l } from "./partial-Bo20zBni.js";
import { t as u } from "./sendEvent-DkxfZozg.js";
import { t as d } from "./insertElement-6ZBKaryO.js";
import { t as f } from "./setInnerHtml-f0MFRJnQ.js";
import { t as p } from "./querySelectorArray-C70U47NF.js";
import { t as m } from "./closestTr-BGwSv-6S.js";
import { t as h } from "./createSpan-9KJdvIXK.js";
import { t as g } from "./intValue-DGRimvm1.js";
import { t as _ } from "./insertTextBeforeEnd-RtQnGU19.js";
import { t as v } from "./setText-CVjyFkRt.js";
import { t as y } from "./upgradeAlert-DWTo2J3B.js";
import { t as b } from "./numberIsNaN-DNn4rI1u.js";
// src/modules/upgrades.js
var x = 0, S = 0, C = {};
function w(e, n) {
	return t(n).includes(e);
}
function T(e) {
	return x.find(l(w, e));
}
function E(e) {
	return T(e).nextElementSibling.nextElementSibling.nextElementSibling;
}
function D(e, t) {
	return t === "amount" ? RegExp(`\\+(\\d+) ${e}`) : /(?<cost>\d{1,3})\xA0/u;
}
function O(e, r, i) {
	if (!C[e][i]) {
		let a = D(e, i), o = n(a, t(r));
		C[e][i] = o;
	}
	return C[e][i];
}
function k(e, t) {
	return O(e, t, "amount");
}
function A(e, t) {
	return O(e, t.nextElementSibling, "cost");
}
function j(e, t) {
	if (C[e] || (C[e] = {}), !C[e].span) {
		let n = h();
		_(t, " "), d(t, n), C[e].span = n;
	}
	return C[e].span;
}
function M(e, t, n, r) {
	let i = k(e, t), a = A(e, t), o = Math.floor(S / a) * i;
	n * a <= S ? (o = n * i, r.className = "fshBlue") : r.className = "fshRed", v(`(+${o} stamina)`, r);
}
function N(e, t, n) {
	u("upgrades", "updateStamCount");
	let { target: r } = n, i = Number(r.value), a = j(e, t);
	b(i) || i === 0 ? a.className = "fshHide" : M(e, t, i, a);
}
function P(e) {
	let t = T(e);
	s(o("input[name=\"quantity\"]", m(t)), "keyup", l(N, e, t));
}
function F() {
	S = g(t(e("statbar-fsp"))), P("Current"), P("Maximum"), f(`<a href="${r}${i}marketplace">Sell at Marketplace</a>`, E("Gold"));
}
function I(e, t) {
	let r = T(e).nextElementSibling.nextElementSibling;
	if (r) {
		let e = Number(n(/(?<value>\d{1,3}) \/ 115/, r.innerHTML));
		a(t, e + 5);
	}
}
function L() {
	x = p("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"), !(x.length < 1) && (I("+1 Max Allies", "alliestotal"), I("+1 Max Enemies", "enemiestotal"), F());
}
// src/modules/chrome/pageSwitcher/points.js
function R() {
	c("type") === "1" ? y() : L();
}
export { R as default };

//# sourceMappingURL=points-BC5kErDN.js.map