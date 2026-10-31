import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./system-CNA0YLOa.js";
import { St as n } from "./constants-CenxlFMY.js";
import { t as r } from "./getValue-sxwJaOE3.js";
import { t as i } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import { t as o } from "./sendEvent-yx1DwCDA.js";
import { t as s } from "./getArrayByClassName-RPqCUmVz.js";
import { t as c } from "./getApp-ClZXM9Yf.js";
import { t as l } from "./_dataAccess-BLVLQyDJ.js";
import { t as u } from "./indexAjaxData-BcvK7Oaz.js";
import { t as d } from "./clickThis-UHuK6eKQ.js";
import { t as f } from "./onclick-nv-Fl1th.js";
import { t as p } from "./querySelectorArray-C70U47NF.js";
import { t as m } from "./closestTr-BGwSv-6S.js";
import { t as h } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as g } from "./createSpan-9KJdvIXK.js";
import { t as _ } from "./all-D5SlTl7_.js";
import { t as v } from "./insertElementAfterBegin-igbTIqzp.js";
import { t as y } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as b } from "./doStatTotal-8M0EYmHp.js";
import { t as x } from "./relatePlayer-DCCvFSVW.js";
// src/modules/app/auctionhouse/auctionhouse.js
function S(e) {
	return c({
		cmd: "auctionhouse",
		...e
	});
}
// src/modules/app/auctionhouse/cancel.js
function C(e) {
	return S({
		subcmd: "cancel",
		auction_id: e
	});
}
// src/modules/_dataAccess/daAuctionCancel.js
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
// src/modules/auctionHouse/colourPlayerNames.js
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
// src/modules/auctionHouse/injectAuctionHouse.js
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
	!h() && a() && (P(), F(), b(), A());
}
export { I as default };

//# sourceMappingURL=injectAuctionHouse-Bb8pr0K4.js.map