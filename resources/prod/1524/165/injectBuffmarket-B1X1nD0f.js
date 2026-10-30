import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { t } from "./querySelector-C6ReNysW.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./partial-Bo20zBni.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./sendEvent-DkxfZozg.js";
import { t as o } from "./setInnerHtml-f0MFRJnQ.js";
import { t as s } from "./_dataAccess-BLVLQyDJ.js";
import { t as c } from "./indexAjaxDoc-WR96kHce.js";
import { t as l } from "./aGenericFallback-C6VAMq13.js";
import { t as u } from "./onclick-nv-Fl1th.js";
import { t as d } from "./fromEntries-BytjDDMx.js";
import { t as f } from "./buffmarket-BS-yFB7t.js";
// src/modules/app/buffmarket/buy.js
function p(e) {
	return f({
		subcmd: "buy",
		id: e
	});
}
// src/modules/_dataAccess/daBuffMarketBuy.js
function m(e) {
	return l({
		cmd: "buffmarket",
		subcmd: "buy",
		id: e
	}, "Request accepted - buffs have automatically been cast.");
}
function h(e) {
	return s(p, m, e);
}
// src/modules/buffmarket/injectBuffmarket.js
async function g(e, n) {
	a("buffmarket", "search"), n.preventDefault(), o("<div class=\"fshWaiting\">Loading...</div>", e);
	let r = d(new FormData(n.target)), i = await c(r);
	if (!i) return;
	let s = t("#buff-results", i);
	if (!s) return;
	let l = s.parentElement.innerHTML;
	o(l, e);
}
function _(e) {
	let t = document.forms[0];
	n(t, "submit", r(g, e.parentNode));
}
async function v(e, t) {
	let n = e.target.parentNode;
	n.className = "fshActionRow", o("<div class=\"fshSpin\"><span class=\"fshSpinner\"></span></div>", n);
	let r = await h(t);
	if (r?.s) o("<span class=\"fshBuffSuccess\">Buffs have been applied</span>", n);
	else {
		let e = r?.e?.message ?? "Failed";
		o(`<span class="fshBuffFail">${e}</span>`, n);
	}
}
function y(t) {
	a("buffmarket", "interceptBuy"), t.stopPropagation();
	let n = e(/id=(?<id>\d+)/, t.target.getAttribute("onclick"));
	n && v(t, n);
}
function b(e) {
	e.target.tagName === "INPUT" && e.target.value === "Buy" && y(e);
}
function x() {
	let e = t("#buff-results");
	e && (_(e), u(i(), b, !0));
}
export { x as default };

//# sourceMappingURL=injectBuffmarket-B1X1nD0f.js.map