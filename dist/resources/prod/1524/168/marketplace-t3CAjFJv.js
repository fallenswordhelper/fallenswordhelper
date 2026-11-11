import { t as e } from "./sendEvent-DdWrU3DL.js";
import { t } from "./createDiv-B84RqGfo.js";
import { t as n } from "./getElementById-C08-3H-C.js";
import { t as r } from "./insertElement-6ZBKaryO.js";
import { t as i } from "./on-DfyX3AS4.js";
import { t as a } from "./onclick-nv-Fl1th.js";
import { t as o } from "./setInnerHtml-f0MFRJnQ.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./addCommas-Bv8TEVoY.js";
import { t as l } from "./createButton-xxO4WpnK.js";
import { t as u } from "./closestTd-qGJKTnGX.js";
import { t as d } from "./intValue-DGRimvm1.js";
import { t as f } from "./getText-BqjgTHLv.js";
// src/modules/marketplace.js
var p = 0, m = 0, h = 0;
function g() {
	return p ||= n("amount"), p;
}
function _() {
	return m ||= n("price"), m;
}
function v() {
	return h || (h = t({ className: "fshBlue fshCenter" }), r(s(), h)), h;
}
function y(e, t) {
	let n = e * t;
	return n + Math.ceil(n / 200);
}
function b(e) {
	let t = g().value;
	o(`You are offering to buy <b>${t}</b> FSP for >> <b>${c(e)}</b> (Total: ${c(y(t, e))})`, v());
}
function x() {
	h?.innerHTML !== "" && o("", h);
}
function S() {
	e("marketplace", "addMarketplaceWarning");
	let t = _();
	if (t) {
		let e = Number(t.value);
		e ? b(e) : x();
	}
}
function C() {
	return d(f(n("statbar-gold")));
}
function w() {
	return l({
		innerText: "Spend It All",
		style: "font-size: 8px; position: absolute;"
	});
}
function T(e, t) {
	if (!e || !t) return;
	let n = Number(e.value);
	t.value = n && n > 0 ? Math.floor(C() / n / 1.005) : "", S();
}
function E(e, t) {
	u(e).append(t);
}
function D() {
	if (!g() || !_()) return;
	let e = w();
	a(e, () => T(g(), _())), E(g(), e);
	let t = w();
	a(t, () => T(_(), g())), E(_(), t);
}
function O() {
	D(), i(s(), "keyup", S);
}
export { O as default };

//# sourceMappingURL=marketplace-t3CAjFJv.js.map