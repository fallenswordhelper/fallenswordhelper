import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./system-DeHfCtq2.js";
import { St as n } from "./constants-CIKidKvt.js";
import { t as r } from "./getValue-j5JjE6f3.js";
import { t as i } from "./getCustomUrlParameter-Dna1URkG.js";
import { t as a } from "./layout-6CPY-bfq.js";
import { t as o } from "./sendEvent-DFQy5lFi.js";
import { t as s } from "./getArrayByClassName-9tzft1UU.js";
import { t as c } from "./getApp-CqGRjnvO.js";
import { t as l } from "./_dataAccess-Cm9xXxBc.js";
import { t as u } from "./indexAjaxData-yJPb4vet.js";
import { t as d } from "./clickThis-5GuZiKOQ.js";
import { t as f } from "./onclick-8ZwMJyqI.js";
import { t as p } from "./querySelectorArray-Bdj4peIm.js";
import { t as m } from "./closestTr-DTXY0qkG.js";
import { t as h } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as g } from "./createSpan-DCxGsyWX.js";
import { t as _ } from "./all-Csir9X7x.js";
import { t as v } from "./insertElementAfterBegin-BtRv1I55.js";
import { t as y } from "./insertHtmlAfterBegin-B7TFwEJg.js";
import { t as b } from "./doStatTotal-Da2svjj7.js";
import { t as x } from "./relatePlayer-DaZSPkGj.js";
//#region src/modules/app/auctionhouse/auctionhouse.js
function S(e) {
	return c({
		cmd: "auctionhouse",
		...e
	});
}
//#endregion
//#region src/modules/app/auctionhouse/cancel.js
function C(e) {
	return S({
		subcmd: "cancel",
		auction_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daAuctionCancel.js
function w(e) {
	return u({
		cmd: "auctionhouse",
		subcmd: "cancel",
		auction_id: e
	});
}
function T(e) {
	return l(C, w, e);
}
//#endregion
//#region src/modules/auctionHouse/colourPlayerNames.js
var E = () => p(n, e("resultRows")).filter((e) => !e.href.endsWith("=null")), D = async (e) => (await _(e.map(x))).filter(([, e]) => e), O = {
	guild: "fshGreen",
	ally: "fshBlue",
	enemy: "fshRed"
};
async function k() {
	let e = E();
	if (!e.length) return;
	let t = await D(e);
	t.length && t.forEach(([e, t]) => {
		e.classList.add(O[t]);
	});
}
async function A() {
	await k(), $(document).ajaxSuccess((e, t, n) => {
		n.url.endsWith("=ajaxsearch") && k();
	});
}
//#endregion
//#region src/modules/auctionHouse/injectAuctionHouse.js
function j() {
	d(e("refresh"));
}
function M(e) {
	let [n] = e.parentNode.parentNode.children[0].children;
	return e.outerHTML = `<img src="${t}ui/misc/spinner.gif" width="14" height="14">`, T(i(n.dataset.tipped, "inv_id"));
}
async function N() {
	o("AH", "cancelAllAH");
	let t = s("auctionCancel", e("resultRows"));
	t.length !== 0 && (await _(t.map(M)), j());
}
function P() {
	let t = m(e("fill"))?.nextElementSibling?.children?.[0];
	if (!t) return;
	let n = g({
		className: "smallLink",
		textContent: "Cancel All"
	});
	t.classList.add("fshCenter"), y(t, "]"), v(t, n), y(t, "["), f(n, N);
}
function F() {
	r("autoFillMinBidPrice") && d(e("auto-fill"));
}
function I() {
	h() || !a() || (P(), F(), b(), A());
}
//#endregion
export { I as default };

//# sourceMappingURL=injectAuctionHouse-DByrJgev.js.map