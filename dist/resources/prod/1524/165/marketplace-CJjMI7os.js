import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./layout-B2Q1UoM2.js";
import { t as i } from "./sendEvent-DkxfZozg.js";
import { t as a } from "./createDiv-XU2XBEIv.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./setInnerHtml-f0MFRJnQ.js";
import { t as c } from "./onclick-nv-Fl1th.js";
import { t as l } from "./intValue-DGRimvm1.js";
import { t as u } from "./createButton-DCXb__Na.js";
import { t as d } from "./addCommas-Bv8TEVoY.js";
import { t as f } from "./closestTd-qGJKTnGX.js";
// src/modules/marketplace.js
var p = 0, m = 0, h = 0;
function g() {
	return p ||= e("amount"), p;
}
function _() {
	return m ||= e("price"), m;
}
function v() {
	return h || (h = a({ className: "fshBlue fshCenter" }), o(r(), h)), h;
}
function y(e, t) {
	let n = e * t;
	return n + Math.ceil(n / 200);
}
function b(e) {
	let t = g().value;
	s(`You are offering to buy <b>${t}</b> FSP for >> <b>${d(e)}</b> (Total: ${d(y(t, e))})`, v());
}
function x() {
	h?.innerHTML !== "" && s("", h);
}
function S() {
	i("marketplace", "addMarketplaceWarning");
	let e = _();
	if (e) {
		let t = Number(e.value);
		t ? b(t) : x();
	}
}
function C() {
	return l(t(e("statbar-gold")));
}
function w() {
	return u({
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
	f(e).append(t);
}
function D() {
	if (!g() || !_()) return;
	let e = w();
	c(e, () => T(g(), _())), E(g(), e);
	let t = w();
	c(t, () => T(_(), g())), E(_(), t);
}
function O() {
	D(), n(r(), "keyup", S);
}
export { O as default };

//# sourceMappingURL=marketplace-CJjMI7os.js.map