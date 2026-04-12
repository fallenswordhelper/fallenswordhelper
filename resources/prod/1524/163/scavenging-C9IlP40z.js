import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { y as n } from "./constants-CIKidKvt.js";
import { t as r } from "./setValue-31jE_mRr.js";
import { t as i } from "./isFunction-CWoZbFiZ.js";
import { t as a } from "./on-afIPYx-0.js";
import { t as o } from "./partial-CYzPXpZP.js";
import { t as s } from "./layout-6CPY-bfq.js";
import { t as c } from "./sendEvent-DFQy5lFi.js";
import { t as l } from "./entries-CiJ6YMwx.js";
import { t as u } from "./createDiv-CH3rNL4c.js";
import { t as d } from "./insertElement-C_6uFPNr.js";
import { t as f } from "./setInnerHtml-Dh9y9Se-.js";
import { t as p } from "./alpha-Dzfd-64M.js";
import { t as m } from "./createSpan-DCxGsyWX.js";
import { t as h } from "./intValue-CkkaXek9.js";
import { t as g } from "./numberIsNaN-Y6LDm3bY.js";
import { t as _ } from "./closestTable-B_Km1mKH.js";
//#region src/modules/scavenging/lookForMultiplierCount.js
function v(e) {
	_(e).removeAttribute("width");
}
function y(e) {
	let t = m();
	return d(e.parentNode, t), t;
}
function b(e, n, r) {
	let i = h(t(n));
	f(`&nbsp;&nbsp;Max: ${Math.floor(i / r).toString()} times`, e);
}
function x(e, t, n) {
	c("scavenging", "redrawMaxTimes"), f("", e);
	let r = Number(n.value);
	!g(r) && r !== 0 && b(e, t, r);
}
function S(e, t, n) {
	e && x(e, t, n);
}
function C(e, t, n) {
	let r = o(S, e, t, n);
	r(), a(n, "keyup", r);
}
function w(t) {
	v(t), C(y(t), e("statbar-gold"), e("gold"));
}
function T() {
	let t = e("multiplier_count");
	t && w(t);
}
//#endregion
//#region src/modules/scavenging/setLastScav.js
function E(e, t) {
	r("lastScavPage", `${n}scavenging&cave_id=${e}&gold=${t}`);
}
//#endregion
//#region src/modules/scavenging/lookForSendRequest.js
var D = 0;
function O() {
	return D || (D = u(), d(s(), D)), f("", D), D;
}
function k(e, t, n) {
	let r = e.match(t);
	return r ? `${n}: ${r.length}` : "";
}
function A(e, t) {
	let n = t.split(">")[1].split("<")[0];
	return e[n] = (e[n] ?? 0) + 1, e;
}
function j(e) {
	return e.reduce(A, {});
}
function M([e], [t]) {
	return p(e, t);
}
function N([e, t]) {
	return `<br>${t} ${e}(s), `;
}
function P(e) {
	let t = j(e);
	return `<br>${e.length} item(s):${l(t).sort(M).map(N).join("")}`;
}
function F(e) {
	let t = e.match(/Item Gained: <strong>[^<]+<\/strong>/g);
	return t ? P(t) : "";
}
function I() {
	c("scavenging", "multiScav");
	let t = "", n = e("scavenge_results");
	if (n) {
		let e = n.innerHTML;
		t += k(e, /victorious/g, "Victories"), t += k(e, /defeated/g, ", Defeats"), t += F(e);
	}
	return t;
}
function L(e) {
	return function(t, n, r) {
		e(t, n, r), E(r, n), f(I(), O());
	};
}
function R() {
	if (!sendRequest) return;
	let e = sendRequest;
	i(e) && (sendRequest = L(e));
}
//#endregion
//#region src/modules/scavenging/scavenging.js
function z() {
	R(), T();
}
//#endregion
export { z as default };

//# sourceMappingURL=scavenging-C9IlP40z.js.map