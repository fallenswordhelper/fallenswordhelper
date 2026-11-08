import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./createSpan-dzM9C32V.js";
import { t as n } from "./closestTable-B73T3rIi.js";
import { t as r } from "./getElementById-C08-3H-C.js";
import { t as i } from "./getText-BqjgTHLv.js";
import { t as a } from "./insertElement-6ZBKaryO.js";
import { t as o } from "./numberIsNaN-DNn4rI1u.js";
import { t as s } from "./on-DfyX3AS4.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./setInnerHtml-f0MFRJnQ.js";
import { t as u } from "./intValue-DGRimvm1.js";
import { t as d } from "./alpha-BRx-EQ4u.js";
import { t as f } from "./createDiv-B84RqGfo.js";
import { t as p } from "./entries-PXiXtjwA.js";
import { t as m } from "./isFunction-BydUD9aW.js";
import { t as h } from "./layout-B2Q1UoM2.js";
import { y as g } from "./constants-CenxlFMY.js";
import { t as _ } from "./setValue-D-C74rTg.js";
// src/modules/scavenging/lookForMultiplierCount.js
function v(e) {
	n(e).removeAttribute("width");
}
function y(e) {
	let n = t();
	return a(e.parentNode, n), n;
}
function b(e, t, n) {
	let r = u(i(t)), a = Math.floor(r / n).toString();
	l(`&nbsp;&nbsp;Max: ${a} times`, e);
}
function x(t, n, r) {
	e("scavenging", "redrawMaxTimes"), l("", t);
	let i = Number(r.value);
	!o(i) && i !== 0 && b(t, n, i);
}
function S(e, t, n) {
	e && x(e, t, n);
}
function C(e, t, n) {
	let r = c(S, e, t, n);
	r(), s(n, "keyup", r);
}
function w(e) {
	v(e), C(y(e), r("statbar-gold"), r("gold"));
}
function T() {
	let e = r("multiplier_count");
	e && w(e);
}
// src/modules/scavenging/setLastScav.js
function E(e, t) {
	_("lastScavPage", `${g}scavenging&cave_id=${e}&gold=${t}`);
}
// src/modules/scavenging/lookForSendRequest.js
var D = 0;
function O() {
	return D || (D = f(), a(h(), D)), l("", D), D;
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
	return d(e, t);
}
function N([e, t]) {
	return `<br>${t} ${e}(s), `;
}
function P(e) {
	let t = j(e);
	return `<br>${e.length} item(s):${p(t).sort(M).map(N).join("")}`;
}
function F(e) {
	let t = e.match(/Item Gained: <strong>[^<]+<\/strong>/g);
	return t ? P(t) : "";
}
function I() {
	e("scavenging", "multiScav");
	let t = "", n = r("scavenge_results");
	if (n) {
		let e = n.innerHTML;
		t += k(e, /victorious/g, "Victories"), t += k(e, /defeated/g, ", Defeats"), t += F(e);
	}
	return t;
}
function L(e) {
	return function(t, n, r) {
		e(t, n, r), E(r, n), l(I(), O());
	};
}
function R() {
	if (!sendRequest) return;
	let e = sendRequest;
	m(e) && (sendRequest = L(e));
}
// src/modules/scavenging/scavenging.js
function z() {
	R(), T();
}
export { z as default };

//# sourceMappingURL=scavenging-BCIDUHkv.js.map