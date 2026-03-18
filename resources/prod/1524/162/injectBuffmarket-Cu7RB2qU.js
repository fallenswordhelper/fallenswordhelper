import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./on-f-HmOL0n.js";
import { t as r } from "./partial-goh6HOls.js";
import { t as i } from "./layout-Bapa39KM.js";
import { t as a } from "./sendEvent-bwvhd4A-.js";
import { t as o } from "./setInnerHtml-ClDKp0Zh.js";
import { t as s } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as c } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as l } from "./aGenericFallback-uC2pHFMR.js";
import { t as u } from "./onclick-9iRduoOH.js";
import { t as d } from "./fromEntries-Bc4U4usg.js";
import { t as f } from "./buffmarket-Bjl5Z8Bj.js";
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

//# sourceMappingURL=injectBuffmarket-Cu7RB2qU.js.map