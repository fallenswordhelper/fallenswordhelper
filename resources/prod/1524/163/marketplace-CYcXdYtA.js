import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { t as n } from "./on-afIPYx-0.js";
import { t as r } from "./layout-6CPY-bfq.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./createDiv-CH3rNL4c.js";
import { t as o } from "./insertElement-C_6uFPNr.js";
import { t as s } from "./setInnerHtml-Dh9y9Se-.js";
import { t as c } from "./onclick-8ZwMJyqI.js";
import { t as l } from "./intValue-CkkaXek9.js";
import { t as u } from "./createButton-YvU0Rx_S.js";
import { t as d } from "./addCommas-BgpPUQrd.js";
import { t as f } from "./closestTd-B6S4IM7U.js";
//#region src/modules/marketplace.js
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
	n && n > 0 ? t.value = Math.floor(C() / n / 1.005) : t.value = "", S();
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
//#endregion
export { O as default };

//# sourceMappingURL=marketplace-CYcXdYtA.js.map