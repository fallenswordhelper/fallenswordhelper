import { t as e } from "./indexAjaxData-BAm_dTyc.js";
import { t } from "./getApp-xCmcyAG-.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./sendEvent-Co2_qySS.js";
import { t as i } from "./all-D5SlTl7_.js";
import { t as a } from "./createSpan-dzM9C32V.js";
import { t as o } from "./clickThis-UHuK6eKQ.js";
import { t as s } from "./closestTr-BGwSv-6S.js";
import { t as c } from "./getArrayByClassName-RPqCUmVz.js";
import { t as l } from "./getElementById-C08-3H-C.js";
import { t as u } from "./insertElementAfterBegin-igbTIqzp.js";
import { t as d } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as f } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as p } from "./onclick-nv-Fl1th.js";
import { t as m } from "./doStatTotal-BJ2H-Y2H.js";
import { t as h } from "./layout-B2Q1UoM2.js";
import { t as g } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as _ } from "./getValue-vrUqpo0a.js";
import { t as v } from "./system-CNA0YLOa.js";
import { t as y } from "./querySelectorArray-C70U47NF.js";
import { t as b } from "./relatePlayer-sV01-C8j.js";
import { St as x } from "./constants-CenxlFMY.js";
// src/modules/app/auctionhouse/auctionhouse.js
function S(e) {
	return t({
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
function w(t) {
	return e({
		cmd: "auctionhouse",
		subcmd: "cancel",
		auction_id: t
	});
}
function T(e) {
	return n(C, w, e);
}
// src/modules/auctionHouse/colourPlayerNames.js
var E = () => y(x, l("resultRows")).filter((e) => !e.href.endsWith("=null")), D = async (e) => (await i(e.map(b))).filter(([, e]) => e), O = {
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
	o(l("refresh"));
}
function M(e) {
	let [t] = e.parentNode.parentNode.children[0].children;
	return e.outerHTML = `<img src="${v}ui/misc/spinner.gif" width="14" height="14">`, T(g(t.dataset.tipped, "inv_id"));
}
async function N() {
	r("AH", "cancelAllAH");
	let e = c("auctionCancel", l("resultRows"));
	e.length !== 0 && (await i(e.map(M)), j());
}
function P() {
	let e = s(l("fill"))?.nextElementSibling?.children?.[0];
	if (!e) return;
	let t = a({
		className: "smallLink",
		textContent: "Cancel All"
	});
	e.classList.add("fshCenter"), d(e, "]"), u(e, t), d(e, "["), p(t, N);
}
function F() {
	_("autoFillMinBidPrice") && o(l("auto-fill"));
}
function I() {
	!f() && h() && (P(), F(), m(), A());
}
export { I as default };

//# sourceMappingURL=injectAuctionHouse-CvCQgqlm.js.map