import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { y as n } from "./constants-C54mky4_.js";
import { t as r } from "./setValue-Cb0PYC7t.js";
import { t as i } from "./isFunction-brgHXDf3.js";
import { t as a } from "./on-f-HmOL0n.js";
import { t as o } from "./partial-goh6HOls.js";
import { t as s } from "./layout-Bapa39KM.js";
import { t as c } from "./sendEvent-bwvhd4A-.js";
import { t as l } from "./entries-BPLrbAVw.js";
import { t as u } from "./createDiv-Bb3O54wx.js";
import { t as d } from "./insertElement-DtUB7uKq.js";
import { t as f } from "./setInnerHtml-ClDKp0Zh.js";
import { t as p } from "./alpha-gvIHBiw7.js";
import { t as m } from "./createSpan-DpSRnwEQ.js";
import { t as h } from "./intValue-NIZZTFPF.js";
import { t as g } from "./numberIsNaN-D2-MBtSw.js";
import { t as _ } from "./closestTable-Dfg3mstY.js";
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

//# sourceMappingURL=scavenging-Cvd4y7wu.js.map