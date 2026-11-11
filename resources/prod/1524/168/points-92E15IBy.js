import { t as e } from "./getUrlParameter--C3_Eqez.js";
import { t } from "./sendEvent-DdWrU3DL.js";
import { t as n } from "./createSpan-dzM9C32V.js";
import { t as r } from "./closestTr-BGwSv-6S.js";
import { t as i } from "./getElementById-C08-3H-C.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./insertTextBeforeEnd-RtQnGU19.js";
import { t as c } from "./numberIsNaN-DNn4rI1u.js";
import { t as l } from "./on-DfyX3AS4.js";
import { t as u } from "./partial-Bo20zBni.js";
import { t as d } from "./querySelector-C6ReNysW.js";
import { t as f } from "./querySelectorArray-C70U47NF.js";
import { t as p } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as m } from "./setInnerHtml-f0MFRJnQ.js";
import { t as h } from "./setText-CVjyFkRt.js";
import { p as g } from "./constants-CenxlFMY.js";
import { t as _ } from "./intValue-DGRimvm1.js";
import { t as v } from "./setValue-D-C74rTg.js";
import { n as y } from "./system-CNA0YLOa.js";
import { t as b } from "./upgradeAlert-DBxqvsDe.js";
// src/modules/upgrades.js
var x = 0, S = 0, C = {};
function w(e, t) {
	return a(t).includes(e);
}
function T(e) {
	return x.find(u(w, e));
}
function E(e) {
	return T(e).nextElementSibling.nextElementSibling.nextElementSibling;
}
function D(e, t) {
	return t === "amount" ? RegExp(`\\+(\\d+) ${e}`) : /(?<cost>\d{1,3})\xA0/u;
}
function O(e, t, n) {
	if (!C[e][n]) {
		let r = D(e, n), i = p(r, a(t));
		C[e][n] = i;
	}
	return C[e][n];
}
function k(e, t) {
	return O(e, t, "amount");
}
function A(e, t) {
	return O(e, t.nextElementSibling, "cost");
}
function j(e, t) {
	if (C[e] || (C[e] = {}), !C[e].span) {
		let r = n();
		s(t, " "), o(t, r), C[e].span = r;
	}
	return C[e].span;
}
function M(e, t, n, r) {
	let i = k(e, t), a = A(e, t), o = Math.floor(S / a) * i;
	n * a <= S ? (o = n * i, r.className = "fshBlue") : r.className = "fshRed", h(`(+${o} stamina)`, r);
}
function N(e, n, r) {
	t("upgrades", "updateStamCount");
	let { target: i } = r, a = Number(i.value), o = j(e, n);
	c(a) || a === 0 ? o.className = "fshHide" : M(e, n, a, o);
}
function P(e) {
	let t = T(e);
	l(d("input[name=\"quantity\"]", r(t)), "keyup", u(N, e, t));
}
function F() {
	S = _(a(i("statbar-fsp"))), P("Current"), P("Maximum"), m(`<a href="${y}${g}marketplace">Sell at Marketplace</a>`, E("Gold"));
}
function I(e, t) {
	let n = T(e).nextElementSibling.nextElementSibling;
	if (n) {
		let e = Number(p(/(?<value>\d{1,3}) \/ 115/, n.innerHTML));
		v(t, e + 5);
	}
}
function L() {
	x = f("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"), x.length < 1 || (I("+1 Max Allies", "alliestotal"), I("+1 Max Enemies", "enemiestotal"), F());
}
// src/modules/chrome/pageSwitcher/points.js
function R() {
	e("type") === "1" ? b() : L();
}
export { R as default };

//# sourceMappingURL=points-92E15IBy.js.map