import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./on-afIPYx-0.js";
import { t as r } from "./partial-CYzPXpZP.js";
import { t as i } from "./layout-6CPY-bfq.js";
import { t as a } from "./sendEvent-DFQy5lFi.js";
import { t as o } from "./setInnerHtml-Dh9y9Se-.js";
import { t as s } from "./_dataAccess-Cm9xXxBc.js";
import { t as c } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as l } from "./aGenericFallback-hK73Fv-s.js";
import { t as u } from "./onclick-8ZwMJyqI.js";
import { t as d } from "./fromEntries-CXGCeH0k.js";
import { t as f } from "./buffmarket-CK0i6obF.js";
//#region src/modules/app/buffmarket/buy.js
function p(e) {
	return f({
		subcmd: "buy",
		id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daBuffMarketBuy.js
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
//#endregion
//#region src/modules/buffmarket/injectBuffmarket.js
async function g(e, n) {
	a("buffmarket", "search"), n.preventDefault(), o("<div class=\"fshWaiting\">Loading...</div>", e);
	let r = await c(d(new FormData(n.target)));
	if (!r) return;
	let i = t("#buff-results", r);
	if (!i) return;
	let s = i.parentElement.innerHTML;
	o(s, e);
}
function _(e) {
	let t = document.forms[0];
	n(t, "submit", r(g, e.parentNode));
}
async function v(e, t) {
	let n = e.target.parentNode;
	n.className = "fshActionRow", o("<div class=\"fshSpin\"><span class=\"fshSpinner\"></span></div>", n);
	let r = await h(t);
	r?.s ? o("<span class=\"fshBuffSuccess\">Buffs have been applied</span>", n) : o(`<span class="fshBuffFail">${r?.e?.message ?? "Failed"}</span>`, n);
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
//#endregion
export { x as default };

//# sourceMappingURL=injectBuffmarket-DcISuRqr.js.map