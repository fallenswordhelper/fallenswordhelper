import { t as e } from "./buffmarket-CtSovNfq.js";
import { t } from "./_dataAccess-BLVLQyDJ.js";
import { t as n } from "./aGenericFallback-6foHv24I.js";
import { t as r } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as i } from "./sendEvent-Co2_qySS.js";
import { t as a } from "./fromEntries-BytjDDMx.js";
import { t as o } from "./on-DfyX3AS4.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./querySelector-C6ReNysW.js";
import { t as u } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as d } from "./setInnerHtml-f0MFRJnQ.js";
import { t as f } from "./layout-B2Q1UoM2.js";
// src/modules/app/buffmarket/buy.js
function p(t) {
	return e({
		subcmd: "buy",
		id: t
	});
}
// src/modules/_dataAccess/daBuffMarketBuy.js
function m(e) {
	return n({
		cmd: "buffmarket",
		subcmd: "buy",
		id: e
	}, "Request accepted - buffs have automatically been cast.");
}
function h(e) {
	return t(p, m, e);
}
// src/modules/buffmarket/injectBuffmarket.js
async function g(e, t) {
	i("buffmarket", "search"), t.preventDefault(), d("<div class=\"fshWaiting\">Loading...</div>", e);
	let n = a(new FormData(t.target)), o = await r(n);
	if (!o) return;
	let s = l("#buff-results", o);
	if (!s) return;
	let c = s.parentElement.innerHTML;
	d(c, e);
}
function _(e) {
	let t = document.forms[0];
	o(t, "submit", c(g, e.parentNode));
}
async function v(e, t) {
	let n = e.target.parentNode;
	n.className = "fshActionRow", d("<div class=\"fshSpin\"><span class=\"fshSpinner\"></span></div>", n);
	let r = await h(t);
	if (r?.s) d("<span class=\"fshBuffSuccess\">Buffs have been applied</span>", n);
	else {
		let e = r?.e?.message ?? "Failed";
		d(`<span class="fshBuffFail">${e}</span>`, n);
	}
}
function y(e) {
	i("buffmarket", "interceptBuy"), e.stopPropagation();
	let t = u(/id=(?<id>\d+)/, e.target.getAttribute("onclick"));
	t && v(e, t);
}
function b(e) {
	e.target.tagName === "INPUT" && e.target.value === "Buy" && y(e);
}
function x() {
	let e = l("#buff-results");
	e && (_(e), s(f(), b, !0));
}
export { x as default };

//# sourceMappingURL=injectBuffmarket-CGypNV-c.js.map