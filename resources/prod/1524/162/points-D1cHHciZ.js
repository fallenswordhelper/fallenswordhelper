import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import { t as n } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import { n as r } from "./system-De1jBRGa.js";
import { p as i } from "./constants-C54mky4_.js";
import "./getValue-CCThXEzy.js";
import { t as a } from "./setValue-Cb0PYC7t.js";
import { t as o } from "./querySelector-qkBBhiGH.js";
import { t as s } from "./on-f-HmOL0n.js";
import { t as c } from "./getUrlParameter-qxOiipWG.js";
import { t as l } from "./partial-goh6HOls.js";
import { t as u } from "./sendEvent-bwvhd4A-.js";
import { t as d } from "./insertElement-DtUB7uKq.js";
import { t as f } from "./setInnerHtml-ClDKp0Zh.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as p } from "./querySelectorArray-BZbNvND7.js";
import { t as m } from "./closestTr-C0LB9ALA.js";
import { t as h } from "./createSpan-DpSRnwEQ.js";
import { t as g } from "./intValue-NIZZTFPF.js";
import { t as _ } from "./insertTextBeforeEnd-DHBcAPdo.js";
import { t as v } from "./setText-C9n73usW.js";
import { t as y } from "./upgradeAlert-CY9xM0Ao.js";
import { t as b } from "./numberIsNaN-D2-MBtSw.js";
//#region src/modules/upgrades.js
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
		let a = n(D(e, i), t(r));
		C[e][i] = a;
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
	if (b(i) || i === 0) {
		a.className = "fshHide";
		return;
	}
	M(e, t, i, a);
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
	r && a(t, Number(n(/(?<value>\d{1,3}) \/ 115/, r.innerHTML)) + 5);
}
function L() {
	x = p("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"), !(x.length < 1) && (I("+1 Max Allies", "alliestotal"), I("+1 Max Enemies", "enemiestotal"), F());
}
//#endregion
//#region src/modules/chrome/pageSwitcher/points.js
function R() {
	c("type") === "1" ? y() : L();
}
//#endregion
export { R as default };

//# sourceMappingURL=points-D1cHHciZ.js.map